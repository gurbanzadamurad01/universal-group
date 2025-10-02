"use client";

import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Props {
  text1: string;
  text2: string;
  text3: string;
}

const ImageTextTemplate: React.FC<Props> = ({ text1, text2, text3 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const element = document.getElementById("section-two");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="section-two"
      className="relative py-20 overflow-hidden min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/about-us/oil.png"
          alt="Industrial background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Yellow line accent */}
          <div
            className={`w-20 h-1 mb-8 ${
              isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
            }`}
            style={{ backgroundColor: "#ffe500" }}
          ></div>

          {/* Text Content */}
          <div
            className={`${
              isVisible ? "opacity-100 animate-slide-in delay-300" : "opacity-0"
            }`}
          >
            {/* Descriptions */}
            <div className="space-y-6 text-white text-lg leading-relaxed">
              <p className="text-gray-200">{text1}</p>
              <p className="text-gray-200">{text2}</p>
              <p className="text-gray-200">{text3}</p>
            </div>

            {/* Key values highlighted */}
            {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#ffe500' }}>1998</div>
                <div className="text-sm text-gray-300 mt-2">İl təcrübə</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#ffe500' }}>1200+</div>
                <div className="text-sm text-gray-300 mt-2">Beynəlxalq tədarükçü</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#ffe500' }}>150+</div>
                <div className="text-sm text-gray-300 mt-2">Korporativ müştəri</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-5 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={scrollToNext}
          className="animate-bounce hover:text-primary transition-colors duration-300 group cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-white/60 group-hover:text-primary mx-auto" />
        </button>
        {/* <p className="text-white/60 text-sm mt-2">Scroll</p> */}
      </div>
    </section>
  );
};

export default ImageTextTemplate;
