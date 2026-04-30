"use client";

import React, { useState } from "react";
import { Search, ExternalLink } from "lucide-react";

interface Partner {
  id: number;
  name: string;
  logo: string;
  category: {
    [key: string]: string;
  };
  website: string;
  description: string;
}

const PartnersSection = ({ locale }: { locale: 'az' | 'en' | 'tr' }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // YÜKSƏK KEYFİYYƏTLİ LOGOLARLA YENİLƏNMİŞ DATA
  const partners: Partner[] = [
    {
      id: 1,
      name: "Rockwool",
      logo: "/partners-logo/rockwool.png", // Alternativ olaraq aşağıdakı:
      // logo: "https://logo.clearbit.com/rockwool.com", 
      category: { az: "İzolyasiya", en: "Insulation", tr: "Yalıtım" },
      website: "https://www.rockwool.com/",
      description: "Danimarka mənşəli daş yunu istehsalçısı."
    },
    {
      id: 2,
      name: "XCMG",
      logo: "/partners-logo/xcmg.png",
      category: { az: "Ağır Texnika", en: "Heavy Machinery", tr: "Ağır İş Makinaları" },
      website: "https://www.xcmg.com/",
      description: "Çin ağır sənaye nəhəngi."
    },
    {
      id: 3,
      name: "Eaton",
      logo: "/partners-logo/Eaton logo (1).png",
      category: { az: "Elektrik", en: "Electrical", tr: "Elektrik" },
      website: "https://www.eaton.com/",
      description: "Enerji idarəetmə həlləri."
    },
    {
      id: 4,
      name: "Bosch",
      logo: "/partners-logo/Bosch-Logo.png",
      category: { az: "Sənaye Alətləri", en: "Industrial Tools", tr: "Endüstriyel Aletler" },
      website: "https://www.bosch.com/",
      description: "Qlobal texnologiya təchizatçısı."
    },
    {
      id: 5,
      name: "Stanley",
      logo: "/partners-logo/stanley.jpg",
      category: { az: "Əl Alətləri", en: "Hand Tools", tr: "El Aletleri" },
      website: "https://www.stanleytools.com/",
      description: "Professional əl alətləri."
    },
    {
      id: 6,
      name: "Makita",
      logo: "/partners-logo/makita.jpg",
      category: { az: "Elektrikli Alətlər", en: "Power Tools", tr: "Elektrikli El Aletleri" },
      website: "https://www.makita.com/",
      description: "Yapon texnologiyalı güc alətləri."
    },
    {
      id: 7,
      name: "Schneider Electric",
      logo: "/partners-logo/ata.png",
      category: { az: "Elektrik", en: "Electrical", tr: "Elektrik" },
      website: "https://www.se.com/",
      description: "Enerji idarəetmə və avtomatlaşdırma."
    },
    {
      id: 8,
      name: "3M",
      logo: "/partners-logo/3m.png",
      category: { az: "Sənaye Təhlükəsizliyi", en: "Industrial Safety", tr: "İş Güvenliği" },
      website: "https://www.3m.com/",
      description: "Innovativ sənaye həlləri."
    },
    {
      id: 9,
      name: "Jotun",
      logo: "/partners-logo/jotun.jpg",
      category: { az: "Boya", en: "Paints", tr: "Boya" },
      website: "https://www.jotun.com/",
      description: "Norveç boya brendi."
    },
    {
      id: 10,
      name: "Atlas Copco",
      logo: "/partners-logo/atlas.png",
      category: { az: "Kompressorlar", en: "Compressors", tr: "Kompresörler" },
      website: "https://www.atlascopco.com/",
      description: "Sənaye kompressorları və vakuum sistemləri."
    },
    {
      id: 11,
      name: "Netlift",
      logo: "/partners-logo/Netlift logo.png",
      category: { az: "Anbar Texnikası", en: "Warehouse Equipment", tr: "Depo Ekipmanları" },
      website: "https://www.netlift.com.tr/",
      description: "Yükgötürmə sistemləri."
    },
    {
      id: 12,
      name: "DeWalt",
      logo: "/partners-logo/dewalt.jpg",
      category: { az: "Tikinti Alətləri", en: "Construction Tools", tr: "İnşaat Aletleri" },
      website: "https://www.dewalt.com/",
      description: "Peşəkar tikinti alətləri."
    },
    {
      id: 13,
      name: "Lincoln Electric",
      logo: "/partners-logo/Lincoln logo.png",
      category: { az: "Qaynaq", en: "Welding", tr: "Kaynak" },
      website: "https://www.lincolnelectric.com/",
      description: "Qaynaq avadanlıqları istehsalçısı."
    }
  ];

  const filteredPartners = partners.filter((partner) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      partner.name.toLowerCase().includes(searchLower) ||
      partner.category[locale].toLowerCase().includes(searchLower)
    );
  });

  const handlePartnerClick = (website: string) => {
    if (typeof window !== "undefined") {
      window.open(website, "_blank", "noopener,noreferrer");
    }
  };

  const translations = {
    searchPlaceholder: { az: "Tərəfdaş axtarın...", en: "Search for a partner...", tr: "İş ortağı arayın..." },
    noResults: { az: "Hiçbir tərəfdaş tapılmadı", en: "No partner found", tr: "Herhangi bir iş ortağı bulunamadı" },
    tryAgain: { az: "Lütfən axtarış meyarlarını dəyişib yenidən yoxlayyn.", en: "Please change your search criteria and try again.", tr: "Lütfen arama kriterlerinizi değiştirip tekrar deneyin." }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Search Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={translations.searchPlaceholder[locale]}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-gray-700 focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all duration-200 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              onClick={() => handlePartnerClick(partner.website)}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-[#ffe500]/50"
            >
              {/* Logo Box - Ölçülər və UI kəskinlik üçün tənzimləndi */}
              <div className="flex items-center justify-center mb-6 bg-gray-50 rounded-xl w-full h-40 group-hover:bg-white transition-colors duration-300 px-4">
                <div className="relative w-full h-24 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    // Kəskinlik üçün `object-contain` və max-height/width istifadəsi
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback: Əgər link qırılarsa, ui-avatars istifadə et
                      (e.target as HTMLImageElement).onerror = null; // Sonsuz dövrün qarşısını al
                      (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&size=128`;
                    }}
                  />
                </div>
              </div>

              {/* Partner Info */}
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {partner.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase tracking-wider font-bold rounded-lg group-hover:bg-yellow-100 group-hover:text-yellow-800 transition-colors">
                    {partner.category[locale]}
                  </span>
                  <div className="p-2 bg-gray-50 rounded-full group-hover:bg-[#ffe500] transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {translations.noResults[locale]}
            </h3>
            <p className="text-gray-500">
              {translations.tryAgain[locale]}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
