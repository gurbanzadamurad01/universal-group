"use client";

import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";
import { ByLanguage } from "@/types";

interface Client {
  id: number;
  title: ByLanguage;
  category: ByLanguage;
  company: ByLanguage;
  status: ByLanguage;
  image: string;
}

const ClientsSection = ({ locale }: { locale: "az" | "en" | "tr" }) => {
  // Client data
  const clients: Client[] = [
    // --- NEFT VƏ QAZ (SOCAR Qrupu) ---
    {
      id: 1,
      title: { az: "Azneft İB", en: "Azneft PU", tr: "Azneft İB" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: {
        az: "Azərbaycan Respublikası Dövlət Neft Şirkətinin “Azneft” İstehsalat Birliyi",
        en: "Azneft Production Union of SOCAR",
        tr: "SOCAR 'Azneft' Üretim Birliği"
      },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/azneft.png",
    },
    {
      id: 2,
      title: { az: "Neftqaztikinti", en: "OilGasConstruction", tr: "PetrolGazİnşaat" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: {
        az: "SOCAR “Neftqaztikinti” Tresti",
        en: "SOCAR 'Neftqaztikinti' Trust",
        tr: "SOCAR 'Neftqaztikinti' Tröstü"
      },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/NQT.png",
    },
    {
      id: 3,
      title: { az: "Azəriqaz İB", en: "Azerigaz PU", tr: "Azerigaz İB" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: { az: "SOCAR “Azəriqaz” İstehsalat Birliyi", en: "SOCAR 'Azerigaz' Production Union", tr: "SOCAR 'Azerigaz' Üretim Birliği" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/azeriqaz_logo.jpg",
    },
    {
      id: 4,
      title: { az: "Azərkimya İB", en: "Azerikimya PU", tr: "Azerikimya İB" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: { az: "SOCAR “Azərkimya” İstehsalat Birliyi", en: "SOCAR 'Azerikimya' Production Union", tr: "SOCAR 'Azerikimya' Üretim Birliği" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/azerikimya.jpg",
    },
    {
      id: 5,
      title: { az: "SOCAR Petroleum", en: "SOCAR Petroleum", tr: "SOCAR Petroleum" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: { az: "SOCAR Petroleum QSC", en: "SOCAR Petroleum CJSC", tr: "SOCAR Petroleum QSC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/SOCAR_Logo.jpg",
    },
    {
      id: 6,
      title: { az: "SOCAR Cape", en: "SOCAR Cape", tr: "SOCAR Cape" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: { az: "“SOCAR Cape” MMC", en: "SOCAR Cape LLC", tr: "SOCAR Cape MMC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/SOCAR_Logo.jpg",
    },
    {
      id: 7,
      title: { az: "Qaz İxrac İdarəsi", en: "Gas Export Department", tr: "Gaz İhracat Dairesi" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: { az: "SOCAR Qaz İxrac İdarəsi", en: "SOCAR Gas Export Department", tr: "SOCAR Gaz İhracat Dairesi" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/SOCAR_Logo.jpg",
    },
    {
      id: 8,
      title: { az: "Azfen BM", en: "Azfen JV", tr: "Azfen OG" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: { az: "“Azfen” Birgə Müəssisəsi", en: "Azfen Joint Venture", tr: "Azfen Ortak Girişimi" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/azfen.png",
    },
    {
      id: 9,
      title: { az: "BOS Shelf", en: "BOS Shelf", tr: "BOS Shelf" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: { az: "“BOS Shelf” MMC", en: "BOS Shelf LLC", tr: "BOS Shelf MMC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/shelf.jpg",
    },
    {
      id: 10,
      title: { az: "CDC", en: "CDC", tr: "CDC" },
      category: { az: "Neft və Qaz", en: "Oil and Gas", tr: "Petrol ve Gaz" },
      company: { az: "“Caspian Drilling Company Limited” MMC", en: "Caspian Drilling Company Limited LLC", tr: "Caspian Drilling Company Limited MMC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/Caspian Drilling LTD.png",
    },

    // --- NƏQLİYYAT VƏ RABİTƏ ---
    {
      id: 11,
      title: { az: "Dəmir Yolları", en: "Railway", tr: "Demir Yolları" },
      category: { az: "Nəqliyyat", en: "Transport", tr: "Ulaşım" },
      company: { az: "Azərbaycan Dəmir Yolları QSC", en: "Azerbaijan Railways CJSC", tr: "Azerbaycan Demir Yolları QSC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/ady.png",
    },
    {
      id: 12,
      title: { az: "Bakı Metropoliteni", en: "Baku Metro", tr: "Bakü Metrosu" },
      category: { az: "Nəqliyyat", en: "Transport", tr: "Ulaşım" },
      company: { az: "Bakı Metropoliteni QSC", en: "Baku Metro CJSC", tr: "Bakü Metrosu QSC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/metro.jpg",
    },
    {
      id: 13,
      title: { az: "AZAL", en: "AZAL", tr: "AZAL" },
      category: { az: "Nəqliyyat", en: "Transport", tr: "Ulaşım" },
      company: { az: "Azərbaycan Hava Yolları QSC", en: "Azerbaijan Airlines CJSC", tr: "Azerbaycan Hava Yolları QSC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/azal.png",
    },
    {
      id: 14,
      title: { az: "ASCO", en: "ASCO", tr: "ASCO" },
      category: { az: "Nəqliyyat", en: "Transport", tr: "Ulaşım" },
      company: { az: "Azərbaycan Xəzər Dəniz Gəmiçiliyi QSC", en: "Azerbaijan Caspian Shipping CJSC", tr: "Azerbaycan Hazar Denizi Nakliyatı QSC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/asco.png",
    },
    {
      id: 15,
      title: { az: "Azercell", en: "Azercell", tr: "Azercell" },
      category: { az: "Rabitə", en: "Telecommunications", tr: "Haberleşme" },
      company: { az: "“Azercell Telekom” MMC", en: "Azercell Telecom LLC", tr: "Azercell Telekom MMC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/azercell.png",
    },

    // --- DÖVLƏT QURUMLARI ---
    {
      id: 16,
      title: { az: "DSX", en: "SBS", tr: "DSX" },
      category: { az: "Dövlət Qurumları", en: "Government Agencies", tr: "Devlet Kurumları" },
      company: { az: "Azərbaycan Respublikası Dövlət Sərhəd Xidməti", en: "State Border Service of Azerbaijan", tr: "Azerbaycan Devlet Sınır Hizmeti" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/dsx.png",
    },
    {
      id: 17,
      title: { az: "Müdafiə Nazirliyi", en: "Ministry of Defense", tr: "Savunma Bakanlığı" },
      category: { az: "Dövlət Qurumları", en: "Government Agencies", tr: "Devlet Kurumları" },
      company: { az: "Azərbaycan Respublikası Müdafiə Nazirliyi", en: "Ministry of Defense of Azerbaijan", tr: "Azerbaycan Savunma Bakanlığı" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/Müdafiə Nazirliyi.png",
    },
    {
      id: 18,
      title: { az: "FHN Təchizat", en: "MES Supply", tr: "FHN Tedarik" },
      category: { az: "Dövlət Qurumları", en: "Government Agencies", tr: "Devlet Kurumları" },
      company: { az: "Fövqəladə Hallar Nazirliyinin Maddi-Texniki Təchizat İdarəsi", en: "Material-Technical Supply Department of MES", tr: "Acil Durumlar Bakanlığı Tedarik Dairesi" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/fhn.png",
    },
    {
      id: 19,
      title: { az: "Məhkəmə Ekspertizası", en: "Forensic Center", tr: "Adli Tıp" },
      category: { az: "Dövlət Qurumları", en: "Government Agencies", tr: "Devlet Kurumları" },
      company: { az: "Ədliyyə Nazirliyinin Məhkəmə Ekspertizası Mərkəzi", en: "Forensic Examination Center of Justice Ministry", tr: "Adalet Bakanlığı Adli Tıp Merkezi" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/mem.png",
    },

    // --- SU VƏ ENERJİ ---
    {
      id: 20,
      title: { az: "Azərişıq", en: "Azerishiq", tr: "Azerishiq" },
      category: { az: "Energetika", en: "Energy", tr: "Enerji" },
      company: { az: "“Azərişıq” ASC", en: "Azerishiq OJSC", tr: "Azerishiq ASC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/Azərİşıq.png",
    },
    {
      id: 21,
      title: { az: "Su Ehtiyatları Agentliyi", en: "Water Resources Agency", tr: "Su Kaynakları Ajansı" },
      category: { az: "Kommunal", en: "Utilities", tr: "Kamu Hizmetleri" },
      company: { az: "Azərbaycan Dövlət Su Ehtiyatları Agentliyi", en: "Azerbaijan State Water Resources Agency", tr: "Azerbaycan Devlet Su Kaynakları Ajansı" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/su-agentliyi.png",
    },
    {
      id: 22,
      title: { az: "Birləşmiş Su Təchizatı", en: "United Water Supply", tr: "Birleşik Su Tedariki" },
      category: { az: "Kommunal", en: "Utilities", tr: "Kamu Hizmetleri" },
      company: { az: "İri Şəhərlərin Birləşmiş Su Təchizatı Xidməti PHŞ", en: "United Water Supply Service for Major Cities", tr: "Büyük Şehirlerin Birleşik Su Tedarik Hizmeti" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/su-agentliyi.png",
    },

    // --- PAŞA QRUPU (Özəl Layihələr) ---
    {
      id: 23,
      title: { az: "PMD Projects", en: "PMD Projects", tr: "PMD Projects" },
      category: { az: "Özəl Sektor", en: "Private Sector", tr: "Özel Sektör" },
      company: { az: "“PMD Projects” MMC", en: "PMD Projects LLC", tr: "PMD Projects MMC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/pmd.jpg",
    },
    {
      id: 24,
      title: { az: "Pasha Real Estate", en: "Pasha Real Estate", tr: "Pasha Real Estate" },
      category: { az: "Özəl Sektor", en: "Private Sector", tr: "Özel Sektör" },
      company: { az: "“Pasha Real Estate” MMC", en: "Pasha Real Estate LLC", tr: "Pasha Real Estate MMC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/pasha.png",
    },
    {
      id: 25,
      title: { az: "PASHA Property", en: "PASHA Property", tr: "PASHA Property" },
      category: { az: "Özəl Sektor", en: "Private Sector", tr: "Özel Sektör" },
      company: { az: "“PASHA Property Management” MMC", en: "PASHA Property Management LLC", tr: "PASHA Property Management MMC" },
      status: { az: "Əsas Müştəri", en: "Main Customer", tr: "Ana Müşteri" },
      image: "/clients-logo/pasha.png",
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <Image
                  src={client.image}
                  alt={client.title[locale]}
                  width={200}
                  height={200}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {client.title[locale]}
                </h3>

                {/* Category */}
                <span className="inline-block px-3 py-1 bg-[#ffe500]/10 text-gray-700 text-sm font-medium rounded-full mb-3">
                  {client.category[locale]}
                </span>

                {/* Company */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {client.company[locale]}
                </p>

                {/* Status */}
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 text-[#ffe500] fill-current" />
                  <span className="text-sm font-medium text-gray-700">
                    {client.status[locale]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
