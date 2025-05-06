import React, { useRef } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradientColors: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  description,
  icon: Icon,
  gradientColors,
  delay
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useScrollAnimation(cardRef, 'fade-in-up', delay);
  
  return (
    <div 
      ref={cardRef} 
      className="p-6 rounded-xl flex flex-col opacity-0 group hover:translate-y-[-8px] transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, rgba(30,30,60,0.7) 0%, rgba(15,15,30,0.9) 100%)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div 
        className={`mb-5 p-3 rounded-full w-14 h-14 flex items-center justify-center bg-gradient-to-br ${gradientColors} glow-icon`}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>
      
      <h3 className="font-playfair text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300 flex-grow">{description}</p>
    </div>
  );
};

export default BenefitCard;