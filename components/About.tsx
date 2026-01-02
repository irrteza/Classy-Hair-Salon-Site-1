import React from 'react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-cream overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Collage Visuals - Fixed Alignment */}
            <div className="w-full lg:w-1/2 relative h-[500px] md:h-[700px]">
                {/* Main Image - Stylist working */}
                <div className="w-[80%] absolute top-0 left-0 h-[80%] overflow-hidden">
                     <Reveal width="100%" className="h-full">
                        <img 
                            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2000&auto=format&fit=crop" 
                            alt="Stylist working on client" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                     </Reveal>
                </div>

                {/* Overlapping Detail Image - Hair texture */}
                <div className="w-[50%] absolute bottom-0 right-0 h-[45%] overflow-hidden shadow-2xl border-8 border-cream">
                    <Reveal delay={0.3} width="100%" className="h-full">
                         <img 
                            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop" 
                            alt="Styling Detail" 
                            className="w-full h-full object-cover"
                        />
                    </Reveal>
                </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 lg:pl-16 pt-12 lg:pt-0">
                <Reveal>
                    <span className="text-bronze text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
                </Reveal>
                
                <Reveal delay={0.2}>
                    <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight mb-8">
                        A Legacy of Style on <span className="italic text-bronze block">Boston Ave.</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.4}>
                    <div className="space-y-8 font-sans font-light text-offBlack/70 text-lg leading-relaxed">
                        <p>
                        At <strong className="font-medium text-charcoal">Classy Hair Salon</strong>, we believe that great hair is more than just a service—it is a relationship. For over 20 years, we have been a staple in the Massachusetts beauty scene, bringing 12 years of excellence from Boston directly to the heart of Medford.
                        </p>
                        <p>
                        As a family-owned, boutique studio, we offer something rare in today’s busy world: undivided attention. When you sit in our chair, the time is yours. No rushing, just artistry tailored specifically to your features and lifestyle.
                        </p>
                    </div>
                </Reveal>
                
                <Reveal delay={0.6}>
                    <div className="mt-12 flex items-center gap-6">
                        <div className="w-16 h-[1px] bg-charcoal/20"></div>
                        <p className="font-serif italic text-2xl text-charcoal">Est. 2005</p>
                    </div>
                </Reveal>
            </div>

        </div>
      </div>
    </section>
  );
};