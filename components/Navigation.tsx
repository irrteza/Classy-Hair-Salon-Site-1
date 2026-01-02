import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Our Story', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gift Cards', href: '#giftcards' },
  { label: 'The Experience', href: '#testimonials' },
  { label: 'Contact', href: '#footer' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 border-b ${
          isScrolled 
            ? 'bg-cream/80 backdrop-blur-xl border-stone/20 py-4 shadow-sm' 
            : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo - Cursive Premium Font */}
          <a 
            href="#" 
            className={`group relative z-50 flex items-center gap-3 md:gap-4 transition-colors duration-500 ${
              isScrolled || mobileMenuOpen ? 'text-charcoal' : 'text-white'
            }`}
          >
             {/* Italianno is smaller by default, bumped up size */}
             <h1 className={`font-cursive text-4xl sm:text-5xl md:text-6xl whitespace-nowrap transition-all duration-500 group-hover:opacity-80 pt-2 ${!isScrolled && !mobileMenuOpen ? 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]' : ''}`}>
                Classy Hair Salon
             </h1>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-[10px] tracking-[0.2em] uppercase font-medium hover:text-bronze transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-bronze after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled ? 'text-charcoal' : 'text-white/90'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="tel:6172598510"
              className={`px-6 py-3 border text-[10px] tracking-[0.2em] uppercase font-semibold transition-all duration-500 hover:bg-bronze hover:border-bronze hover:text-white ${
                  isScrolled 
                    ? 'border-charcoal text-charcoal' 
                    : 'border-white text-white'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-cream flex flex-col items-center justify-center space-y-8 md:hidden"
          >
             {/* Decorative Background Text */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 flex items-center justify-center">
                 <span className="font-cursive text-[18vw] text-bronze -rotate-12 whitespace-nowrap">Classy Hair Salon</span>
             </div>

            {navItems.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + (idx * 0.1) }}
                onClick={(e) => scrollToSection(e, item.href)}
                className="font-serif text-4xl text-charcoal hover:text-bronze transition-colors z-10"
              >
                {item.label}
              </motion.a>
            ))}
             <motion.a 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="tel:6172598510"
              className="mt-8 px-10 py-4 bg-charcoal text-white text-xs tracking-widest uppercase font-semibold z-10"
            >
              Book Appointment
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};