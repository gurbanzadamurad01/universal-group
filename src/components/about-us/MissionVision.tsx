'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/custom-components/AnimatedSection';
import TagComponent from '@/components/custom-components/TagComponent';
import {
  Award,
  Globe,
  Users,
  TrendingUp,
  Target,
  Leaf,
  Cpu,
  Shield,
  Lightbulb,
  Heart,
} from 'lucide-react';

const missions = [
  {
    icon: Award,
    title: "Keyfiyyət və Etibarlılıq",
    description:
      "Ən yüksək keyfiyyət standartlarına uyğun məhsul və xidmətlər təqdim edərək, müştərilərimizin etimadını qazanırıq.",
  },
  {
    icon: Globe,
    title: "Beynəlxalq Standartlar",
    description:
      "Dünya səviyyəsində tanınan beynəlxalq standartlara uyğunluq və sertifikatlaşma proseslərini tətbiq edirik.",
  },
  {
    icon: Users,
    title: "Müştəri Məmnuniyyəti",
    description:
      "Müştərilərimizin ehtiyaclarını anlamaq və onların gözləntilərini üstələmək bizim əsas prioritetimizdir.",
  },
];

const goals = [
  {
    icon: TrendingUp,
    title: "Bazar Lideri",
    description: "Azərbaycan bazarında aparıcı texhizat şirkəti olmaq",
    year: "2025",
  },
  {
    icon: Target,
    title: "Genişlənmə",
    description: "Regional bazarlarda fəaliyyətin genişləndirilməsi",
    year: "2026",
  },
  {
    icon: Leaf,
    title: "Davamlılıq",
    description: "Ekoloji cəhətdən davamlı biznes modeli",
    year: "2027",
  },
  {
    icon: Cpu,
    title: "Texnologiya",
    description: "Rəqəmsal transformasiya və avtomatlaşdırma",
    year: "2025",
  },
];

const values = [
  {
    icon: Shield,
    title: "Etibarlılıq",
    description:
      "Hər bir layihədə verdiyimiz sözə sadiq qalır, tərəfdaşlarımız üçün daima güvənilən təchizatçı oluruq.",
  },
  {
    icon: Lightbulb,
    title: "Keyfiyyət",
    description:
      "Məhsul seçimindən çatdırılma mərhələsinədək — hər detalda yüksək standartlara əməl edirik.",
  },
  {
    icon: Users,
    title: "İnsan Kapitalı",
    description:
      "Əməkdaşlarımıza öz işlərini həvəslə icra etmələri, yeniliklərə imza atmaları və həm şəxsi, həm də peşəkar səviyyədə inkişafa nail olmaları üçün hər zaman dəstək oluruq.",
  },
  {
    icon: Award,
    title: "Peşəkarlıq",
    description:
      "Komandamız texniki bilik və sənaye təcrübəsini birləşdirərək müştərilərimizə həll yönümlü xidmət təqdim edir.",
  },
  {
    icon: Award,
    title: "Şəffaflıq",
    description:
      "Tədarük prosesini açıq və izlənəbilən formada təşkil edirik — hər addımda hesabatlılıq bizim üçün vacibdir.",
  },
];

const MissionVision = () => {
  const t = useTranslations('company');

  return (
    <div>
      {/* Mission Section */}
      <AnimatedSection
        id="mission-section"
        className="py-20 bg-gradient-to-br from-black via-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TagComponent
              text="Our Mission"
              icon={Target}
              className="text-[#ffe500] bg-[#ffe500]"
            />

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-pulse">
              {t('missions.sectionTitle')}
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              {t('missions.sectionDescription')}
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => {
              const IconComponent = mission.icon;
              return (
                <div
                  key={index}
                  className="text-center px-6 py-10 rounded-lg bg-gradient-to-b from-black to-black border border-gray-700 hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                >
                  {/* Circle Tag with Icon */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto animate-bounce"
                      style={{ backgroundColor: "#ffe500" }}
                    >
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {t(`missions.title${index + 1}`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm">
                    {t(`missions.description${index + 1}`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Goals Section */}
      <AnimatedSection id="goals-section" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TagComponent
              text="Our Goals"
              icon={Target}
              className="text-[#ffe500] bg-[#ffe500]"
            />

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('goals.sectionTitle')}
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('goals.sectionDescription')}
            </p>
          </div>

          {/* Goal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <div
                  key={index}
                  className="relative p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 shadow-sm"
                  style={{
                    borderLeft: `4px solid #ffe500`,
                  }}
                >
                  {/* Icon and Title Row */}
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#ffe500" }}
                    >
                      <IconComponent className="h-6 w-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {t(`goals.title${index + 1}`)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t(`goals.description${index + 1}`)}
                      </p>
                    </div>
                  </div>

                  {/* Goal Stat */}
                  <div className="mt-4">
                    <div
                      className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium text-black"
                      style={{ backgroundColor: "#ffe500" }}
                    >
                      <Target className="h-4 w-4 mr-2" />
                      Hədəf: {goal.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection id="values-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TagComponent
              text="Our Values"
              icon={Heart}
              className="text-[#ffe500] bg-[#ffe500]"
            />

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('values.sectionTitle')}
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('values.sectionDescription')}
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center p-6">
                  {/* Icon Tag */}
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#ffe500" }}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`values.title${index + 1}`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {t(`values.description${index + 1}`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default MissionVision;