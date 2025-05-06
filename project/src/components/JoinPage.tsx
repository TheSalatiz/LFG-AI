import React, { useEffect } from 'react';
import Hero from './sections/Hero';
import Timeline from './sections/Timeline';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';
import { initializeAnimations } from '../utils/animations';

const JoinPage: React.FC = () => {
  useEffect(() => {
    // Initialize all animations when component mounts
    initializeAnimations();
    
    // Update document title
    document.title = "Join AgentCraft | Deploy AI Agents Without Coding";
    
    // Add the necessary fonts - this could also be done in the index.html
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      // Clean up
      document.head.removeChild(link);
    };
  }, []);

  return (
    <main className="font-inter text-white overflow-hidden">
      <Hero />
      <Timeline />
      <Benefits />
      <Testimonials />
      <FinalCTA />
    </main>
  );
};

export default JoinPage;