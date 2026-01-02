import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Background Visual - Premium Female Portrait */}
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" /> 
         
        <img 
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2669&auto=format&fit=crop"
          alt="Classy Hair Salon Editorial Portrait"
          className="w-full h-full object-cover object-[50%_20%] animate-subtle-zoom opacity-90"
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

            <Reveal delay={0.5}>
              <p className="font-serif italic text-xl md:text-2xl text-white/80 mt-4 ml-2 tracking-wide">
                By Lien Lu
              </p>
            </Reveal>

            <div className="flex flex-col md:flex-row items-start md:items-end gap-12 mt-12 border-t border-white/20 pt-8">
                <Reveal delay={0.6} width="100%">
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
    </section>
  );
};