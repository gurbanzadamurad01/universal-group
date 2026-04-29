"use client";

import React from "react";
import { Send, Eye } from "lucide-react";

const VacationBannerButtons = () => {
  const handleApplyClick = () => {
    const modal = document.getElementById('application-modal') as HTMLElement;
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  const handleViewVacancies = () => {
    const vacationsSection = document.getElementById('vacations-section');
    vacationsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
      <button
        onClick={handleApplyClick}
        className="flex items-center justify-center gap-2 bg-[#ffe500] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#e6cf00] transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in-up"
      >
        <Send className="w-5 h-5" />
        İndi Müraciət Et
      </button>
      <button
        onClick={handleViewVacancies}
        className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-200"
      >
        <Eye className="w-5 h-5" />
        Vakansiyalara Bax
      </button>
    </div>
  );
};

export default VacationBannerButtons;