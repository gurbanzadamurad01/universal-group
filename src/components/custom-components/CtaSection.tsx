"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { useTranslations } from "next-intl";
import Link from "next/link";

const CTASection = ({locale}: {locale:string}) => {
  const t = useTranslations("cta");

  return (
    <AnimatedSection
      id="section-cta"
      className="relative py-20 overflow-hidden bg-[#ffe500]"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div
            className="absolute top-10 left-10 w-32 h-32 rounded-full animate-pulse"
            style={{ backgroundColor: "#040404" }}
          ></div>
          <div
            className="absolute top-20 right-20 w-24 h-24 rounded-full animate-bounce"
            style={{ backgroundColor: "#fff" }}
          ></div>
          <div
            className="absolute bottom-20 left-20 w-20 h-20 rounded-full animate-ping"
            style={{ backgroundColor: "#040404" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-28 h-28 rounded-full animate-pulse"
            style={{ backgroundColor: "#fff" }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in"
          style={{ color: "#040404" }}
        >
          {t("title")}
        </h2>

        {/* Description */}
        <p
          className="text-base md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay"
          style={{ color: "#040404", opacity: 0.8 }}
        >
          {t("description")}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center animate-fade-in-delay-2">
          <Link
            href={`/${locale}/contact-us`}
            className="px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-subtle"
            style={{ backgroundColor: "#040404", color: "#fff" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = "#040404";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#040404";
              e.currentTarget.style.color = "#fff";
            }}
          >
            {t("buttonText")}
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </AnimatedSection>
  );
};

export default CTASection;
