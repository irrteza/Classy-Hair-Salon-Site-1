import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './ui/Button';

export const GiftCard: React.FC = () => {
  return (
    <section id="giftcards" className="py-32 bg-bronze/10 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Visual Representation of Card */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
                <Reveal className="relative w-full max-w-md aspect-[1.58/1]">
                    <div className="absolute inset-0 bg-charcoal shadow-2xl transform rotate-3 transition-transform duration-700 hover:rotate-0 flex flex-col justify-between p-8 border border-white/10">
                        <div className="flex justify-between items-start">
                             <span className="font-serif text-2xl text-white tracking-widest">CLASSY.</span>
                             <span className="font-sans text-[10px] text-bronze uppercase tracking-[0.2em]">Gift Card</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <span className="font-sans text-white/40 text-sm tracking-widest">0000 0000 0000 0000</span>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-bronze to-white/50 opacity-80" />
                        </div>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    </div>
                </Reveal>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <Reveal>
                    <span className="text-bronze text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Perfect Gift</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-charcoal leading-tight mb-6">
                        Give the Gift of <span className="italic text-bronze">Luxury.</span>
                    </h2>
                </Reveal>
                
                <Reveal delay={0.2}>
                    <p className="font-sans font-light text-offBlack/70 text-lg leading-relaxed mb-10 max-w-md">
                        Treat your loved ones to an unforgettable experience. Our gift cards are available for all services and products, beautifully packaged to make a statement.
                    </p>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-6">
                         <Button href="#" variant="primary">Purchase Online</Button>
                         <Button href="tel:6172598510" variant="text">Call to Inquire</Button>
                    </div>
                </Reveal>
            </div>

        </div>
      </div>
    </section>
  );
};