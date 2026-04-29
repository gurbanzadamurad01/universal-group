"use client";

import React from "react";
import { MapPin, Clock } from "lucide-react";

interface LangText {
  [key: string]: string;
}

interface Project {
  id: number;
  title: LangText;
  company: string;
  description: LangText;
  image: string;
  status: LangText;
  category: LangText;
  location: LangText;
  startDate: string;
  endDate: string;
  teamCount: number;
  services: string[];
}

const ProductsSection = ({ locale }: { locale: string }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: {
        az: "Azərişıq ASC ASAN Layihələri",
        en: "Azərishiq OJSC ASAN Projects",
        tr: "Azərişıq ASC ASAN Projeleri",
      },
      company: "Azərişıq ASC",
      description: {
        az: "Elektrik xidmətlərinin ASAN modelinə uyğun optimallaşdırılması",
        en: "Optimization of electricity services based on ASAN model",
        tr: "Elektrik hizmetlerinin ASAN modeline göre optimize edilmesi",
      },
      image: "/projects/azerisiq.jpg",
      status: {
        az: "Tamamlandı",
        en: "Completed",
        tr: "Tamamlandı",
      },
      category: {
        az: "Enerji",
        en: "Energy",
        tr: "Enerji",
      },
      location: {
        az: "Bakı, Azərbaycan",
        en: "Baku, Azerbaijan",
        tr: "Bakü, Azerbaycan",
      },
      startDate: "2021-01",
      endDate: "2023-06",
      teamCount: 40,
      services: ["Texniki dəstək", "Mühəndislik", "Təchizat"],
    },
    {
      id: 2,
      title: {
        az: "GPON Layihəsi",
        en: "GPON Project",
        tr: "GPON Projesi",
      },
      company: "Ministry of Transport",
      description: {
        az: "Fiber optik internet infrastrukturunun qurulması",
        en: "Fiber optic infrastructure deployment",
        tr: "Fiber optik altyapının kurulması",
      },
      image: "/projects/gpon.png",
      status: {
        az: "Tamamlandı",
        en: "Completed",
        tr: "Tamamlandı",
      },
      category: {
        az: "Telekommunikasiya",
        en: "Telecommunications",
        tr: "Telekomünikasyon",
      },
      location: {
        az: "Azərbaycan",
        en: "Azerbaijan",
        tr: "Azerbaycan",
      },
      startDate: "2020-05",
      endDate: "2022-12",
      teamCount: 60,
      services: ["Şəbəkə qurulumu", "Texniki dəstək"],
    },
    {
      id: 3,
      title: {
        az: "AZFEN Enerji Layihələri",
        en: "AZFEN Energy Projects",
        tr: "AZFEN Enerji Projeleri",
      },
      company: "AZFEN",
      description: {
        az: "Enerji sektorunda iri miqyaslı layihələrin icrası",
        en: "Large-scale energy project execution",
        tr: "Büyük ölçekli enerji projeleri",
      },
      image: "/projects/azfen.png",
      status: {
        az: "Davam edir",
        en: "Ongoing",
        tr: "Devam Ediyor",
      },
      category: {
        az: "Mərdiməkan",
        en: "Merdimekan",
        tr: "Merdimekan",
      },
      location: {
        az: "Xəzər regionu",
        en: "Caspian Region",
        tr: "Hazar Bölgesi",
      },
      startDate: "2022-03",
      endDate: "2026-01",
      teamCount: 100,
      services: ["Mühəndislik", "Quraşdırma", "Logistika"],
    },
    {
      id: 4,
      title: {
        az: "SOCAR Şahdəniz 2",
        en: "SOCAR Shah Deniz 2",
        tr: "SOCAR Şahdeniz 2",
      },
      company: "SOCAR",
      description: {
        az: "Qaz yatağının ikinci mərhələsinin inkişafı",
        en: "Second phase gas field development",
        tr: "Gaz sahasının ikinci fazı",
      },
      image: "/projects/shahdeniz.png",
      status: {
        az: "Davam edir",
        en: "Ongoing",
        tr: "Devam Ediyor",
      },
      category: {
        az: "Mərdiməkan",
        en: "Merdimekan",
        tr: "Merdimekan",
      },
      location: {
        az: "Xəzər dənizi",
        en: "Caspian Sea",
        tr: "Hazar Denizi",
      },
      startDate: "2021-06",
      endDate: "2027-12",
      teamCount: 120,
      services: ["Qazma", "Mühəndislik", "Təchizat"],
    },
    {
      id: 5,
      title: {
        az: "Dövlət Vergi Xidməti Nərimanov binası",
        en: "State Tax Service Narimanov Building",
        tr: "Vergi Hizmeti Nerimanov Binası",
      },
      company: "State Tax Service",
      description: {
        az: "İnzibati binanın tikintisi",
        en: "Administrative building construction",
        tr: "İdari bina inşası",
      },
      image: "/projects/tax.jpg",
      status: {
        az: "Tamamlandı",
        en: "Completed",
        tr: "Tamamlandı",
      },
      category: {
        az: "Tikinti",
        en: "Construction",
        tr: "İnşaat",
      },
      location: {
        az: "Bakı",
        en: "Baku",
        tr: "Bakü",
      },
      startDate: "2020-09",
      endDate: "2022-08",
      teamCount: 50,
      services: ["Tikinti", "Layihə idarəetməsi"],
    },
    {
      id: 6,
      title: {
        az: "Caspian Drilling Platformaları",
        en: "Caspian Drilling Platforms",
        tr: "Caspian Drilling Platformları",
      },
      company: "Caspian Drilling",
      description: {
        az: "Dəniz qazma platformalarının qurulması",
        en: "Offshore drilling platforms",
        tr: "Deniz sondaj platformları",
      },
      image: "/projects/drilling.png",
      status: {
        az: "Tamamlandı",
        en: "Completed",
        tr: "Tamamlandı",
      },
      category: {
        az: "Neft və Qaz",
        en: "Oil & Gas",
        tr: "Petrol ve Gaz",
      },
      location: {
        az: "Xəzər dənizi",
        en: "Caspian Sea",
        tr: "Hazar Denizi",
      },
      startDate: "2019-04",
      endDate: "2021-11",
      teamCount: 80,
      services: ["Qazma", "Texniki dəstək"],
    },
    {
      id: 7,
      title: {
        az: "Bakı Kristal Zalı",
        en: "Baku Crystal Hall",
        tr: "Bakü Kristal Salonu",
      },
      company: "Baku Crystal Hall",
      description: {
        az: "Beynəlxalq tədbirlər üçün arena",
        en: "Arena for international events",
        tr: "Uluslararası etkinlik alanı",
      },
      image: "/projects/crystalhall.jpg",
      status: {
        az: "Tamamlandı",
        en: "Completed",
        tr: "Tamamlandı",
      },
      category: {
        az: "İdman / Event",
        en: "Event",
        tr: "Etkinlik",
      },
      location: {
        az: "Bakı",
        en: "Baku",
        tr: "Bakü",
      },
      startDate: "2011-01",
      endDate: "2012-04",
      teamCount: 70,
      services: ["Tikinti", "İnfrastruktur"],
    },
    {
      id: 8,
      title: {
        az: "Bakı Olimpiya Stadionu",
        en: "Baku Olympic Stadium",
        tr: "Bakü Olimpiyat Stadyumu",
      },
      company: "Baku Olympic Stadium",
      description: {
        az: "Böyük idman tədbirləri üçün stadion",
        en: "Stadium for major sports events",
        tr: "Büyük spor etkinlikleri için stadyum",
      },
      image: "/projects/stadium.jpg",
      status: {
        az: "Tamamlandı",
        en: "Completed",
        tr: "Tamamlandı",
      },
      category: {
        az: "İdman",
        en: "Sports",
        tr: "Spor",
      },
      location: {
        az: "Bakı",
        en: "Baku",
        tr: "Bakü",
      },
      startDate: "2012-06",
      endDate: "2015-03",
      teamCount: 150,
      services: ["Tikinti", "Mühəndislik"],
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
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[#ffe500]/30"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title[locale]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#ffe500] text-gray-900">
                      {project.status[locale]}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/20 text-white backdrop-blur-sm">
                      {project.category[locale]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {project.title[locale]}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-[#ffe500]"></div>
                    <p className="text-sm font-medium text-[#ffe500]">
                      {project.company}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {project.description[locale]}
                  </p>

                  {/* Key Info */}
                  {/* <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin className="w-3 h-3 mr-2" />
                      {project.location[locale]}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="w-3 h-3 mr-2" />
                      {project.startDate} - {project.endDate}
                    </div>
                  </div> */}

                  {/* Services */}
                  {/* <div className="flex flex-wrap gap-1">
                    {project.services.slice(0, 3).map((service, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="px-2 py-1 bg-[#ffe500] text-gray-900 text-xs rounded-md font-medium">
                        +{project.services.length - 3}
                      </span>
                    )}
                  </div> */}
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
