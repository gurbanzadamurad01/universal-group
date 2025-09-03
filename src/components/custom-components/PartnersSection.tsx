"use client";

import React, { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import Image from "next/image";

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

const PartnersSection = ({locale}: {locale: 'az' | 'en' | 'tr'}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample partner data
  const partners: Partner[] = [
    {
      id: 1,
      name: "Çağsan",
      logo: "https://www.cagsanmerdiven.com/resources/files/logo-cagsan.svg",
      category: {
        az: "Tikinti",
        en: "Construction",
        tr: "Yapım",
      },
      website: "https://www.cagsanmerdiven.com/",
      description:
        "Manufacturer of scaffolding systems and work safety solutions",
    },
    {
      id: 2,
      name: "Eaton",
      logo: "/partners-logo/Eaton logo (1).png",
      category:{
        az: "Elektrik",
        en: "Electrical",
        tr: "Elektrik",
      },
      website: "https://www.eaton.com/country.html",
      description:
        "Global provider of power management solutions and electrical systems",
    },
    {
      id: 3,
      name: "ESAB",
      logo: "/partners-logo/Esab logo.png",
      category: {
        az: "Aşındırıcı",
        en: "Cutting",
        tr: "Aşındırıcı",
      },
      website: "https://esab.com/az/eur_en/products-solutions/search/",
      description:
        "Worldwide leader in welding and cutting equipment and consumables",
    },
    {
      id: 4,
      name: "Isolatek International",
      logo: "/partners-logo/İsolatek logo.png",
      category: {
        az: "Tikinti",
        en: "Construction",
        tr: "Yapım",
      },  
      website: "https://www.isolatek.com/",
      description:
        "Producer of passive fireproofing and thermal insulation solutions",
    },
    {
      id: 5,
      name: "Lincoln Electric",
      logo: "/partners-logo/Lincoln logo.png",
      category: {
        az: "Elektrik",
        en: "Electrical",
        tr: "Elektrik",
      },
      website: "https://www.lincolnelectric.com/en/",
      description:
        "Global manufacturer of welding products and arc welding equipment",
    },
    {
      id: 6,
      name: "Magmaveld",
      logo: "/partners-logo/MAgmaveld logo.png",
      category: {
        az: "Elektrik",
        en: "Electrical",
        tr: "Elektrik",
      },
      website: "https://www.magmaweld.com/",
      description: "Manufacturer of advanced welding machines and consumables",
    },
    {
      id: 7,
      name: "Monarflex",
      logo: "/partners-logo/Monarflex logo.png",
      category: {
        az: "Tikinti",
        en: "Construction",
        tr: "Yapım",
      },
      website: "https://monarflex.com.au/",
      description:
        "Specialist in reinforced sheeting and environmental protection systems",
    },
    {
      id: 8,
      name: "Rockwool",
      logo: "/partners-logo/Mosa logo.png",
      category: {
        az: "Tikinti",
        en: "Construction",
        tr: "Yapım",
      },  
      website: "https://www.rockwool.com/group/",
      description:
        "Italian manufacturer of engine-driven welders and generating sets",
    },
    {
      id: 9,
      name: "Netlift",
      logo: "/partners-logo/Netlift logo.png",
      category: {
        az: "Təchizat",
        en: "Equipment",
        tr: "Techizat",
      },
      website: "https://en.netlift.com.tr/",
      description: "Supplier of lifting, handling, and warehouse equipment",
    },
    {
      id: 10,
      name: "XCMG",
      logo: "/partners-logo/Oxcmg logo.png",
      category: {
        az: "Tikinti",
        en: "Construction",
        tr: "Yapım",
      },
      website: "https://en.xcmg.com",
      description:
        "One of the world’s largest manufacturers of construction machinery",
    },
    {
      id: 11,
      name: "Trio generator",
      logo: "/partners-logo/Trio logo.png",
      category: {
        az: "Elektrik",
        en: "Electrical",
        tr: "Elektrik",
      },
      website: "https://www.triogenerator.com/",
      description:
        "Provider of innovative industrial and construction solutions",
    },

    {
      id: 12,
      name: "Bosch",
      logo: "/partners-logo/Bosch-Logo.png",
      category: {
        az: "Elektrik",
        en: "Electrical",
        tr: "Elektrik",
      },
      website: "https://www.bosch.com/",
      description:
        "Provider of innovative industrial and construction solutions",
    },
    {
      id: 13,
      name: "Siemens",
      logo: "/partners-logo/Siemens-Logo.png",
      category: {
        az: "Elektrik",
        en: "Electrical",
        tr: "Elektrik",
      },
      website: "https://www.siemens.com/",
      description:
        "Provider of innovative industrial and construction solutions",
    },  
  ];

  const filteredPartners = partners.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.category['en'].toLowerCase().includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const handlePartnerClick = (website: string) => {
    window.open(website, "_blank", "noopener,noreferrer");
  };

  const search = {
    "az":"Tərəfdaş axtarın...",
    "en":"Search for a partner...",
    "tr":"Tarafları ara...",
  }

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 w-5 h-5" />
              <input
                type="text"
                placeholder={`${search[locale]}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all duration-200 placeholder-[#040404]"
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
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-yellow-400"
            >
              {/* Logo */}
              <div className="flex items-center justify-center mb-4 rounded-lg overflow-hidden w-48 h-48">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={192}
                  height={192}
                  className="object-contain"
                />
              </div>

              {/* Partner Info */}
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
                  {partner.name}
                </h3>

                {/* Category Tag and Redirect Icon */}
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    {partner.category[locale]}
                  </span>
                  <div className="p-2 bg-gray-100 rounded-full group-hover:bg-[#ffe500] transition-all duration-200">
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {`${locale === 'en' ? 'No partner found' : locale === 'tr' ? 'Herhangi bir taraftar bulunamadı' : 'Hiçbir taraftar bulunamadı'}`}
            </h3>
            <p className="text-gray-600">
              {`${locale === 'en' ? 'Please change your search criteria and try again.' : locale === 'tr' ? 'Lütfen arama kriterlerinizi değiştirin ve tekrar deneyin.' : 'Lütfen arama kriterlerinizi değiştirin ve tekrar deneyin.'}`}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersSection;
