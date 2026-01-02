import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize Gemini
// Note: In a real production app, you should proxy these requests through a backend
// to protect your API key. We are using it directly here per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Classy. I am your digital concierge. How may I assist you with our services or availability today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Use ai.models.generateContent instead of deprecated getGenerativeModel
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are the virtual concierge for 'Classy Hair Salon', a high-end luxury salon in Medford, MA (241 Boston Ave). 
        Your tone is sophisticated, polite, warm, and professional. 
        You help clients with:
        1. Services: Precision Cuts, Color Artistry (Balayage, Foils), Texture & Care (Keratin).
        2. Hours: Mon-Sat 10am-7pm, Sun Closed.
        3. Booking: You cannot book directly. Politely encourage them to call 617-259-8510.
        4. Founder: Lien Lu, 20+ years experience.
        Keep responses concise and elegant.`
        },
        contents: [
            ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
            { role: 'user', parts: [{ text: userMessage }] }
        ]
      });
      
      // Access text property directly, do not call text() method
      const responseText = response.text || "I apologize, I am unable to provide a response at this moment.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error", error);
      setMessages(prev => [...prev, { role: 'model', text: "My apologies, I am having trouble connecting to the salon network. Please call us directly at 617-259-8510." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-16 right-0 w-[90vw] md:w-96 bg-white shadow-2xl overflow-hidden border border-stone/20 mb-4 rounded-sm"
            >
              {/* Header */}
              <div className="bg-charcoal text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-bronze" />
                    <span className="font-serif italic tracking-wide">Concierge</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 bg-cream/30 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-charcoal text-white' 
                        : 'bg-white border border-stone/30 text-offBlack shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-stone/30 p-3 text-xs text-bronze animate-pulse">
                      Consulting...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 bg-white border-t border-stone/10 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about our services..."
                  className="flex-grow bg-cream/50 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-bronze/50 font-sans"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-bronze text-white p-2 hover:bg-charcoal transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-charcoal text-white p-4 shadow-2xl border border-white/10 group"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} className="group-hover:text-bronze transition-colors" />}
        </motion.button>
      </div>
    </>
  );
};