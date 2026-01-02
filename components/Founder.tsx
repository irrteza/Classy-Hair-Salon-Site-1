import React from 'react';
import { Reveal } from './ui/Reveal';

export const Founder: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
           
           {/* Text Side - Left (Alternates with About section) */}
           <div className="w-full lg:w-1/2 order-2 lg:order-1 lg:pr-16">
              <Reveal>
                  <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-bronze mb-6">The Visionary</h3>
                  <h2 className="font-serif text-5xl md:text-6xl text-charcoal mb-8 leading-none">
                    Lien Lu
                  </h2>
              </Reveal>
              
              <Reveal delay={0.2}>
                  <div className="w-24 h-[1px] bg-charcoal/10 mb-8"></div>
                  <blockquote className="font-serif italic text-2xl md:text-3xl text-offBlack/80 mb-10 leading-relaxed">
                    "True style is organic. It’s not about forcing a shape, but revealing the beauty that’s already there."
                  </blockquote>
              </Reveal>

              <Reveal delay={0.4}>
                  <div className="space-y-6 font-sans text-offBlack/60 leading-loose font-light text-lg">
                    <p>
                        With over two decades of mastery in the art of hair, Lien Lu has become a quiet icon in the Medford beauty community. Her philosophy is simple: precision rooted in intuition.
                    </p>
                    <p>
                        Trained in the rigorous techniques of downtown Boston salons, Lien founded Classy to create a space that felt less like a factory and more like a studio. Here, she blends technical expertise with a warm, personal approach that turns first-time visitors into lifelong clients.
                    </p>
                  </div>
              </Reveal>

              <Reveal delay={0.6}>
                  <div className="mt-12 flex items-center gap-4">
                      <div className="h-[1px] w-12 bg-bronze"></div>
                      <p className="font-serif italic text-xl text-charcoal">Lien Lu, Founder & Master Stylist</p>
                  </div>
              </Reveal>
           </div>

           {/* Image Side - Right */}
           <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
              <Reveal className="w-full aspect-[4/5] overflow-hidden" delay={0.2}>
                  <div className="relative w-full h-full group">
                      {/* Decorative Border Frame */}
                      <div className="absolute top-4 right-4 bottom-4 left-4 border border-white/20 z-10 pointer-events-none"></div>
                      
                      {/* Placeholder Text Overlay */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center p-8 pointer-events-none">
                          <div className="bg-charcoal/60 backdrop-blur-sm p-4 text-center border border-white/20 shadow-xl rounded-sm">
                             <p className="font-sans text-xs uppercase tracking-widest text-white/90">
                                this picture will be replaced with your actual salon images
                             </p>
                          </div>
                      </div>

                      <img
                        src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1336&auto=format&fit=crop"
                        alt="Lien Lu - Founder of Classy Hair Salon"
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-[1.5s] ease-out opacity-80"
                      />
                  </div>
              </Reveal>
           </div>

        </div>
      </div>
    </section>
  );
};