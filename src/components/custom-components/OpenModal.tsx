"use client";

import React, { useState } from "react";
import { Send, Eye, X, Share2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  mission: string;
  aboutYou: string;
}

const OpenModal = () => {
  const t = useTranslations('openModal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    mission: "",
    aboutYou: ""
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleWatchVacations = () => {
    const vacationsSection = document.getElementById('vacations-section');
    vacationsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShare = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form and close modal
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      mission: "",
      aboutYou: ""
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Banner Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button
          onClick={handleApplyClick}
          className="flex items-center justify-center gap-2 bg-[#ffe500] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#e6cf00] transition-all duration-300 hover:scale-105"
        >
          <Send className="w-5 h-5" />
          {t('applyButton')}
        </button>
        <button
          onClick={handleWatchVacations}
          className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
        >
          <Eye className="w-5 h-5" />
          {t('watchVacationsButton')}
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 animate-modal-enter">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">{t('modalTitle')}</h3>
              <button
                onClick={handleCancel}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('fullName')}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all placeholder:text-black"
                  placeholder={t('fullNamePlaceholder')}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all placeholder:text-black"
                  placeholder={t('emailPlaceholder')}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all placeholder:text-black"
                  placeholder={t('phonePlaceholder')}
                  required
                />
              </div>

              {/* Mission */}
              <div>
                <label htmlFor="mission" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('mission')}
                </label>
                <input
                  type="text"
                  id="mission"
                  name="mission"
                  value={formData.mission}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all placeholder:text-black"
                  placeholder={t('missionPlaceholder')}
                  required
                />
              </div>

              {/* More About You */}
              <div>
                <label htmlFor="aboutYou" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('aboutYou')}
                </label>
                <textarea
                  id="aboutYou"
                  name="aboutYou"
                  value={formData.aboutYou}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all resize-none placeholder:text-black"
                  placeholder={t('aboutYouPlaceholder')}
                  required
                />
              </div>
            </form>

            {/* Modal Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-gray-200">
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-[#ffe500] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e6cf00] transition-all duration-300 flex-1"
              >
                <Share2 className="w-5 h-5" />
                {t('shareButton')}
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex-1"
              >
                <X className="w-5 h-5" />
                {t('cancelButton')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OpenModal;