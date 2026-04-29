"use client";

import React from "react";
import {
  TrendingUp,
  Headphones,
  Truck,
  DollarSign,
  UserCheck,
  Settings,
} from "lucide-react";
import { ByLanguage } from "@/types";

interface Department {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: ByLanguage;
  count: number;
  description: ByLanguage;
}

const DepartmentsSection = ({ locale }: { locale: "az" | "en" | "tr" }) => {
  const departments: Department[] = [
    {
      id: 1,
      icon: Settings,
      title: {
        az: "İdarəetmə",
        en: "Management",
        tr: "Yönetim",
      },
      count: 8,
      description: {
        az: "Şirkətin strateji idarəetməsi və inkişafı",
        en: "Strategic management and development of the company",
        tr: "Şirketin stratejik yönetimi ve gelişimi",
      },
    },
    {
      id: 2,
      icon: TrendingUp,
      title: {
        az: "Satış və Marketinq",
        en: "Sales and Marketing",
        tr: "Satış ve Pazarlama",
      },
      count: 15,
      description: {
        az: "Satış strategiyaları və marketinq kampaniyaları",
        en: "Sales strategies and marketing campaigns",
        tr: "Satış stratejileri ve pazarlama kampanyaları",
      },
    },
    {
      id: 3,
      icon: Headphones,
      title: {
        az: "Texniki Dəstək",
        en: "Technical Support",
        tr: "Teknik Destek",
      },
      count: 12,
      description: {
        az: "Texniki problemlərin həlli və müştəri dəstəyi",
        en: "Solving technical problems and customer support",
        tr: "Teknik sorunların çözümü ve müşteri desteği",
      },
    },
    {
      id: 4,
      icon: Truck,
      title: {
        az: "Logistika",
        en: "Logistics",
        tr: "Lojistik",
      },
      count: 10,
      description: {
        az: "Təchizat zənciri və anbar idarəetməsi",
        en: "Supply chain and warehouse management",
        tr: "Tedarik zinciri ve depo yönetimi",
      },
    },
    {
      id: 5,
      icon: DollarSign,
      title: {
        az: "Maliyyə",
        en: "Finance",
        tr: "Finans",
      },
      count: 6,
      description: {
        az: "Maliyyə planlaşdırması və büdcə idarəetməsi",
        en: "Financial planning and budget management",
        tr: "Finansal planlama ve bütçe yönetimi",
      },
    },
    {
      id: 6,
      icon: UserCheck,
      title: {
        az: "İnsan Resursları",
        en: "Human Resources",
        tr: "İnsan Kaynakları",
      },
      count: 4,
      description: {
        az: "Kadr siyasəti və işçi inkişafı",
        en: "Personnel policy and employee development",
        tr: "Personel politikası ve çalışan gelişimi",
      },
    },
  ];

  const title = {
    departmentTitle: {
      az: "Departamentlərimiz",
      en: "Our Departments",
      tr: "Departmanlarımız",
    },
    departmentDescription: {
      az: "Hər departament öz sahəsində peşəkar komanda ilə fəaliyyət göstərir",
      en: "Each department operates with a professional team in its field",
      tr: "Her departman kendi alanında profesyonel bir ekiple faaliyet göstermektedir",
    },
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#040404" }}
          >
            {title.departmentTitle[locale]}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            {title.departmentDescription[locale]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((department) => {
            const IconComponent = department.icon;
            return (
              <div
                key={department.id}
                className="bg-gradient-to-br from-[#ffe500]/2 to-[#ffe500]/5 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ffe500] rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {department.title[locale]}
                </h3>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-[#ffe500]">
                    {department.count}
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {department.description[locale]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
