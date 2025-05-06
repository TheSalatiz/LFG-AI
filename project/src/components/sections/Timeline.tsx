import React, { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import TimelineStep from '../ui/TimelineStep';

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  
  useScrollAnimation(titleRef, 'fade-in-up', 0.3);
  useScrollAnimation(descriptionRef, 'fade-in-up', 0.4);
  
  const timelineSteps = [
    {
      title: "Before: Overwhelmed & Invisible",
      description: "You're doing everything yourself. Posting, replying, researching. Drowning in manual tasks while competitors with bigger teams capture all the attention.",
      imageSrc: "https://images.pexels.com/photos/3760958/pexels-photo-3760958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageAlt: "Overwhelmed business owner working late",
    },
    {
      title: "Transition: Deploying Your Agents",
      description: "Follow our proven system to deploy AI agents that handle specific tasks for your business. No coding required — just point, customize, and deploy.",
      imageSrc: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageAlt: "Person setting up digital systems",
    },
    {
      title: "After: Automated & Influential",
      description: "Your army of AI agents works 24/7, creating content, engaging audiences, and handling research while you focus on high-level strategy. You've scaled yourself.",
      imageSrc: "https://images.pexels.com/photos/7605913/pexels-photo-7605913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imageAlt: "Successful business person with automated systems",
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-black"
    >
      <div className="container max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 opacity-0"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Transformation</span> Journey
        </h2>
        
        <p 
          ref={descriptionRef}
          className="font-inter text-lg text-gray-300 text-center max-w-3xl mx-auto mb-20 opacity-0"
        >
          See how AgentCraft transforms overwhelmed solopreneurs into empowered business owners through strategic AI automation.
        </p>
        
        <div className="space-y-24 md:space-y-32 relative">
          {/* Timeline connector line */}
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 hidden md:block"></div>
          
          {timelineSteps.map((step, index) => (
            <TimelineStep 
              key={index} 
              title={step.title} 
              description={step.description} 
              imageSrc={step.imageSrc} 
              imageAlt={step.imageAlt} 
              position={index % 2 === 0 ? 'left' : 'right'} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;