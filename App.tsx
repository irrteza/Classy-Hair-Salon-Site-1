import React from 'react';
import { useLenis } from './hooks/useScroll';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { Services } from './components/Services';
import { GiftCard } from './components/GiftCard';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

const App: React.FC = () => {
  useLenis();

  return (
    <div className="relative min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Founder />
        <Services />
        <GiftCard />
        <Testimonials />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;