import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background Visual - Premium Female Portrait with Slow Zoom */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" /> 
        <motion.img 
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop"
          alt="Classy Hair Salon Editorial Portrait"
          className="w-full h-full object-cover object-[50%_20%] opacity-90"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ 
            duration: 20, 
            ease: "linear", 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full container mx-auto px-6 md:px-12 flex flex-col justify-end pb-32 md:pb-24">
        <div className="max-w-5xl">
            <Reveal delay={0.2} width="100%">
            <h2 className="font-serif italic text-3xl md:text-5xl text-white/90 font-light mb-4 ml-1">
                One Intimate Experience.
            </h2>
            </Reveal>
            
            <Reveal delay={0.4} width="100%">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter leading-[0.9]">
                20 Years <br />
                <span className="text-bronze italic font-light tracking-normal pr-4">of</span> Artistry
            </h1>
            </Reveal>

            <div className="flex flex-col md:flex-row items-start md:items-end gap-12 mt-12 border-t border-white/20 pt-8">
                <Reveal delay={0.6}>
                    <p className="font-sans text-white/80 text-sm uppercase tracking-[0.25em] leading-loose max-w-sm font-medium">
                        Serving Medford<br />
                        Bespoke Styling<br />
                        Precision Cuts
                    </p>
                </Reveal>
                
                <Reveal delay={0.8}>
                    <Button onClick={scrollToServices} variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        Explore Collection
                    </Button>
                </Reveal>
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};