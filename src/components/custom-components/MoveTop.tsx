"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const MoveTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#ffe500]/80 hover:bg-[#ffe500] text-[#4d4d4d] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6  transition-colors duration-300" />
        </button>
      )}
    </>
  );
};

export default MoveTop;