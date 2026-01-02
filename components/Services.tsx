import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';
import { ServiceItem } from '../types';
import { ArrowRight } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: "Precision Cuts",
    description: "Whether you need a maintenance trim or a transformative new shape, our architectural approach ensures your cut grows out beautifully.",
    subtext: "Women’s Cut, Layers, Bob"
  },
  {
    title: "Color Artistry",
    description: "From covering grays to creating sun-kissed dimension, we use premium damage-free formulas for luminous shine.",
    subtext: "Balayage, Foils, Gloss"
  },
  {
    title: "Texture & Care",
    description: "Restore health with deep conditioning or smooth out texture for a polished finish.",
    subtext: "Keratin, Deep Conditioning"
  }
];

const serviceImages = [
  "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop", // Precision Cuts
  "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop", // Color Artistry (Balayage)
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop"  // Texture & Care
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-charcoal text-cream relative">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-12">
          <Reveal>
             <h2 className="font-serif text-5xl md:text-7xl text-white leading-none">
              The <br />
              <span className="italic font-light text-bronze">Collection</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
             <div className="mt-8 md:mt-0 max-w-xs text-right">
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 leading-loose">
                    Curated styling for the modern woman.
                </p>
             </div>
          </Reveal>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-32">
          {services.map((service, index) => (
            <Reveal key={index} delay={0.2 + (index * 0.1)} className="h-full">
              <div className="group h-full flex flex-col cursor-pointer">
                
                {/* Image Container - Female Specific */}
                <div className="relative aspect-[3/4] overflow-hidden bg-offBlack mb-8">
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                     <img 
                        src={serviceImages[index]} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                        alt={service.title} 
                     />
                     <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowRight className="text-white -rotate-45" size={24} />
                     </div>
                </div>

                {/* Text */}
                <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-4 group-hover:border-bronze transition-colors">
                        <h3 className="font-serif text-2xl lg:text-3xl text-white group-hover:text-bronze transition-colors">{service.title}</h3>
                        <span className="font-serif italic text-white/50 text-sm">0{index + 1}</span>
                    </div>
                    <p className="font-sans text-sm text-white/60 leading-relaxed font-light mb-4 min-h-[3rem]">
                        {service.description}
                    </p>
                    <p className="font-sans text-xs uppercase tracking-widest text-bronze mt-auto pt-4">
                        {service.subtext}
                    </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
        
        {/* Minimal Brand Strip */}
        <div className="flex flex-col items-center justify-center border-t border-white/10 pt-24">
             <Reveal>
                 <span className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-12 block text-center">Partners & Products</span>
                 <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    <span className="text-xl font-sans tracking-widest font-bold text-white">OLAPLEX</span>
                    <span className="text-xl font-serif font-bold text-white">L'ORÉAL</span>
                    <span className="text-xl font-sans tracking-[0.2em] text-white">REDKEN</span>
                    <span className="text-xl font-sans font-bold lowercase text-white">amika:</span>
                 </div>
                 
                 <div className="mt-20 flex justify-center">
                     <Button href="tel:6172598510" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black hover:border-white">
                        Book a Consultation
                    </Button>
                 </div>
             </Reveal>
        </div>
      </div>
    </section>
  );
};