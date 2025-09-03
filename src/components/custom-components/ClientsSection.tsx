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
    {
      id: 1,
      title: {
        az: "Qaz İxracı İdarəsi",
        en: "Gas Export Department",
        tr: "Gaz İhracat Dairesi",
      },
      category: {
        az: "Neft və Qaz",
        en: "Oil and Gas",
        tr: "Petrol ve Gaz",
      },
      company: {
        az: "Az. DNS (SOCAR) Qaz ixraci idaresi",
        en: "Az. DNS (SOCAR) Gas Export Department",
        tr: "Az. DNS (SOCAR) Gaz İhracat Dairesi",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Socar Azneft İB.png",
    },
    {
      id: 2,
      title: {
        az: "Caspian Drilling LTD",
        en: "Caspian Drilling LTD",
        tr: "Caspian Drilling LTD",
      },
      category: {
        az: "Neft və Qaz",
        en: "Oil and Gas",
        tr: "Petrol ve Gaz",
      },
      company: {
        az: "Azərbaycan Dövlət Neft Şirkəti (SOCAR)",
        en: "State Oil Company of Azerbaijan Republic (SOCAR)",
        tr: "Azerbaycan Cumhuriyeti Devlet Petrol Şirketi (SOCAR)",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Caspian Drilling LTD.png",
    },
    {
      id: 3,
      title: {
        az: "Hava Yolları Xidmətləri",
        en: "Airline Services",
        tr: "Hava Yolları Hizmetleri",
      },
      category: {
        az: "Nəqliyyat",
        en: "Transport",
        tr: "Hava Yolları",
      },
      company: {
        az: "Azerbaycan Hava Yollari QSC",
        en: "Azerbaijan Airlines QSC",
        tr: "Azerbaycan Hava Yolları QSC",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Azal.png",
    },
    {
      id: 4,
      title: {
        az: "MEM",
        en: "MEM",
        tr: "MEM",
      },
      category: {
        az: "Dövlət Qurumları",
        en: "Government Agencies",
        tr: "Dövlet Kurumları",
      },
      company: {
        az: "Məhkəmə ekspertizası mərkəzi",
        en: "Forensic Examination Center",
        tr: "Adli Tıp Kurumu",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Məhkəmə ekspertiza.png",
    },
    {
      id: 5,
      title: {
        az: "NQT",
        en: "NQT",
        tr: "NQT",
      },
      category: {
        az: "Neft və Qaz",
        en: "Oil and Gas",
        tr: "Petrol ve Gaz",
      },
      company: {
        az: "NEFTQAZTİKİNTİ Tresti (SOCAR NQT)",
        en: "NEFTQAZTİKİNTİ Tresti (SOCAR NQT)",
        tr: "NEFTQAZTİKİNTİ Tresti (SOCAR NQT)",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/NQT.png",
    },
    {
      id: 6,
      title: {
        az: "Dövlət Sərhəd Xidməti",
        en: "State Border Service",
        tr: "Devlet Sınır Hizmeti",
      },
      category: {
        az: "Dövlət Qurumları",
        en: "Government Agencies",
        tr: "Dövlet Kurumları",
      },
      company: {
        az: "Azerbaycan Respublikasi Dovlet Serhed Xidmeti",
        en: "Azerbaijan State Border Service",
        tr: "Azerbaycan Devlet Sınır Hizmeti",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/DSX.png",
    },
    {
      id: 7,
      title: {
        az: "Müdafiə Nazirliyi",
        en: "Ministry of Defence",
        tr: "Savunma Bakanlığı",
      },
      category: {
        az: "Dövlət Qurumları",
        en: "Government Agencies",
        tr: "Dövlet Kurumları",
      },
      company: {
        az: "Azerbaycan Respublikasi Mudafie NAzirliyi",
        en: "Ministry of Defence of the Republic of Azerbaijan",
        tr: "Azerbaycan Cumhuriyeti Savunma Bakanlığı",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Müdafiə Nazirliyi.png",
    },
    {
      id: 8,
      title: {
        az: "Telekommunikasiya Xidmətləri",
        en: "Telecommunication Services",
        tr: "Telekomünikasyon Hizmetleri",
      },
      category: {
        az: "Rabitə",
        en: "Telecommunications",
        tr: "Haberleşme",
      },
      company: {
        az: "Azercell Telekom MMC",
        en: "Azercell Telekom MMC",
        tr: "Azercell Telekom MMC",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Azercell.png",
    },
    {
      id: 9,
      title: {
        az: "Elektrik Enerjisi",
        en: "Electrical Energy",
        tr: "Elektrik Enerjisi",
      },
      category: {
        az: "Energetika",
        en: "Energy",
        tr: "Enerji",
      },
      company: {
        az: "Azerisiq ASC",
        en: "Azerisiq ASC",
        tr: "Azerisiq ASC",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Azərİşıq.png",
    },
    {
      id: 10,
      title: {
        az: "Su Təchizatı Xidməti",
        en: "Water Supply Services",
        tr: "Su Tedarik Hizmeti",
      },
      category: {
        az: "Kommunal Xidmətlər",
        en: "Utility Services",
        tr: "Kamu Hizmetleri",
      },
      company: {
        az: "AzərSu ASC / İri şəhərlərin birləşmiş su təchizatı xidməti Publik hüquqi şəxsi",
        en: "AzerSu JSC / United water supply service for major cities, Public legal entity",
        tr: "AzərSu A.Ş. / Büyük şehirlerin birleşik su tedarik hizmeti, Kamu tüzel kişiliği",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/AzərSu.png",
    },
    {
      id: 11,
      title: {
        az: "Fövqəladə Hallar Nazirliyi",
        en: "Ministry of Emergency Situations",
        tr: "Acil Durumlar Bakanlığı",
      },
      category: {
        az: "Dövlət Qurumları",
        en: "Government Agencies",
        tr: "Devlet Kurumları",
      },
      company: {
        az: "Azərbaycan Respublikası Fövqəladə Hallar Nazlirliyinin Maddi Texniki-təchizat İdarəsi",
        en: "Material and Technical Supply Department of the Ministry of Emergency Situations of the Republic of Azerbaijan",
        tr: "Azerbaycan Cumhuriyeti Acil Durumlar Bakanlığı Maddi ve Teknik Tedarik Dairesi",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/FHN.png",
    },
    {
      id: 12,
      title: {
        az: "AZFEN Birgə Müəssisəsi",
        en: "AZFEN Joint Venture",
        tr: "AZFEN Ortak Girişimi",
      },
      category: {
        az: "Neft və Qaz",
        en: "Oil and Gas",
        tr: "Petrol ve Gaz",
      },
      company: {
        az: "AZFEN BİRGƏ MÜƏSSİSƏSİ",
        en: "AZFEN JOINT VENTURE",
        tr: "AZFEN ORTAK GİRİŞİMİ",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Azfen.png",
    },
    {
      id: 13,
      title: {
        az: "Bakı Dövlət Universiteti",
        en: "Baku State University",
        tr: "Bakü Devlet Üniversitesi",
      },
      category: {
        az: "Təhsil",
        en: "Education",
        tr: "Eğitim",
      },
      company: {
        az: "Baki Dovlet Universiteti Publik Huquqi Shexsi",
        en: "Baku State University Public Legal Entity",
        tr: "Bakü Devlet Üniversitesi Kamu Tüzel Kişiliği",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/BDU.png",
    },
    {
      id: 14,
      title: {
        az: "ASCO",
        en: "ASCO",
        tr: "ASCO",
      },
      category: {
        az: "Gəmiçilik",
        en: "Shipping",
        tr: "Denizcilik",
      },
      company: {
        az: "Azərbaycan Xəzər Dəniz Gəmiçiliyi",
        en: "Azerbaijan Caspian Shipping Company",
        tr: "Azerbaycan Hazar Denizi Nakliyatı",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/ASCO.png",
    },
    {
      id: 15,
      title: {
        az: "AMST",
        en: "AMST",
        tr: "AMST",
      },
      category: {
        az: "Dövlət Qurumları",
        en: "Government Agencies",
        tr: "Devlet Kurumları",
      },
      company: {
        az: "Azərbaycan Meliorasiya və Su Təsərrüfatı Açıq Səhmdar Cəmiyyəti",
        en: "Azerbaijan Amelioration and Water Management Open Joint Stock Company",
        tr: "Azerbaycan Islah ve Su İşletmeleri Anonim Şirketi",
      },
      status: {
        az: "Əsas Müştəri",
        en: "Main Customer",
        tr: "Ana Müşteri",
      },
      image: "/clients-logo/Meliorasiya.png",
    },
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
