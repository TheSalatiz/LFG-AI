import React, { useRef, useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "I deployed my first AI agent in 18 minutes, and within a week it generated more engagement than my previous 3 months of manual posting.",
    author: "Sarah Johnson",
    role: "Life Coach & Content Creator",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "As a solopreneur, my biggest challenge was scaling myself. AgentCraft helped me create AI assistants that handle research, outreach, and content generation — giving me back 25+ hours a week.",
    author: "Michael Chen",
    role: "E-commerce Founder",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "I was skeptical about AI, but AgentCraft made it accessible. My audience growth has increased 10x since implementing their system, and the best part is I didn't need to learn coding.",
    author: "Jessica Rivera",
    role: "Digital Marketing Consultant",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useScrollAnimation(titleRef, 'fade-in-up', 0.3);
  useScrollAnimation(carouselRef, 'fade-in', 0.5);
  
  // Handle autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };
  
  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 lg:px-24"
      style={{
        background: 'linear-gradient(180deg, rgba(17,24,39,1) 0%, rgba(9,9,18,1) 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="glow-orb glow-orb-3 absolute top-1/3 right-1/3 w-80 h-80 rounded-full"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <h2 
          ref={titleRef}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 opacity-0"
        >
          Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Stories</span>
        </h2>
        
        <div 
          ref={carouselRef}
          className="relative opacity-0 max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800"
          style={{
            boxShadow: '0 0 40px rgba(79, 70, 229, 0.2)'
          }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="flex mb-6">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
            
            <blockquote className="text-xl md:text-2xl font-playfair italic mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            
            <div className="flex flex-col items-center">
              <img 
                src={testimonials[activeIndex].avatar} 
                alt={testimonials[activeIndex].author}
                className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500 mb-4"
              />
              <p className="font-semibold text-white">{testimonials[activeIndex].author}</p>
              <p className="text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-indigo-700 transition-colors text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 hover:bg-indigo-700 transition-colors text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-indigo-500' : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;