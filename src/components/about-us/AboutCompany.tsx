"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/custom-components/AnimatedSection";
import { Globe, X, ZoomIn } from "lucide-react";

const advantages = [
  {
    icon: (
      <svg
        className="h-15 w-15 text-[#ffe500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "25+ İl Təcrübə",
    description:
      "Uzun illər ərzində qazanılmış təcrübə və beynəlxalq əlaqələr sayəsində ölkənin aparıcı təchizat şirkətlərindən birinə çevrilmişik.",
  },
  {
    icon: (
      <svg
        className="h-15 w-15 text-[#ffe500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "1200+ Tədarükçü",
    description:
      "B2B və B2C seqmentlərində geniş miqyaslı fəaliyyət göstərən şirkətimiz, 1200-dən çox beynəlxalq tədarükçü ilə işləyir və geniş məhsul portfelinə malikdir.",
  },
  {
    icon: (
      <svg
        className="h-15 w-15 text-[#ffe500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Keyfiyyət Zəmanəti",
    description:
      "Təchizatın 70%-i xaricdən, 30%-i isə yerli bazardan aparılır. Bütün məhsullarımız beynəlxalq keyfiyyət standartlarına uyğundur və zəmanət ilə təmin edilir.",
  },
  {
    icon: (
      <svg
        className="h-15 w-15 text-[#ffe500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "24/7 Dəstək",
    description:
      "Müştərilərimizə 24 saat, həftənin 7 günü dəstək xidməti göstəririk. Hər hansı bir problem və ya sualınız olduqda bizə müraciət edə bilərsiniz.",
  },
];

const AboutCompany = () => {
  const t = useTranslations("company");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <div>
      {/* Advantages Section */}
      <AnimatedSection id="advantages-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/20 rounded-full text-primary">
                    {advantage.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {t(`advantages.title${index + 1}`)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  {t(`advantages.description${index + 1}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Azlift Section */}
      <AnimatedSection id="azlift-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div 
                className="relative w-full h-96 overflow-hidden rounded-2xl group bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Clean white background with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>

                {/* Main content image */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <img
                    src="/logo/azlift.png"
                    alt="AZ Lift operations"
                    className="w-64 h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Clean logo overlay */}
                <div className="absolute top-6 right-6 bg-orange-500 px-6 py-3 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-xl tracking-wide">
                      azlift
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6">
              {/* Orange line accent */}
              <div className="w-20 h-1 bg-orange-500"></div>

              {/* Main text */}
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("azlift.description1")}
                </p>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("azlift.description2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Leading Supply Solution Section */}
      <div className="relative py-20 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-us/building-it.png"
            alt="Industrial background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-center w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffe500] text-black rounded-full font-medium mb-6">
              <Globe className="h-5 w-5" />
              Leading Supply Solution
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t("leading.title")}
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("leading.description2")}
            </p>
          </div>
        </div>
      </div>

      {/* Leading Supply Solution Details Section */}
      <AnimatedSection id="azglobal-details" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div 
                className="relative w-full h-96 overflow-hidden rounded-2xl group bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Main content image */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <img
                    src="/logo/leading-supply-solutions.png"
                    alt="Leading Supply Solution operations"
                    className="w-64 h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Logo overlay */}
                <div className="absolute top-6 right-6 bg-orange-500 px-6 py-3 rounded-xl shadow-lg group-hover:bg-orange-600 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-xl tracking-wide">
                      Leading{" "}
                      <span className="text-yellow-200">Supply Solution</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="space-y-6">
              {/* Orange line accent */}
              <div className="w-20 h-1 bg-orange-500"></div>

              {/* Main text */}
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("leading.description1")}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("leading.description2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Unisan Sanayi Yapi Section */}
      <div className="relative py-20 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-us/building-it.png"
            alt="Unisan background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-center w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffe500] text-black rounded-full font-medium mb-6">
              <Globe className="h-5 w-5" />
              Wholesale Partner Georgia
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t("unisan.title")}
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("unisan.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Unisan Details Section */}
      <AnimatedSection id="unisan-details" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div 
                className="relative w-full h-96 overflow-hidden rounded-2xl group bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Main content image */}
                <div className="relative w-full h-full flex items-center justify-center p-8">
                  <img
                    src="/logo/unisan.png"
                    alt="Unisan operations"
                    className="w-64 h-64 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Logo overlay */}
                <div className="absolute top-6 right-6 bg-orange-500 px-6 py-3 rounded-xl shadow-lg group-hover:bg-orange-600 transition-all duration-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-bold text-xl tracking-wide">
                      Wholesale <span className="text-yellow-200">Partner</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Orange line accent */}
              <div className="w-20 h-1 bg-orange-500"></div>

              {/* Main text */}
              <div className="space-y-4">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("unisan.description")}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t("unisan.description1")}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            
          </div>
        </div>
      </AnimatedSection>

      {/* Creative Popup Modal */}
      {isPopupOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop with blur effect */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={closePopup}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full my-8 transform transition-all duration-300 scale-100 animate-in zoom-in-95">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                    <p className="text-orange-100 text-sm">Company Details</p>
                  </div>
                </div>
                <button
                  onClick={closePopup}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200 group"
                >
                  <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Image Section */}
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-inner">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-64 object-contain rounded-xl transition-transform duration-500 hover:scale-105"
                    />
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-orange-500/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500/10 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                      <h4 className="text-xl font-semibold text-gray-900">{t('popupText.title')}</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {selectedImage.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm font-medium text-orange-800">Quality</span>
                      </div>
                      <p className="text-xs text-orange-700">International Standards</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-blue-800">Experience</span>
                      </div>
                      <p className="text-xs text-blue-700">25+ Years</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button 
                      onClick={closePopup}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Learn More About Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutCompany;
