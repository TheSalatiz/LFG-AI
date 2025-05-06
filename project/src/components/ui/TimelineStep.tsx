import React, { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface TimelineStepProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  position: 'left' | 'right';
  index: number;
}

const TimelineStep: React.FC<TimelineStepProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  position,
  index
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const animationDirection = position === 'left' ? 'fade-in-right' : 'fade-in-left';
  useScrollAnimation(containerRef, 'fade-in', 0.2);
  useScrollAnimation(contentRef, animationDirection, 0.4);
  useScrollAnimation(imageRef, position === 'left' ? 'fade-in-left' : 'fade-in-right', 0.5);
  
  return (
    <div ref={containerRef} className="flex flex-col md:flex-row items-center opacity-0">
      <div 
        className={`
          hidden md:flex absolute left-1/2 top-0 transform -translate-x-1/2
          h-10 w-10 rounded-full bg-indigo-600 border-4 border-gray-900 z-10
          ${index === 0 ? 'mt-0' : `mt-[${index * 32}rem]`}
        `}
        style={{ top: `${index * 18}rem` }}
      >
        <span className="flex items-center justify-center h-full w-full text-white font-bold">
          {index + 1}
        </span>
      </div>
      
      <div className="md:w-1/2 opacity-0" ref={contentRef}>
        <div 
          className={`
            md:max-w-md p-6 rounded-xl backdrop-blur-sm
            ${position === 'left' ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}
          `}
          style={{
            background: 'linear-gradient(145deg, rgba(30,30,60,0.7) 0%, rgba(15,15,30,0.9) 100%)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
          }}
        >
          <h3 className="font-playfair text-xl md:text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      
      <div 
        className={`
          md:w-1/2 mt-6 md:mt-0 opacity-0
          ${position === 'right' ? 'md:order-first' : ''}
        `}
        ref={imageRef}
      >
        <div 
          className={`
            overflow-hidden rounded-xl md:max-w-md
            ${position === 'right' ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'}
          `}
          style={{
            boxShadow: '0 0 30px rgba(79, 70, 229, 0.3)'
          }}
        >
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineStep;