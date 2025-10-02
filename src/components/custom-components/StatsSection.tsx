"use client";

import React from "react";
import { Users, Award, Clock, Target } from "lucide-react";

const StatsSection = ({ locale }: { locale: "az" | "en" | "tr" }) => {
  const stats = [
    {
      id: 1,
      icon: Users,
      number: "150+",
      label: {
        az: "Komanda Üzvü",
        en: "Team Members",
        tr: "Takım Üyeleri",
      },
      description: {
        az: "Müxtəlif komanda üzvləri",
        en: "Diverse team members",
        tr: "Çeşitli ekip üyeleri",
      },
    },
    {
      id: 2,
      icon: Award,
      number: "25+",
      label: {
        az: "İl Təcrübə",
        en: "Years of Experience",
        tr: "Takım Tecrübesi",
      },
      description: {
        az: "Fəaliyyət illəri",
        en: "Years of Operation",
        tr: "Faaliyet yılları",
      },
    },
    {
      id: 3,
      icon: Target,
      number: "500+",
      label: {
        az: "Uğurlu Layihə",
        en: "Successful Projects",
        tr: "Başarılı Projeler",
      },
      description: {
        az: "Tamamlanmış layihələr",
        en: "Completed Projects",
        tr: "Tamamlanmış Projeler",
      },
    },
    {
      id: 4,
      icon: Clock,
      number: "24/7",
      label: {
        az: "Dəstək Xidməti",
        en: "24/7 Support",
        tr: "24/7 Destek",
      },
      description: {
        az: "Fasiləsiz texniki dəstək",
        en: "24/7 Technical Support",
        tr: "24/7 Teknik Destek",
      },
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ffe500] rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-black" />
                </div>

                <div className="mb-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "#040404" }}
                  >
                    {stat.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label[locale]}
                </h3>

                <p className="text-sm text-gray-600">
                  {stat.description[locale]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
