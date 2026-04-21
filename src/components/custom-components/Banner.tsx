"use client";

import React, { useState, useEffect } from "react";
import TagComponent from "./TagComponent";
import { Tag } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  bannerKey: string;
  children?: React.ReactNode;
}

const Banner: React.FC<Props> = ({ bannerKey, children }) => {
  const t = useTranslations(`banners.${bannerKey}`);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after component mounts for animations to work
    setIsVisible(true);
  }, []);

  return (
    <header className="relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary/20 animate-float"></div>
        <div className="absolute top-3/4 left-1/3 w-6 h-6 rounded-full bg-primary/30 animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-light/20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full bg-primary/20 animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-light/10 animate-float"></div>
      </div>

      <div className="banner-gradient animate-gradient-shift relative z-10">
        <div className="container mx-auto max-w-6xl pt-20">
          <div className="flex flex-col items-center text-center">
            <TagComponent text={t('tag')} icon={Tag} />
            <h1
              className={`text-5xl md:text-7xl font-bold text-light mb-6 mx-auto ${
                isVisible
                  ? "opacity-100 animate-slide-in delay-200"
                  : "opacity-0"
              }`}
            >
              {t('title')}
            </h1>

            <p
              className={`text-xl md:text-2xl text-light/80 max-w-2xl mb-10 mx-auto ${
                isVisible
                  ? "opacity-100 animate-fade-in delay-400"
                  : "opacity-0"
              }`}
            >
              {t('description')}
            </p>

            <div
              className={`flex flex-wrap gap-4 justify-center ${
                isVisible
                  ? "opacity-100 animate-fade-in delay-600"
                  : "opacity-0"
              }`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/30 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-primary/40 rounded-full -ml-16 -mb-16 blur-3xl animate-pulse-slower"></div>

      {/* Additional floating elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full border border-light/20 animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 rounded-full border border-primary/20 animate-float"></div>
    </header>
  );
};

export default Banner;
