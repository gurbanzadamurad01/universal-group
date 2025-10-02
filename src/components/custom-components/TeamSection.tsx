"use client";

import React, { useState } from "react";
import { Clock, Briefcase, Users } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: {
    az: string;
    en: string;
    tr: string;
  };
  position: {
    az: string;
    en: string;
    tr: string;
  };
  department: {
    az: string;
    en: string;
    tr: string;
  };
  sides: {
    az: string[];
    en: string[];
    tr: string[];
  };
  workingTime: {
    az: string;
    en: string;
    tr: string;
  };
  description: {
    az: string;
    en: string;
    tr: string;
  };
  image: string;
}

const TeamSection = ({ locale }: { locale: "az" | "en" | "tr" }) => {
  const departments = {
    az: [
      "Hamısı",
      "İdarəetmə",
      "Satış və Marketinq",
      "Texniki Dəstək",
      "Logistika",
      "Maliyyə",
      "İnsan Resursları",
    ],
    en: [
      "All",
      "Management",
      "Sales & Marketing",
      "Technical Support",
      "Logistics",
      "Finance",
      "Human Resources",
    ],
    tr: [
      "Hepsi",
      "Yönetim",
      "Satış ve Pazarlama",
      "Teknik Destek",
      "Lojistik",
      "Finans",
      "İnsan Kaynakları",
    ],
  };

  const [selectedDepartment, setSelectedDepartment] = useState(departments[locale][0]);

  // Sample team member data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: {
        az: "Əli Məmmədov",
        en: "Ali Mammadov",
        tr: "Ali Memmedov",
      },
      position: {
        az: "Baş Direktor",
        en: "CEO",
        tr: "Genel Müdür",
      },
      department: {
        az: "İdarəetmə",
        en: "Management",
        tr: "Yönetim",
      },
      sides: {
        az: ["Strateji Planlaşdırma", "Biznes İnkişafı"],
        en: ["Strategic Planning", "Business Development"],
        tr: ["Stratejik Planlama", "İş Geliştirme"],
      },
      workingTime: {
        az: "09:00 - 18:00",
        en: "09:00 - 18:00",
        tr: "09:00 - 18:00",
      },
      description: {
        az: "25 ildən artıq idarəetmə təcrübəsi olan peşəkar. Şirkətin strateji inkişafında aparıcı rol oynayır və komandanı uğura aparır.",
        en: "A professional with over 25 years of management experience. He plays a leading role in the company's strategic development and leads the team to success.",
        tr: "25 yılı aşkın yönetim tecrübesi olan bir profesyonel. Şirketin stratejik gelişiminde lider bir rol oynar ve ekibi başarıya taşır.",
      },
      image: "https://picsum.photos/400/500?random=21",
    },
    {
      id: 2,
      name: {
        az: "Leyla Həsənova",
        en: "Leyla Hasanova",
        tr: "Leyla Hasanova",
      },
      position: {
        az: "Satış Meneceri",
        en: "Sales Manager",
        tr: "Satış Müdürü",
      },
      department: {
        az: "Satış və Marketinq",
        en: "Sales and Marketing",
        tr: "Satış ve Pazarlama",
      },
      sides: {
        az: ["Müştəri Münasibətləri", "Satış Strategiyası"],
        en: ["Customer Relations", "Sales Strategy"],
        tr: ["Müşteri İlişkileri", "Satış Stratejisi"],
      },
      workingTime: {
        az: "09:00 - 18:00",
        en: "09:00 - 18:00",
        tr: "09:00 - 18:00",
      },
      description: {
        az: "Müştəri münasibətləri sahəsində 10 illik təcrübə. Yeni müştərilərin cəlb edilməsi və mövcud müştərilərlə münasibətlərin inkişafında mütəxəssis.",
        en: "10 years of experience in customer relations. A specialist in attracting new customers and developing relationships with existing ones.",
        tr: "Müşteri ilişkileri alanında 10 yıllık tecrübe. Yeni müşterileri çekme ve mevcut müşterilerle ilişkileri geliştirme konusunda uzmandır.",
      },
      image: "https://picsum.photos/400/500?random=22",
    },
    {
      id: 3,
      name: {
        az: "Rəşad Quliyev",
        en: "Rashad Guliyev",
        tr: "Reşat Guliyev",
      },
      position: {
        az: "Baş Mühəndis",
        en: "Chief Engineer",
        tr: "Baş Mühendis",
      },
      department: {
        az: "Texniki Dəstək",
        en: "Technical Support",
        tr: "Teknik Destek",
      },
      sides: {
        az: ["Sistem Analizi", "Texniki Həllər"],
        en: ["System Analysis", "Technical Solutions"],
        tr: ["Sistem Analizi", "Teknik Çözümler"],
      },
      workingTime: {
        az: "08:00 - 17:00",
        en: "08:00 - 17:00",
        tr: "08:00 - 17:00",
      },
      description: {
        az: "Mühəndislik sahəsində 15 illik təcrübə. Mürəkkəb texniki problemlərin həllində və innovativ həllərin işlənib hazırlanmasında ekspert.",
        en: "15 years of experience in engineering. An expert in solving complex technical problems and developing innovative solutions.",
        tr: "Mühendislik alanında 15 yıllık tecrübe. Karmaşık teknik sorunları çözme ve yenilikçi çözümler geliştirme konusunda uzmandır.",
      },
      image: "https://picsum.photos/400/500?random=23",
    },
    {
      id: 4,
      name: {
        az: "Səbinə Əliyeva",
        en: "Sabina Aliyeva",
        tr: "Sabina Aliyeva",
      },
      position: {
        az: "Logistika Meneceri",
        en: "Logistics Manager",
        tr: "Lojistik Müdürü",
      },
      department: {
        az: "Logistika",
        en: "Logistics",
        tr: "Lojistik",
      },
      sides: {
        az: ["Təchizat Zənciri", "Anbar İdarəetməsi"],
        en: ["Supply Chain", "Warehouse Management"],
        tr: ["Tedarik Zinciri", "Depo Yönetimi"],
      },
      workingTime: {
        az: "08:30 - 17:30",
        en: "08:30 - 17:30",
        tr: "08:30 - 17:30",
      },
      description: {
        az: "Logistika və təchizat sahəsində 8 illik təcrübə. Səmərəli təchizat zəncirinin qurulması və anbar proseslərinin optimallaşdırılmasında mütəxəssis.",
        en: "8 years of experience in logistics and supply. A specialist in establishing an efficient supply chain and optimizing warehouse processes.",
        tr: "Lojistik ve tedarik alanında 8 yıllık tecrübe. Etkili bir tedarik zinciri kurma ve depo süreçlerini optimize etme konusunda uzmandır.",
      },
      image: "https://picsum.photos/400/500?random=24",
    },
    {
      id: 5,
      name: {
        az: "Elçin Bayramov",
        en: "Elchin Bayramov",
        tr: "Elçin Bayramov",
      },
      position: {
        az: "Maliyyə Direktoru",
        en: "Financial Director",
        tr: "Finans Direktörü",
      },
      department: {
        az: "Maliyyə",
        en: "Finance",
        tr: "Finans",
      },
      sides: {
        az: ["Büdcə Planlaşdırması", "Maliyyə Analizi"],
        en: ["Budget Planning", "Financial Analysis"],
        tr: ["Bütçe Planlaması", "Finansal Analiz"],
      },
      workingTime: {
        az: "09:00 - 18:00",
        en: "09:00 - 18:00",
        tr: "09:00 - 18:00",
      },
      description: {
        az: "Maliyyə sahəsində 12 illik təcrübə. Şirkətin maliyyə strategiyasının hazırlanması və büdcə idarəetməsində peşəkar.",
        en: "12 years of experience in finance. A professional in preparing the company's financial strategy and managing its budget.",
        tr: "Finans alanında 12 yıllık tecrübe. Şirketin finansal stratejisinin hazırlanması ve bütçe yönetiminde profesyoneldir.",
      },
      image: "https://picsum.photos/400/500?random=25",
    },
    {
      id: 6,
      name: {
        az: "Günel Məhərrəmova",
        en: "Gunel Maharramova",
        tr: "Günel Maherremova",
      },
      position: {
        az: "İR Meneceri",
        en: "HR Manager",
        tr: "İK Müdürü",
      },
      department: {
        az: "İnsan Resursları",
        en: "Human Resources",
        tr: "İnsan Kaynakları",
      },
      sides: {
        az: ["Kadr Seçimi", "Təlim və İnkişaf"],
        en: ["Recruitment", "Training and Development"],
        tr: ["Personel Seçimi", "Eğitim ve Gelişim"],
      },
      workingTime: {
        az: "09:00 - 18:00",
        en: "09:00 - 18:00",
        tr: "09:00 - 18:00",
      },
      description: {
        az: "İnsan resursları sahəsində 7 illik təcrübə. Kadr siyasətinin formalaşdırılması və işçilərin peşəkar inkişafında mütəxəssis.",
        en: "7 years of experience in human resources. A specialist in forming personnel policy and professional development of employees.",
        tr: "İnsan kaynakları alanında 7 yıllık tecrübe. Personel politikasını oluşturma ve çalışanların mesleki gelişiminde uzmandır.",
      },
      image: "https://picsum.photos/400/500?random=26",
    },
    {
      id: 7,
      name: {
        az: "Tural Əsgərov",
        en: "Tural Asgarov",
        tr: "Tural Askerov",
      },
      position: {
        az: "Marketinq Mütəxəssisi",
        en: "Marketing Specialist",
        tr: "Pazarlama Uzmanı",
      },
      department: {
        az: "Satış və Marketinq",
        en: "Sales and Marketing",
        tr: "Satış ve Pazarlama",
      },
      sides: {
        az: ["Rəqəmsal Marketinq", "Brend İdarəetməsi"],
        en: ["Digital Marketing", "Brand Management"],
        tr: ["Dijital Pazarlama", "Marka Yönetimi"],
      },
      workingTime: {
        az: "10:00 - 19:00",
        en: "10:00 - 19:00",
        tr: "10:00 - 19:00",
      },
      description: {
        az: "Rəqəmsal marketinq sahəsində 6 illik təcrübə. Sosial media strategiyaları və onlayn kampaniyaların idarə edilməsində ekspert.",
        en: "6 years of experience in digital marketing. An expert in managing social media strategies and online campaigns.",
        tr: "Dijital pazarlama alanında 6 yıllık tecrübe. Sosyal medya stratejileri ve çevrimiçi kampanyaların yönetiminde uzmandır.",
      },
      image: "https://picsum.photos/400/500?random=27",
    },
    {
      id: 8,
      name: {
        az: "Nigar Həmidova",
        en: "Nigar Hamidova",
        tr: "Nigar Hamidova",
      },
      position: {
        az: "Sistem Administratoru",
        en: "System Administrator",
        tr: "Sistem Yöneticisi",
      },
      department: {
        az: "Texniki Dəstək",
        en: "Technical Support",
        tr: "Teknik Destek",
      },
      sides: {
        az: ["Şəbəkə İdarəetməsi", "Təhlükəsizlik"],
        en: ["Network Management", "Security"],
        tr: ["Ağ Yönetimi", "Güvenlik"],
      },
      workingTime: {
        az: "08:00 - 17:00",
        en: "08:00 - 17:00",
        tr: "08:00 - 17:00",
      },
      description: {
        az: "İT sahəsində 9 illik təcrübə. Şəbəkə infrastrukturunun idarə edilməsi və informasiya təhlükəsizliyinin təmin edilməsində mütəxəssis.",
        en: "9 years of experience in the IT field. A specialist in managing network infrastructure and ensuring information security.",
        tr: "BT alanında 9 yıllık tecrübe. Ağ altyapısını yönetme ve bilgi güvenliğini sağlama konusunda uzmandır.",
      },
      image: "https://picsum.photos/400/500?random=28",
    },
  ];

  const time = {
    az: "İş vaxtı",
    en: "Working time",
    tr: "Çalışma saati",
  };

  const texts = {
    areasOfExpertise: {
      az: "İxtisas sahələri",
      en: "Areas of Expertise",
      tr: "Uzmanlık Alanları",
    },
    noTeamMembersFound: {
      az: "Heç bir komanda üzvü tapılmadı",
      en: "No team member was found",
      tr: "Hiçbir ekip üyesi bulunamadı",
    },
    noMemberInDepartment: {
      az: "Seçilmiş departamentdə komanda üzvü mövcud deyil.",
      en: "No team member exists in the selected department.",
      tr: "Seçilen departmanda ekip üyesi bulunmamaktadır.",
    },
    result: {
      az: "Komanda üzvü tapıldı",
      en: "Team member found",
      tr: "Ekip üyesi bulundu",
    },
  };

  const filteredMembers =
    selectedDepartment === departments[locale][0]
      ? teamMembers
      : teamMembers.filter(
          (member) => member.department[locale] === selectedDepartment
        );

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        {/* Filter Buttons */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {departments[locale].map((department) => (
              <button
                key={department}
                onClick={() => setSelectedDepartment(department)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDepartment === department
                    ? "bg-[#ffe500] text-black"
                    : "bg-transparent text-gray-600 hover:bg-[#ffe500]/20 border border-[#4d4d4d] cursor-pointer"
                }`}
              >
                {department}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center text-gray-600">
            <span className="text-sm">
              {filteredMembers.length} {texts.result[locale]}
            </span>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-transparent rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name[locale]}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                {/* Name and Position */}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name[locale]}
                </h3>
                <p className="text-[#ffe500] font-medium mb-4">
                  {member.position[locale]}
                </p>

                {/* Sides with icon */}
                <div className="mb-4">
                  <div className="flex items-start gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-[#4d4d4d] mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-medium text-gray-700 block mb-1">
                        {texts.areasOfExpertise[locale]}:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {member.sides[locale].map((side, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 bg-[#ffe500]/10 text-gray-700 text-xs rounded-full"
                          >
                            {side}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Time */}
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    {time[locale]}: {member.workingTime[locale]}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Users className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {texts.noTeamMembersFound[locale]}
            </h3>
            <p className="text-gray-600">
              {texts.noMemberInDepartment[locale]}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
