"use client";

import React from "react";
// import { useTranslations } from 'next-intl';
import {
  Search,
  CheckCircle,
  Package,
} from "lucide-react";
import CTASection from "@/components/custom-components/CtaSection";
import AnimatedSection from "@/components/custom-components/AnimatedSection";

// TypeScript interface for service data
interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

interface ServicesClientProps {
  services?: ServiceItem[];
  onServiceClick?: (serviceId: string) => void;
  locale: "az" | "en" | "tr";
}

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: {
      az: "Tələb Analizi",
      en: "Requirement Analysis",
      tr: "Talep Analizi",
    },
    description: {
      az: "Müştərinin ehtiyaclarının dəqiq müəyyən edilməsi və analiz edilməsi.",
      en: "Accurate identification and analysis of customer needs.",
      tr: "Müşterinin ihtiyaçlarının doğru bir şekilde belirlenmesi ve analizi.",
    },
    step: "01",
  },
  {
    id: 2,
    icon: Package,
    title: {
      az: "Təchizat Prosesi",
      en: "Supply Process",
      tr: "Tedarik Süreci",
    },
    description: {
      az: "Məhsulların təchizatı və keyfiyyət nəzarətinin həyata keçirilməsi.",
      en: "Procurement of products and implementation of quality control.",
      tr: "Ürünlerin tedariki ve kalite kontrolünün yapılması.",
    },
    step: "02",
  },
  {
    id: 3,
    icon: CheckCircle,
    title: {
      az: "Çatdırılma",
      en: "Delivery",
      tr: "Teslimat",
    },
    description: {
      az: "Məhsulların vaxtında və təhlükəsiz şəkildə çatdırılması.",
      en: "Timely and safe delivery of products.",
      tr: "Ürünlerin zamanında ve güvenli bir şekilde teslim edilmesi.",
    },
    step: "03",
  },
];

const otherTexts = {
  services: {
    az: "XİDMƏTLƏR",
    en: "SERVICES",
    tr: "HİZMETLER",
  },
  supplySolutions: {
    az: "TƏCHİZAT HƏLLƏRİ",
    en: "SUPPLY SOLUTIONS",
    tr: "TEDARİK ÇÖZÜMLERİ",
  },
  workProcess: {
    az: "İş Prosesi",
    en: "Work Process",
    tr: "İş Süreci",
  },
  stepByStepProcess: {
    az: "Addım-addım Xidmət Prosesi",
    en: "Step-by-Step Service Process",
    tr: "Adım Adım Hizmet Süreci",
  },
  processDescription: {
    az: "Hər bir layihəni sistemli və peşəkar yanaşma ilə həyata keçiririk. Aşağıdakı addımlar bizim iş prosesinə dair ətraflı məlumat verir.",
    en: "We implement each project with a systematic and professional approach. The following steps provide detailed information about our work process.",
    tr: "Her bir projeyi sistematik ve profesyonel bir yaklaşımla yürütüyoruz. Aşağıdaki adımlar, iş sürecimiz hakkında detaylı bilgi vermektedir.",
  },
  "SUPPLY SOLUTIONS": {
    az: "TƏCHİZAT HƏLLƏRİ",
    en: "SUPPLY SOLUTIONS",
    tr: "TEDARİK ÇÖZÜMLERİ",
  },
  SERVICES: {
    az: "XİDMƏTLƏR",
    en: "SERVICES",
    tr: "HİZMETLER",
  },
};

