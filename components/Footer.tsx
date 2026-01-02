import React from 'react';
import { Reveal } from './ui/Reveal';
import { Instagram, Facebook, Mail, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-charcoal text-cream pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Huge CTA */}
        <div className="flex flex-col items-start mb-32 border-b border-white/10 pb-24">
          <Reveal>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-bronze mb-8">Reservations</p>
          </Reveal>
          <Reveal delay={0.2} width="100%">
            <a 
              href="tel:6172598510" 
              className="group block font-serif text-[10vw] leading-[0.9] text-white hover:text-bronze transition-colors duration-500"
            >
              <span className="flex items-center">
                BOOK NOW
                <ArrowUpRight className="w-[8vw] h-[8vw] ml-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" />
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.4}>
             <p className="font-sans text-white/40 text-lg mt-8 font-light">
                Call 617-259-8510 to schedule your experience.
             </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-sm font-light text-white/60">
           <div className="md:col-span-4">
             <Reveal>
                <div className="mb-8">
                    <span className="font-cursive text-6xl md:text-7xl text-white">Classy Hair Salon</span>
                </div>
                <p className="max-w-xs leading-relaxed">
                    A boutique hair salon bringing twenty years of artistry to Medford. 
                    Dedicated to organic luxury and bespoke styling.
                </p>
             </Reveal>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
             <Reveal delay={0.1}>
                <h4 className="font-sans text-xs uppercase tracking-widest text-white mb-6">Studio</h4>
                <p className="leading-loose">
                    241 Boston Ave<br />
                    Medford, MA 02155
                </p>
            </Reveal>
          </div>
          
          <div className="md:col-span-2">
             <Reveal delay={0.2}>
                <h4 className="font-sans text-xs uppercase tracking-widest text-white mb-6">Hours</h4>
                <p className="leading-loose">
                    Mon-Sat: 10am – 7pm<br />
                    Sun: Closed
                </p>
            </Reveal>
          </div>
          
          <div className="md:col-span-2">
            <Reveal delay={0.3}>
                <h4 className="font-sans text-xs uppercase tracking-widest text-white mb-6">Connect</h4>
                <div className="flex flex-col space-y-4">
                    <a href="mailto:lelien41@yahoo.com" className="hover:text-bronze transition-colors">Email Us</a>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-bronze transition-colors"><Instagram size={18}/></a>
                        <a href="#" className="hover:text-bronze transition-colors"><Facebook size={18}/></a>
                    </div>
                </div>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pt-24 font-sans text-[10px] text-white/20 uppercase tracking-widest">
          <p>© 2025 CLASSY HAIR SALON.</p>
          <p className="mt-4 md:mt-0">Design by Devendra</p>
        </div>
      </div>
    </footer>
  );
};