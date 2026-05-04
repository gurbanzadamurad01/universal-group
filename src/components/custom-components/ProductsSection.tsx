"use client";

import React from "react";
import { MapPin, Clock } from "lucide-react";

interface LangText {
  [key: string]: string;
}

interface Project {
  id: number;
  title: LangText;
  company: string; // "Pasha Construction", "Azərişıq ASC" və s.
  description: LangText;
  image: string;
  status: LangText;
  // Category sahəsini "artıqdır" dediyiniz üçün opsional (?) etdim 
  // və ya interface-dən tamamilə silə bilərsiniz.
  category?: LangText;
  location: LangText;
  startDate: string;
  endDate: string;
  teamCount?: number; // Opsional, əgər hər yerdə istifadə olunmursa
  services: string[];
}

const ProductsSection = ({ locale }: { locale: string }) => {
  const projects: Project[] = [
    {
      id: 1,
      company: "Azərişıq ASC",
      title: {
        az: "ASAN Layihələri",
        en: "ASAN Projects",
        tr: "ASAN Projeleri",
      },
      description: {
        az: "Elektrik xidmətlərinin ASAN modelinə uyğun optimallaşdırılması və texniki təminatı.",
        en: "Optimization and technical support of electricity services based on ASAN model.",
        tr: "Elektrik hizmetlerinin ASAN modeline göre optimize edilmesi ve teknik desteği.",
      },
      image: "/projects/azerisiq.jpg",
      status: { az: "Tamamlandı", en: "Completed", tr: "Tamamlandı" },
      location: { az: "Bakı, Azərbaycan", en: "Baku, Azerbaijan", tr: "Bakü, Azerbaycan" },
      startDate: "2021",
      endDate: "2023",
      services: ["Mühəndislik", "Texniki dəstək"],
    },
    {
      id: 2,
      company: "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi",
      title: {
        az: "GPON Layihəsi",
        en: "GPON Project",
        tr: "GPON Projesi",
      },
      description: {
        az: "Yüksək sürətli fiber-optik internet infrastrukturunun qurulması.",
        en: "Deployment of high-speed fiber-optic internet infrastructure.",
        tr: "Yüksek hızlı fiber optik internet altyapısının kurulması.",
      },
      image: "/projects/gpon.png",
      status: { az: "Tamamlandı", en: "Completed", tr: "Tamamlandı" },
      location: { az: "Azərbaycan", en: "Azerbaijan", tr: "Azerbaycan" },
      startDate: "2020",
      endDate: "2022",
      services: ["İnfrastruktur"],
    },
    {
      id: 3,
      company: "PASHA Real Estate",
      title: {
        az: "Mərdi Mekan Estate",
        en: "Mardi Mekan Estate",
        tr: "Mardi Mekan Estate",
      },
      description: {
        az: "Premium yaşayış kompleksinin mühəndislik və infrastruktur işləri.",
        en: "Engineering and infrastructure works for the premium residential complex.",
        tr: "Premium konut kompleksinin mühendislik ve altyapı işleri.",
      },
      image: "/projects/mardimekan.png", // Generate etdiyimiz şəkli bura qoyarsan
      status: { az: "Davam edir", en: "Ongoing", tr: "Devam Ediyor" },
      location: { az: "Mərdəkan, Bakı", en: "Mardakan, Baku", tr: "Merdekân, Bakü" },
      startDate: "2022",
      endDate: "2025",
      services: ["Mühəndislik"],
    },
    {
      id: 4,
      company: "AZFEN",
      title: {
        az: "SunPower, Petkim, STAR Project, HAOR",
        en: "SunPower, Petkim, STAR Project, HAOR",
        tr: "SunPower, Petkim, STAR Project, HAOR",
      },
      description: {
        az: "Enerji və sənaye obyektlərində quraşdırma və mühəndislik xidmətləri.",
        en: "Installation and engineering services in energy and industrial facilities.",
        tr: "Enerji ve sanayi tesislerinde kurulum ve mühendislik hizmetleri.",
      },
      image: "/projects/azfen.png",
      status: { az: "Tamamlandı", en: "Completed", tr: "Tamamlandı" },
      location: { az: "Region", en: "Region", tr: "Bölge" },
      startDate: "2018",
      endDate: "2023",
      services: ["Mühəndislik", "Təchizat"],
    },
    {
      id: 5,
      company: "SOCAR",
      title: {
        az: "Shah Deniz 2 Project",
        en: "Shah Deniz 2 Project",
        tr: "Shah Deniz 2 Projesi",
      },
      description: {
        az: "Xəzər dənizində qaz yatağının işlənməsi üzrə infrastruktur dəstəyi.",
        en: "Infrastructure support for the gas field development in the Caspian Sea.",
        tr: "Hazar Denizi'ndeki gaz sahası geliştirme çalışmaları için altyapı desteği.",
      },
      image: "/projects/shahdeniz.png",
      status: { az: "Davam edir", en: "Ongoing", tr: "Devam Ediyor" },
      location: { az: "Xəzər dənizi", en: "Caspian Sea", tr: "Hazar Denizi" },
      startDate: "2021",
      endDate: "2027",
      services: ["Qazma", "Mühəndislik"],
    },
    {
      id: 6,
      company: "İqtisadiyyat Nazirliyi yanında DVX",
      title: {
        az: "Nərimanov rayonu, Heydər Əliyev prospekti binası",
        en: "Narimanov District, Heydar Aliyev Avenue Building",
        tr: "Nerimanov Rayonu, Haydar Aliyev Caddesi Binası",
      },
      description: {
        az: "Dövlət Vergi Xidmətinin inzibati binasının tikinti və quraşdırma işləri.",
        en: "Construction and installation works of the State Tax Service building.",
        tr: "Devlet Vergi Hizmeti binasının inşaat ve montaj işleri.",
      },
      image: "/projects/tax.jpg",
      status: { az: "Tamamlandı", en: "Completed", tr: "Tamamlandı" },
      location: { az: "Bakı", en: "Baku", tr: "Bakü" },
      startDate: "2020",
      endDate: "2022",
      services: ["Tikinti"],
    },
    {
      id: 7,
      company: "Caspian Drilling Company LTD",
      title: {
        az: "Qarabağ və Dədə Qorqud Platformaları",
        en: "Karabakh and Dede Gorgud Platforms",
        tr: "Karabağ ve Dede Korkut Platformları",
      },
      description: {
        az: "Dəniz qazma qurğularının modernləşdirilməsi və texniki dəstəyi.",
        en: "Modernization and technical support of offshore drilling rigs.",
        tr: "Açık deniz sondaj kulelerinin modernizasyonu ve teknik desteği.",
      },
      image: "/projects/drilling.png",
      status: { az: "Tamamlandı", en: "Completed", tr: "Tamamlandı" },
      location: { az: "Xəzər dənizi", en: "Caspian Sea", tr: "Hazar Denizi" },
      startDate: "2019",
      endDate: "2022",
      services: ["Texniki dəstək"],
    },
    {
      id: 8,
      company: "Baku Crystal Hall",
      title: {
        az: "Kristal Zal İnfrastruktur",
        en: "Crystal Hall Infrastructure",
        tr: "Kristal Salon Altyapı",
      },
      description: {
        az: "Beynəlxalq tədbirlər mərkəzinin infrastruktur və mühəndislik xidmətləri.",
        en: "Infrastructure and engineering services of the international event center.",
        tr: "Uluslararası etkinlik merkezinin altyapı ve mühendislik hizmetleri.",
      },
      image: "/projects/crystalhall.jpg",
      status: { az: "Tamamlandı", en: "Completed", tr: "Tamamlandı" },
      location: { az: "Bakı", en: "Baku", tr: "Bakü" },
      startDate: "2011",
      endDate: "2012",
      services: ["Tikinti", "İnfrastruktur"],
    },
    {
      id: 9,
      company: "Baku Olympic Stadium",
      title: {
        az: "Olimpiya Stadionu Layihəsi",
        en: "Olympic Stadium Project",
        tr: "Olimpiyat Stadyumu Projesi",
      },
      description: {
        az: "Müasir stadion kompleksinin tikinti və texniki qurulum işləri.",
        en: "Construction and technical installation of the modern stadium complex.",
        tr: "Modern stadyum kompleksinin inşaat ve teknik kurulum işleri.",
      },
      image: "/projects/stadium.jpg",
      status: { az: "Tamamlandı", en: "Completed", tr: "Tamamlandı" },
      location: { az: "Bakı", en: "Baku", tr: "Bakü" },
      startDate: "2012",
      endDate: "2015",
      services: ["Mühəndislik", "Quraşdırma"],
    },
    {
      id: 10,
      company: "Pasha Construction",
      title: {
        az: "Yaşayış və Biznes Mərkəzləri",
        en: "Residential and Business Centers",
        tr: "Konut ve İş Merkezleri",
      },
      description: {
        az: "Şəhərin müasir simasını formalaşdıran premium tikinti layihələri.",
        en: "Premium construction projects shaping the modern face of the city.",
        tr: "Şehrin modern yüzünü şekillendiren premium inşaat projeleri.",
      },
      image: "/projects/pasha_const.png", // Generate etdiyimiz 2-ci şəkli bura qoyarsan
      status: { az: "Davam edir", en: "Ongoing", tr: "Devam Ediyor" },
      location: { az: "Bakı", en: "Baku", tr: "Bakü" },
      startDate: "2023",
      endDate: "2026",
      services: ["Tikinti", "İdarəetmə"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Project Cards Section */}
      <section className="py-16 px-6" id="all-projects">
        <div className="container mx-auto">
          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[#ffe500]/30 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title[locale]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Status Badge - Sol tərəfdə qaldı */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ffe500] text-gray-900 shadow-sm">
                      {project.status[locale]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Company Name - İndi ən öndə və daha diqqətçəkəndir */}
                  <h4 className="text-md font-extrabold text-[#ffe500] leading-tight mb-2 uppercase italic">
                    {project.company}
                  </h4>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem]">
                    {project.title[locale]}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {project.description[locale]}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center text-[11px] text-gray-500 font-medium">
                    <span>{project.location[locale]}</span>
                    <span>{project.startDate.split('-')[0]} - {project.endDate.split('-')[0]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;
