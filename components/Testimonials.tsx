import React from 'react';
import { Reveal } from './ui/Reveal';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "The attention to detail is unmatched in Medford. It feels like visiting an old friend who is a master stylist.",
    author: "Sarah J."
  },
  {
    quote: "Finally, a place that understands men’s hair without the rush. The vibe is chill, professional, and the cut is perfect.",
    author: "Michael T."
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-stone/20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-5xl mx-auto">
            <Reveal>
            <div className="text-center mb-20">
                <h2 className="font-serif text-5xl md:text-6xl text-center text-charcoal mb-4">Loved by Locals.</h2>
                <div className="w-24 h-[1px] bg-bronze mx-auto"></div>
            </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                {testimonials.map((testimonial, i) => (
                     <Reveal key={i} delay={0.2 + (i * 0.2)}>
                        <div className="bg-white p-12 shadow-sm border border-stone/50 hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
                            <div className="flex text-bronze mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="currentColor" />
                                ))}
                            </div>
                            <blockquote className="font-serif text-2xl text-offBlack leading-normal mb-8 flex-grow">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="border-t border-stone pt-6">
                                <cite className="font-sans text-xs tracking-widest uppercase text-charcoal/50 not-italic font-bold">
                                    — {testimonial.author}
                                </cite>
                            </div>
                        </div>
                     </Reveal>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};