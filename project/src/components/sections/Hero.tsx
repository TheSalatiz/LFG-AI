import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import GlowButton from '../ui/GlowButton';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subHeadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useScrollAnimation(headlineRef, 'fade-in-up', 0.2);
  useScrollAnimation(subHeadlineRef, 'fade-in-up', 0.4);
  useScrollAnimation(ctaRef, 'fade-in-up', 0.6);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxRate = scrollPosition * 0.5;
      
      // Apply parallax effect to the hero background
      heroRef.current.style.backgroundPositionY = `-${parallaxRate}px`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 md:px-12 lg:px-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(8,8,15,1) 0%, rgba(22,21,39,1) 100%)',
      }}
    >
      {/* Animated gradient orbs in background */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="glow-orb glow-orb-1 absolute top-1/4 left-1/4 w-96 h-96 rounded-full"></div>
        <div className="glow-orb glow-orb-2 absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto z-10 text-center">
        <h1 
          ref={headlineRef}
          className="font-playfair text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-8"
        >
          <span className="block opacity-0">You've been quiet</span>
          <span className="block opacity-0 mt-3">long enough.</span>
          <span className="block opacity-0 mt-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Make them listen.
          </span>
        </h1>
        
        <p 
          ref={subHeadlineRef}
          className="font-inter text-lg md:text-xl opacity-0 text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Deploy powerful AI agents that work for you 24/7, without writing a single line of code. Transform your digital presence from passive to unstoppable.
        </p>
        
        <div 
          ref={ctaRef}
          className="opacity-0 mt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <GlowButton primary>
            Join Now <ArrowRight className="ml-2 h-5 w-5" />
          </GlowButton>
          
          <p className="text-sm text-gray-400 sm:ml-4 mt-4 sm:mt-0">
            Limited spots available — Doors close in <span className="font-semibold text-white">7 days</span>
          </p>
        </div>
      </div>
      
      {/* Decorative bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;