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

const ProductsSection = ({locale}: {locale: string}) => {

  const projects: Project[] = [
    {
      id: 1,
      title: {
        az:"Bakı Metropoliteni Genişləndirilməsi",
        en: "Expansion of the Bakı Metropolitan City",
        tr: "Bakı Metropolitenin Genişlenmesi",
      },
      company: "Bakı Metro MMC",
      description: {
        az: "Şəhər nəqliyyat sisteminin müasirləşdirilməsi və genişləndirilməsi layihəsi",
        en: "Urban Transport System Modernization and Expansion Project",
        tr: "Şehir İçi Ulaşım Sisteminin Modernizasyonu ve Genişletilmesi Projesi"
      },
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      status: {
        az: "Tamamlanmış",
        en: "Completed",
        tr: "Tamamlanmış",
      },
      category: {
        az: "İnfrastruktur",
        en: "Infrastructure",
        tr: "Infrastruktur"
      },
      location: {
        az: "Bakı, Azərbaycan",
        en: "Bakı, Azerbaijan",
        tr: "Bakı, Azerbaycan"
      },
      startDate: "2022-01",
      endDate: "2024-06",
      teamCount: 45,
      services: ["Texniki dəstək", "Təchizat həlləri", "Logistika"],
    },
    {
      id: 2,
      title: {
        az: "Şahdəniz Qaz Sahəsi İnkişafı",
        en: "Shahdeniz Qaz Sahasi Expansion",
        tr: "Şahdeniz Qaz Sahası Genişletilmesi",
      },
      company: "BP Azerbaijan",
      description: {
        az: "Təbii qaz hasilatının artırılması və infrastrukturun təkmilləşdirilməsi",
        en: "Enhancing Oil Production and Improving Infrastructure",
        tr: "Tübitak'ün Qaz Hizmetleri ve İnfrastruktur Geliştirme Projesi",
      },
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      status: {
        az: "Davam edir",
        en: "Ongoing",
        tr: "Devam Ediyor",
      },
      category: {
        az: "Neft və Qaz",
        en: "Oil and Gas",
        tr: "Oily and Gas"
      },
      location: {
        az: "Xəzər dənizi",
        en: "Xezer Sea",
        tr: "Hazar Denizi"
      },
      startDate: "2023-03",
      endDate: "2025-12",
      teamCount: 78,
      services: ["Texniki dəstək", "Mühəndislik", "Təchizat həlləri"],
    },
    {
      id: 3,
      title: {
        az: "Bakı Limanı Modernizasiyası",
        en: "Bakı Metropolitan City Modernization",
        tr: "Bakı Metropolitenin Modernizasyonu",
      },
      company: "Bakı Beynəlxalq Dəniz Ticarət Limanı",
      description: {
        az: "Liman infrastrukturunun müasirləşdirilməsi və genişləndirilməsi",
        en: "Modernization and Expansion of the Bakı Metropolitan City",
        tr: "Bakı Metropolitenin Modernizasyonu ve Genişletilmesi",
      },
      image:
        "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?w=400&h=250&fit=crop",
      status: {
        az: "Planlaşdırılır",
        en: "Planned",
        tr: "Planlanıyor",
      },
      category: {
        az: "Gəmiçilik",
        en: "Shipyard",
        tr: "Gemi Fabrikası"
      },
      location: {
        az: "Bakı Limanı",
        en: "Bakı Metropolitan City",
        tr: "Bakı Metropoliten",
      },
      startDate: "2024-09",
      endDate: "2026-03",
      teamCount: 32,
      services: ["Logistika", "Təchizat həlləri", "Konsaltinq"],
    },
    {
      id: 4,
      title: {
        az: "Azərbaycan Elektrik Şəbəkəsi Yenilənməsi",
        en: "Azerbaijan Electric Network Modernization",
        tr: "Azerbaycan Elektrik Şehriyenin Yenilenmesi",
      },
      company: "Azərenerji",
      description: {
        az: "Elektrik enerjisi infrastrukturunun müasirləşdirilməsi layihəsi",
        en: "Electricity Infrastructure Modernization Project",
        tr: "Elektrik Enerjisi Altyapısının Modernizasyonu Projesi"
      },
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop",
      status: {
        az: "Davam edir",
        en: "Ongoing",
        tr: "Devam Ediyor",
      },
      category: {
        az: "İnfrastruktur",
        en: "Infrastructure",
        tr: "Infrastruktur"
      },
      location: {
        az: "Ümumrespublika",
        en: "United Republic of Azerbaijan",
        tr: "Azerbaycan Cumhuriyeti"
      },
      startDate: "2023-01",
      endDate: "2025-08",
      teamCount: 120,
      services: [
        "Texniki dəstək",
        "Təchizat həlləri",
        "Mühəndislik",
        "Logistika",
      ],
    },
    {
      id: 5,
      title: {
        az: "Xəzər Dənizi Neft Platforması",
        en: "Xezer Sea Oil Platform",
        tr: "Hazar Denizi Neft Platforması",
      },
      company: "SOCAR",
      description: {
        az: "Yeni neft hasilat platformasının qurulması və istismara verilməsi",
        en: "New Oil Platform Construction and Expansion",
        tr: "Yeni Neft Platformunun Kurulması ve Genişletilmesi",
      },
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      status: {
        az: "Tamamlanmış",
        en: "Completed",
        tr: "Tamamlanmış",
      },
      category: {
        az: "Neft və Qaz",
        en: "Oil and Gas",
        tr: "Oily and Gas"
      },
      location:{
        az: "Xəzər dənizi",
        en: "Xezer Sea",
        tr: "Hazar Denizi"
      },
      startDate: "2021-06",
      endDate: "2023-11",
      teamCount: 95,
      services: ["Mühəndislik", "Təchizat həlləri", "Texniki dəstək"],
    },
    {
      id: 6,
      title: {
        az: "Gəmi Təmiri və Baxım Mərkəzi",
        en: "Caspian Shipyard",
        tr: "Caspian Gemi Fabrikası",
      },
      company: "Caspian Shipyard",
      description: {
        az: "Müasir gəmi təmiri və baxım mərkəzinin yaradılması",
        en: "Caspian Shipyard",
        tr: "Caspian Gemi Fabrikası",
      },
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
      status: {
        az: "Planlaşdırılır",
        en: "Planned",
        tr: "Planlanıyor",
      },
      category: {
        az: "Gəmiçilik",
        en: "Shipyard",
        tr: "Gemi Fabrikası"
      },
      location: {
        az: "Bakı",
        en: "Bakı",
        tr: "Bakı"
      },
      startDate: "2024-12",
      endDate: "2026-09",
      teamCount: 55,
      services: [
        "Texniki dəstək",
        "Təchizat həlləri",
        "Konsaltinq",
        "Logistika",
      ],
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
                    <span
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#ffe500] text-gray-900"
                      >
                        {project.status[locale]}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium bg-black/20 text-white backdrop-blur-sm"
                      >
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
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2"
                    >
                      {project.description[locale]}
                    </p>
                    
                    {/* Key Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="w-3 h-3 mr-2" />
                        {project.location[locale]}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-2" />
                        {project.startDate} - {project.endDate}
                      </div>
                    </div>

                    {/* Services */}
                    <div className="flex flex-wrap gap-1">
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
