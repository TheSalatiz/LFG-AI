import React, { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import BenefitCard from '../ui/BenefitCard';
import { Bot, Zap, Clock, Shield, Database, Star } from 'lucide-react';

const Benefits: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  useScrollAnimation(titleRef, 'fade-in-up', 0.3);
  useScrollAnimation(descriptionRef, 'fade-in-up', 0.4);
  
  const benefits = [
    {
      title: "No Coding Required",
      description: "Deploy sophisticated AI agents without writing a single line of code. Our visual interface handles all the complexity.",
      icon: Bot,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Deploy in Minutes",
      description: "Follow our step-by-step system to have your first AI agent up and running in under 30 minutes.",
      icon: Zap,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "24/7 Operation",
      description: "Your agents work around the clock, handling tasks, engaging audiences, and gathering insights while you sleep.",
      icon: Clock,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption and privacy controls protect your data and operations at all times.",
      icon: Shield,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Unlimited Scalability",
      description: "Start with one agent and expand to dozens as your needs grow, all without additional hiring.",
      icon: Database,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Premium Support",
      description: "Access to our expert team and community for guidance, troubleshooting, and optimization.",
      icon: Star,
      color: "from-blue-400 to-cyan-400"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 lg:px-24"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(17,24,39,1) 100%)',
      }}
    >
      <div className="container max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 opacity-0"
        >
          Members <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Unlock</span> These Benefits
        </h2>
        
        <p 
          ref={descriptionRef}
          className="font-inter text-lg text-gray-300 text-center max-w-3xl mx-auto mb-20 opacity-0"
        >
          Join AgentCraft to access these powerful capabilities and transform how you operate your business.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              gradientColors={benefit.color}
              delay={0.2 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;