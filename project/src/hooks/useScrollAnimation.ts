import { useEffect, RefObject } from 'react';

type AnimationType = 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';

export const useScrollAnimation = (
  ref: RefObject<HTMLElement>,
  animation: AnimationType = 'fade-in',
  delay: number = 0
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a slight delay before triggering the animation
            setTimeout(() => {
              entry.target.classList.add('animated');
              
              // Apply animation-specific classes
              switch (animation) {
                case 'fade-in-up':
                  entry.target.classList.add('fade-in-up');
                  break;
                case 'fade-in-down':
                  entry.target.classList.add('fade-in-down');
                  break;
                case 'fade-in-left':
                  entry.target.classList.add('fade-in-left');
                  break;
                case 'fade-in-right':
                  entry.target.classList.add('fade-in-right');
                  break;
                case 'zoom-in':
                  entry.target.classList.add('zoom-in');
                  break;
                default:
                  entry.target.classList.add('fade-in');
              }
            }, delay * 1000);
            
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when at least 15% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Negative bottom margin to trigger earlier
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, animation, delay]);
};