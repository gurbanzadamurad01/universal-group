"use client";

import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Briefcase,
  CheckCircle,
  Star,
  Send,
  X,
  Share2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { ByLanguage, ByLanguageMassiv } from "@/types";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  mission: string;
  aboutYou: string;
}

interface Vacation {
  id: number;
  title: ByLanguage;
  category: ByLanguage;
  location: ByLanguage;
  state: ByLanguage;
  description: ByLanguage;
  offers: ByLanguageMassiv;
  advantages: ByLanguageMassiv;
}

const VacationsSection = ({ locale }: { locale: "az" | "en" | "tr" }) => {
  const t = useTranslations("openModal");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVacationTitle, setSelectedVacationTitle] = useState("");
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    mission: "",
    aboutYou: "",
  });

  // Sample vacation data
  const vacations: Vacation[] = [
    {
      id: 1,
      title: {
        az: "Frontend Developer",
        en: "Frontend Developer",
        tr: "Ön Uç Geliştiricisi",
      },
      category: {
        az: "İT",
        en: "IT",
        tr: "BT",
      },
      location: {
        az: "Bakı",
        en: "Baku",
        tr: "Bakü",
      },
      state: {
        az: "Tam ştat",
        en: "Full-time",
        tr: "Tam zamanlı",
      },
      description: {
        az: "Müasir web texnologiyalarından istifadə edərək istifadəçi interfeyslərinin hazırlanması və inkişaf etdirilməsi.",
        en: "Development and improvement of user interfaces using modern web technologies.",
        tr: "Modern web teknolojilerini kullanarak kullanıcı arayüzlerinin geliştirilmesi ve iyileştirilmesi.",
      },
      offers: {
        az: [
          "Yüksək təhsil",
          "React/Vue.js bilikləri",
          "JavaScript/TypeScript təcrübəsi",
          "3+ il iş təcrübəsi",
        ],
        en: [
          "Higher education",
          "React/Vue.js knowledge",
          "JavaScript/TypeScript experience",
          "3+ years of work experience",
        ],
        tr: [
          "Yüksek öğrenim",
          "React/Vue.js bilgisi",
          "JavaScript/TypeScript tecrübesi",
          "3+ yıl iş tecrübesi",
        ],
      },
      advantages: {
        az: [
          "Rəqabətli maaş",
          "Sağlamlıq sığortası",
          "Peşəkar inkişaf imkanları",
          "Çevik iş qrafiki",
        ],
        en: [
          "Competitive salary",
          "Health insurance",
          "Professional development opportunities",
          "Flexible work schedule",
        ],
        tr: [
          "Rekabetçi maaş",
          "Sağlık sigortası",
          "Profesyonel gelişim fırsatları",
          "Esnek çalışma saatleri",
        ],
      },
    },
    {
      id: 2,
      title: {
        az: "Satış Meneceri",
        en: "Sales Manager",
        tr: "Satış Müdürü",
      },
      category: {
        az: "Satış",
        en: "Sales",
        tr: "Satış",
      },
      location: {
        az: "Bakı",
        en: "Baku",
        tr: "Bakü",
      },
      state: {
        az: "Tam ştat",
        en: "Full-time",
        tr: "Tam zamanlı",
      },
      description: {
        az: "Müştəri münasibətlərinin idarə edilməsi, satış strategiyalarının həyata keçirilməsi və yeni müştərilərin cəlb edilməsi.",
        en: "Management of customer relations, implementation of sales strategies, and attraction of new customers.",
        tr: "Müşteri ilişkilerinin yönetilmesi, satış stratejilerinin uygulanması ve yeni müşterilerin çekilmesi.",
      },
      offers: {
        az: [
          "Yüksək təhsil",
          "İngilis dili bilikləri",
          "Satış təcrübəsi",
          "Ünsiyyət bacarıqları",
        ],
        en: [
          "Higher education",
          "English language skills",
          "Sales experience",
          "Communication skills",
        ],
        tr: [
          "Yüksek öğrenim",
          "İngilizce bilgisi",
          "Satış tecrübesi",
          "İletişim becerileri",
        ],
      },
      advantages: {
        az: [
          "Yüksək komissiya",
          "Sağlamlıq sığortası",
          "Karyera inkişafı",
          "Bonus sistemi",
        ],
        en: [
          "High commission",
          "Health insurance",
          "Career development",
          "Bonus system",
        ],
        tr: [
          "Yüksek komisyon",
          "Sağlık sigortası",
          "Kariyer gelişimi",
          "Bonus sistemi",
        ],
      },
    },
    {
      id: 3,
      title: {
        az: "Marketinq Mütəxəssisi",
        en: "Marketing Specialist",
        tr: "Pazarlama Uzmanı",
      },
      category: {
        az: "Marketinq",
        en: "Marketing",
        tr: "Pazarlama",
      },
      location: {
        az: "Bakı",
        en: "Baku",
        tr: "Bakü",
      },
      state: {
        az: "Yarım ştat",
        en: "Part-time",
        tr: "Yarı zamanlı",
      },
      description: {
        az: "Rəqəmsal marketinq kampaniyalarının planlaşdırılması və həyata keçirilməsi, sosial media idarəetməsi.",
        en: "Planning and implementation of digital marketing campaigns, social media management.",
        tr: "Dijital pazarlama kampanyalarının planlanması ve uygulanması, sosyal medya yönetimi.",
      },
      offers: {
        az: [
          "Yüksək təhsil",
          "Rəqəmsal marketinq bilikləri",
          "SMM təcrübəsi",
          "Kreativ düşüncə",
        ],
        en: [
          "Higher education",
          "Digital marketing skills",
          "SMM experience",
          "Creative thinking",
        ],
        tr: [
          "Yüksek öğrenim",
          "Dijital pazarlama bilgisi",
          "SMM tecrübesi",
          "Yaratıcı düşünce",
        ],
      },
      advantages: {
        az: [
          "Çevik iş saatları",
          "Uzaqdan iş imkanı",
          "Yaradıcı mühit",
          "Peşəkar inkişaf",
        ],
        en: [
          "Flexible working hours",
          "Remote work opportunity",
          "Creative environment",
          "Professional development",
        ],
        tr: [
          "Esnek çalışma saatleri",
          "Uzaktan çalışma imkanı",
          "Yaratıcı ortam",
          "Profesyonel gelişim",
        ],
      },
    },
    {
      id: 4,
      title: {
        az: "İnsan Resursları Mütəxəssisi",
        en: "Human Resources Specialist",
        tr: "İnsan Kaynakları Uzmanı",
      },
      category: {
        az: "İR",
        en: "HR",
        tr: "İK",
      },
      location: {
        az: "Bakı",
        en: "Baku",
        tr: "Bakü",
      },
      state: {
        az: "Tam ştat",
        en: "Full-time",
        tr: "Tam zamanlı",
      },
      description: {
        az: "Kadr siyasətinin formalaşdırılması, işçi seçimi proseslərinin idarə edilməsi və təlim proqramlarının təşkili.",
        en: "Formulation of personnel policy, management of employee selection processes, and organization of training programs.",
        tr: "Personel politikasının oluşturulması, işe alım süreçlerinin yönetilmesi ve eğitim programlarının düzenlenmesi.",
      },
      offers: {
        az: [
          "Yüksək təhsil",
          "İR sahəsində təcrübə",
          "İngilis dili bilikləri",
          "Psixologiya bilikləri",
        ],
        en: [
          "Higher education",
          "Experience in HR field",
          "English language skills",
          "Psychology knowledge",
        ],
        tr: [
          "Yüksek öğrenim",
          "İK alanında tecrübe",
          "İngilizce bilgisi",
          "Psikoloji bilgisi",
        ],
      },
      advantages: {
        az: [
          "Rəqabətli maaş",
          "Sağlamlıq sığortası",
          "Təlim imkanları",
          "Karyera inkişafı",
        ],
        en: [
          "Competitive salary",
          "Health insurance",
          "Training opportunities",
          "Career development",
        ],
        tr: [
          "Rekabetçi maaş",
          "Sağlık sigortası",
          "Eğitim fırsatları",
          "Kariyer gelişimi",
        ],
      },
    },
    {
      id: 5,
      title: {
        az: "Logistika Koordinatoru",
        en: "Logistics Coordinator",
        tr: "Lojistik Koordinatörü",
      },
      category: {
        az: "Logistika",
        en: "Logistics",
        tr: "Lojistik",
      },
      location: {
        az: "Sumqayıt",
        en: "Sumgayit",
        tr: "Sumgayıt",
      },
      state: {
        az: "Tam ştat",
        en: "Full-time",
        tr: "Tam zamanlı",
      },
      description: {
        az: "Təchizat zəncirinin idarə edilməsi, anbar proseslərinin koordinasiyası və nəqliyyat planlaşdırması.",
        en: "Management of the supply chain, coordination of warehouse processes, and transportation planning.",
        tr: "Tedarik zincirinin yönetimi, depo süreçlerinin koordinasyonu ve nakliye planlaması.",
      },
      offers: {
        az: [
          "Orta təhsil",
          "Logistika təcrübəsi",
          "Kompüter bilikləri",
          "Sürücülük vəsiqəsi",
        ],
        en: [
          "Secondary education",
          "Logistics experience",
          "Computer skills",
          "Driver's license",
        ],
        tr: [
          "Orta öğrenim",
          "Lojistik tecrübesi",
          "Bilgisayar becerileri",
          "Sürücü belgesi",
        ],
      },
      advantages: {
        az: [
          "Sabit maaş",
          "Nəqliyyat kompensasiyası",
          "Sığorta",
          "Əlavə ödənişlər",
        ],
        en: [
          "Stable salary",
          "Transportation compensation",
          "Insurance",
          "Additional payments",
        ],
        tr: ["Sabit maaş", "Ulaşım tazminatı", "Sigorta", "Ek ödemeler"],
      },
    },
  ];

  const dateText = {
    offer: {
      az: "Tələblər",
      en: "Requirements",
      tr: "Talepler",
    },
    advantages: {
      az: "Təkliflər",
      en: "Advantages",
      tr: "Teklifler",
    },
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApplyClick = (vacationTitle: string) => {
    setSelectedVacationTitle(vacationTitle);
    setFormData((prev) => ({
      ...prev,
      mission: vacationTitle,
    }));
    setIsModalOpen(true);
  };

  const handleShare = () => {
    console.log("Form submitted:", formData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      mission: "",
      aboutYou: "",
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="vacations-section" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#040404" }}
            >
              {t("sectionTitle")}
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              {t("sectionDescription")}
            </p>
          </div>

          {/* Vacations Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            {vacations.map((vacation) => (
              <div
                key={vacation.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                {/* Vacation Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {vacation.title[locale]}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    <Briefcase className="w-4 h-4" />
                    {vacation.category[locale]}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    <MapPin className="w-4 h-4" />
                    {vacation.location[locale]}
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffe500] text-black text-sm font-medium rounded-full">
                    <Clock className="w-4 h-4" />
                    {vacation.state[locale]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {vacation.description[locale]}
                </p>

                {/* Offers */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {dateText.offer[locale]}
                  </h4>
                  <ul className="space-y-2">
                    {vacation.offers[locale].map((offer, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {offer}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Advantages */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {dateText.advantages[locale]}
                  </h4>
                  <ul className="space-y-2">
                    {vacation.advantages[locale].map((advantage, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <Star className="w-4 h-4 text-[#ffe500] flex-shrink-0" />
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <div className="mt-6">
                  <button
                    onClick={() => handleApplyClick(vacation.title[locale])}
                    className="flex items-center justify-center gap-2 bg-[#ffe500] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e6cf00] transition-all duration-300 hover:scale-105 w-full"
                  >
                    <Send className="w-5 h-5" />
                    {t("applyButton")}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Vacations Message */}
          {vacations.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Briefcase className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {t("noVacancies")}
              </h3>
              <p className="text-gray-600">{t("noVacanciesDescription")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 animate-modal-enter">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">
                {t("modalTitle", { position: selectedVacationTitle })}
              </h3>
              <button
                onClick={handleCancel}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("fullName")}
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#4d4d4d] focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all placeholder:text-black"
                  placeholder={t("fullNamePlaceholder")}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#4d4d4d] focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all placeholder:text-black"
                  placeholder={t("emailPlaceholder")}
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-[#4d4d4d] focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all placeholder:text-black"
                  placeholder={t("phonePlaceholder")}
                  required
                />
              </div>

              {/* Mission */}
              <div>
                <label
                  htmlFor="mission"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("mission")}
                </label>
                <input
                  type="text"
                  id="mission"
                  name="mission"
                  value={formData.mission}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-[#4d4d4d] focus:ring-[#ffe500] focus:border-transparent outline-none transition-all placeholder:text-black"
                  placeholder={t("missionPlaceholder")}
                  required
                  readOnly
                />
              </div>

              {/* More About You */}
              <div>
                <label
                  htmlFor="aboutYou"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("aboutYou")}
                </label>
                <textarea
                  id="aboutYou"
                  name="aboutYou"
                  value={formData.aboutYou}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full text-[#4d4d4d] px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffe500] focus:border-transparent outline-none transition-all resize-none placeholder:text-black"
                  placeholder={t("aboutYouPlaceholder")}
                  required
                />
              </div>
            </form>

            {/* Modal Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-gray-200">
              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-[#ffe500] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e6cf00] transition-all duration-300 flex-1"
              >
                <Share2 className="w-5 h-5" />
                {t("shareButton")}
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex-1"
              >
                <X className="w-5 h-5" />
                {t("cancelButton")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VacationsSection;