const ServicesClient: React.FC<ServicesClientProps> = ({
  onServiceClick,
  locale,
}) => {
  // Default service click handler
  const handleServiceClick = (serviceId: string) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    } else {
      // Default behavior - could navigate to service detail page
      console.log(`Service clicked: ${serviceId}`);
      // Example: router.push(`/services/${serviceId}`)
    }
  };
  return (
    <AnimatedSection id="section-services" className="">
      {/* Services Cards */}
      <section
        className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col lg:flex-row lg:items-center min-h-[400px] lg:min-h-[600px]">
            {/* Large Yellow Gear Icon */}
            <div className="flex justify-center lg:absolute lg:left-[8%] xl:lg:left-[10%] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:z-10 mb-8 lg:mb-0">
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 animate-spin-slow hover:animate-spin-fast transition-all duration-700"
                style={{ color: "#ffe500" }}
              >
                <svg
                  className="w-full h-full drop-shadow-lg lg:drop-shadow-2xl"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Services gear icon"
                >
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
              </div>
            </div>

            {/* Curved Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute left-[22%] xl:left-[25%] top-1/2 transform -translate-y-1/2 w-1/4 xl:w-1/3 h-1">
              <svg
                className="w-full h-16 xl:h-20"
                viewBox="0 0 300 80"
                fill="none"
              >
                <path
                  d="M0 40 Q150 10 300 40"
                  stroke="#ffe500"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>
            </div>

            {/* Services Section */}
            <div className="w-full lg:absolute lg:right-[12%] xl:lg:right-[15%] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-1/2 xl:lg:w-1/2">
              {/* SUPPLY SOLUTIONS - Prominent */}
              <div className="mb-6 lg:mb-6 xl:mb-8">
                <button
                  onClick={() => handleServiceClick("supply-solutions")}
                  className="w-full flex items-center bg-white rounded-2xl lg:rounded-full shadow-lg border-2 border-yellow-400 p-4 lg:p-3 xl:p-4 hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                  aria-label="Supply Solutions service"
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center mr-4 lg:mr-3 xl:mr-4 flex-shrink-0"
                    style={{ backgroundColor: "#ffe500" }}
                  >
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
                      style={{ color: "#040404" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-lg xl:text-xl font-bold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                    {otherTexts["SUPPLY SOLUTIONS"][locale]}
                  </h3>
                </button>
              </div>

              {/* Grouped Services in Dashed Container */}
              <div className="border-2 border-dashed border-gray-400 rounded-2xl p-4 lg:p-4 xl:p-6 bg-white/50 space-y-3 lg:space-y-0">
                {[
                  {
                    id: "lifting-rental",
                    title: {
                      az: "QALDIRMA VƏ İCARƏ XİDMƏTLƏRİ",
                      en: "LIFTING AND RENTAL SERVICES",
                      tr: "KALDIRMA VE KİRALAMA HİZMETLERİ",
                    },
                    icon: "M12,2A2,2 0 0,1 14,4V8.5A0.5,0.5 0 0,0 14.5,9H16A1,1 0 0,1 17,10V16A1,1 0 0,1 16,17H8A1,1 0 0,1 7,16V10A1,1 0 0,1 8,9H9.5A0.5,0.5 0 0,0 10,8.5V4A2,2 0 0,1 12,2M12,4V8.5A2.5,2.5 0 0,1 9.5,11H8V15H16V11H14.5A2.5,2.5 0 0,1 12,8.5V4Z",
                  },
                  {
                    id: "civil-engineering",
                    title: {
                      az: "MÜLKİ MÜHƏNDİSLİK",
                      en: "CIVIL ENGINEERING",
                      tr: "İNŞAAT MÜHENDİSLİĞİ",
                    },
                    icon: "M12,3L2,12H5V20H19V12H22L12,3M12,8.75A1.25,1.25 0 0,1 13.25,10A1.25,1.25 0 0,1 12,11.25A1.25,1.25 0 0,1 10.75,10A1.25,1.25 0 0,1 12,8.75M12,6.5A3.5,3.5 0 0,0 8.5,10A3.5,3.5 0 0,0 12,13.5A3.5,3.5 0 0,0 15.5,10A3.5,3.5 0 0,0 12,6.5Z",
                  },
                  {
                    id: "civil-construction",
                    title: {
                      az: "MÜLKİ TİKİNTİ",
                      en: "CIVIL CONSTRUCTION",
                      tr: "İNŞAAT YAPIMI",
                    },
                    icon: "M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M12,10H6V6H12V10Z",
                  },
                  {
                    id: "logistics",
                    title: {
                      az: "LOGİSTİKA",
                      en: "LOGISTICS",
                      tr: "LOJİSTİK",
                    },
                    icon: "M18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5M19.5,9.5L21.46,12H17V9.5M6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5M20,8H17V4H3C1.89,4 1,4.89 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8Z",
                  },
                ].map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className="w-full flex items-center bg-white rounded-2xl lg:rounded-full shadow-md border border-yellow-300 p-3 mb-3 lg:mb-3 xl:mb-4 last:mb-0 hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                    aria-label={`${service.title} service`}
                  >
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                      style={{ backgroundColor: "#ffe500" }}
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                        style={{ color: "#040404" }}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={service.icon} />
                      </svg>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-base xl:text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition-colors duration-300">
                      {service.title[locale]}
                    </h3>
                  </button>
                ))}
              </div>
            </div>

            {/* Vertical 'SERVICES' Text - Desktop Only */}
            <div className="hidden lg:block absolute right-[3%] xl:right-[5%] top-1/2 transform -translate-y-1/2">
              <div className="transform rotate-90 origin-center">
                <h2
                  className="text-4xl xl:text-6xl font-bold text-gray-300 tracking-widest"
                  aria-label="Services section"
                >
                  {otherTexts.SERVICES[locale]}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: "#ffe500", color: "#040404" }}
            >
              {otherTexts.workProcess[locale]}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#040404" }}
            >
              {otherTexts.stepByStepProcess[locale]}
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: "#040404", opacity: 0.8 }}
            >
              {otherTexts.processDescription[locale]}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    style={{ backgroundColor: "#ffe500", color: "#040404" }}
                  >
                    {step.step}
                  </div>

                  <div className="flex flex-col items-start">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md"
                      style={{ backgroundColor: "#ffe500", opacity: 0.2  }}
                    >
                      <IconComponent
                        className="w-7 h-7"
                        style={{ color: "#040404" }}
                      />
                    </div>
                    <h3
                      className="text-xl font-bold mb-4"
                      style={{ color: "#040404" }}
                    >
                      {step.title[locale]}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#040404", opacity: 0.7 }}
                    >
                      {step.description[locale]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer Top Component and Footer */}
      <CTASection locale={locale} />
    </AnimatedSection>
  );
};

export default ServicesClient;
