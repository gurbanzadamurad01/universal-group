'use client';

import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  threshold = 0.05,
  rootMargin = '0px 0px -10px 0px',
  animationClass = 'opacity-0 translate-y-8'
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, disconnect the observer to improve performance
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    // Small timeout to ensure the component is mounted
    const timer = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [id, threshold, rootMargin]);

  return (
    <section 
      id={id} 
      className={`${className} transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : animationClass
      }`}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;