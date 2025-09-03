'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/custom-components/AnimatedSection';
import { Globe } from 'lucide-react';

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
  const t = useTranslations('company');

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
              <div className="relative w-full h-96 overflow-hidden rounded-2xl">
                <img
                  src="/about-us/oil.png"
                  alt="Industrial equipment"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Logo overlay */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-bold text-lg">
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
                <p className="text-gray-700 text-lg leading-relaxed uppercase tracking-wide font-medium">
                  {t('azlift.mainText')}
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  {t('azlift.description1')}
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  {t('azlift.description2')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-3xl font-bold text-orange-500">10+</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {t('azlift.experienceYears')}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">500+</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {t('azlift.completedProjects')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* AZ Global Section */}
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
              AZ Global
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('azglobal.title')}
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t('azglobal.description')}
            </p>
          </div>
        </div>
      </div>

      {/* AZ Global Details Section */}
      <AnimatedSection id="azglobal-details" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative w-full h-96 overflow-hidden rounded-2xl">
                <img
                  src="/about-us/building-it.png"
                  alt="Industrial equipment"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {/* Logo overlay */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-800 font-bold text-lg">
                      AZ<span className="text-orange-500">GLOBAL</span>
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
                <p className="text-gray-700 text-lg leading-relaxed uppercase tracking-wide font-medium">
                  {t('azglobal.mainText')}
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  {t('azglobal.description1')}
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  {t('azglobal.description2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AboutCompany;