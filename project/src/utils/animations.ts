import '../styles/animations.css';

export const initializeAnimations = () => {
  // Add animated glow orbs
  const createOrbs = () => {
    const orbs = document.querySelectorAll('.glow-orb');
    
    orbs.forEach((orb, index) => {
      const isOdd = index % 2 !== 0;
      
      // Add unique animation classes
      if (isOdd) {
        orb.classList.add('glow-pulse-1');
        orb.classList.add('bg-gradient-to-br', 'from-indigo-500/20', 'to-purple-500/20');
      } else {
        orb.classList.add('glow-pulse-2');
        orb.classList.add('bg-gradient-to-br', 'from-blue-500/20', 'to-cyan-500/20');
      }
    });
  };
  
  // Add glowing effect to icons
  const setupGlowingIcons = () => {
    const glowIcons = document.querySelectorAll('.glow-icon');
    
    glowIcons.forEach((icon) => {
      icon.classList.add('glow-pulse-subtle');
    });
  };
  
  // Initialize all animations
  createOrbs();
  setupGlowingIcons();
};