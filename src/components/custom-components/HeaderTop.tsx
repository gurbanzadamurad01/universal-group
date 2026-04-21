"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeaderTop({locale}: {locale: string}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = usePathname();
  const isHomePage = location === `/${locale}`;

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden lg:block ${
        isHomePage
          ? `absolute top-0 right-0 left-0 z-40 w-full transition-all duration-300 ${
              isScrolled 
                ? "bg-white/95 backdrop-blur-md shadow-sm" 
                : "bg-gradient-to-r from-[#20c0d7]/10 to-[#040404]/10 backdrop-blur-sm"
            }`
          : "relative bg-white"
      }`}
    >
      <div
        className={`flex justify-between flex-col lg:flex-row gap-3 lg:gap-0 p-4 border-b container mx-auto px-4 sm:px-6 lg:px-8 ${
          isHomePage && !isScrolled 
            ? "border-white/20" 
            : "border-gray-200"
        }`}
      >
        <p className="flex gap-2 items-center italic">
          <MapPin 
            size={18} 
            className={`${
              isHomePage && !isScrolled 
                ? "text-white/60" 
                : "text-[#040404]/40"
            }`} 
          />
          <span 
            className={`text-base font-semibold ${
              isHomePage && !isScrolled 
                ? "text-white/80" 
                : "text-[#040404]/70"
            }`}
          >
            University District, Civan Street, Allure Tower Instanbul Site No:1,
            Istanbul - Turkey
          </span>
        </p>
        <ul className="flex gap-5 flex-col xl:flex-row">
          <li className="flex gap-2 items-center italic">
            <Mail 
              size={18} 
              className={`${
                isHomePage && !isScrolled 
                  ? "text-white/60" 
                  : "text-[#040404]/40"
              }`} 
            />
            <a 
              href="mailto:contact@savaygroup.com" 
              className={`text-base font-semibold transition-colors duration-300 ${
                isHomePage && !isScrolled 
                  ? "text-white/80 hover:text-white" 
                  : "text-[#040404]/70 hover:text-[#20c0d7]"
              }`}
            >
              contact@savaygroup.com
            </a>
          </li>

          <li className="flex gap-2 items-center italic">
            <Phone 
              size={18} 
              className={`${
                isHomePage && !isScrolled 
                  ? "text-white/60" 
                  : "text-[#040404]/40"
              }`} 
            />
            <a 
              href="tel:+905373224725" 
              className={`text-base font-semibold transition-colors duration-300 ${
                isHomePage && !isScrolled 
                  ? "text-white/80 hover:text-white" 
                  : "text-[#040404]/70 hover:text-[#20c0d7]"
              }`}
            >
              +90 5373224725
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}