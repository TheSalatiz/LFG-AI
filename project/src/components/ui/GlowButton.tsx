import React, { ButtonHTMLAttributes } from 'react';

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const GlowButton: React.FC<GlowButtonProps> = ({ 
  primary = false, 
  fullWidth = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseClasses = "relative px-8 py-4 font-inter font-semibold rounded-lg transition-all duration-300 overflow-hidden group";
  
  const primaryClasses = `
    text-white 
    bg-gradient-to-r from-indigo-600 to-purple-600 
    hover:from-indigo-500 hover:to-purple-500
    ${fullWidth ? 'w-full' : ''}
  `;
  
  const secondaryClasses = `
    text-white
    bg-transparent 
    border border-white/30
    hover:bg-white/10
    ${fullWidth ? 'w-full' : ''}
  `;
  
  return (
    <button
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Glow effect */}
      <span 
        className={`
          absolute inset-0 
          rounded-lg blur 
          transition-opacity 
          opacity-0 group-hover:opacity-70
          ${primary ? 'bg-indigo-500' : 'bg-white/30'}
        `} 
        style={{ transform: 'translate(8px, 8px)' }}
      ></span>
    </button>
  );
};

export default GlowButton;