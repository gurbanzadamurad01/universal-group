"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CarouselSlide } from "@/types";
import { defaultSlides } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from 'next-intl';

const CarouselHero = ({
  locale,
  slides = defaultSlides,
}: {
  locale: string;
  slides?: CarouselSlide[];
}) => {
  const t = useTranslations('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Select a random slide
  const randomSlide = slides[Math.floor(Math.random() * slides.length)];

  // Sample random video URL - you can replace this with your actual video
  const randomVideoUrl = "/video/bgug.mp4";

  // Initial animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={randomVideoUrl}
          autoPlay
          loop
          playsInline
          controls={false}
          onLoadedData={handleVideoLoaded}
          style={{ filter: "brightness(0.7)" }}
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float z-20"></div>
      <div
        className="absolute bottom-32 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float z-20"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-10 w-12 h-12 bg-primary/15 rounded-full animate-float z-20"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content - Positioned on the left */}
      <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000  ${
            isVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-12"
          }`}
        >
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight text-left">
            {t('title1')}{" "}
            <span className="text-[#ffe500]">{t('title2')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed text-left">
            {t('description')}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-16">
            <Link
              href={`/${locale}/contact-us`}
              className="group border-2 border-[#ffe500]/30 hover:border-primary text-[#ffe500] hover:text-primary font-medium px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#ffe500] hover:scale-105 hover:text-[#040404]"
            >
              {t('ctaText2')}
            </Link>
            <Link
              href={`/${locale}/contact-us`}
              className="group border-2 border-[#ffe500]/30 hover:border-primary text-[#040404] hover:text-primary font-medium px-8 py-4 rounded-lg bg-[#ffe500] backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              {t('ctaText')}
            </Link>
          </div>
          <div className="bg-black/40 bg-opacity-40 backdrop-blur-sm rounded-lg p-6 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Location - Order 3 on mobile, Order 1 on lg */}
              <div className="flex items-center gap-2 text-sm text-white order-3 lg:order-1">
                <MapPin className="h-4 w-4 text-[#ffe500] flex-shrink-0" />
                <span className="font-medium text-base">{t('location')}</span>
              </div>

              {/* Copyright - Order 1 on mobile, Order 2 on lg */}
              <div className="text-center order-1 lg:order-2">
                <p className="text-base text-white font-medium">
                  {t('copyright')}
                </p>
              </div>

              {/* Contact Info - Order 2 on mobile, Order 3 on lg */}
              <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-white order-2 lg:order-3">
                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#ffe500] flex-shrink-0" />
                  <span className="font-medium text-base">{t('email')}</span>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#ffe500] flex-shrink-0" />
                    <span className="font-medium text-base">{t('phone1')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#ffe500] flex-shrink-0" />
                    <span className="font-medium text-base">{t('phone2')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CarouselHero;
