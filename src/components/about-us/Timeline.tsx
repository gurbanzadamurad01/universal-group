'use client';

import { useTranslations } from 'next-intl';
import AnimatedSection from '@/components/custom-components/AnimatedSection';
import TagComponent from '@/components/custom-components/TagComponent';
import { Clock, Award, Building, Globe, Users, TrendingUp } from 'lucide-react';

const timelineEvents = [
  {
    year: '1998',
    title: 'Şirkətin Təsisi',
    description: 'Universal Group şirkəti Azərbaycanda təsis edildi və ilk addımlarını atdı.',
    icon: Building,
    color: '#ffe500',
  },
  {
    year: '2005',
    title: 'Beynəlxalq Genişlənmə',
    description: 'İlk beynəlxalq tərəfdaşlıqlar quruldu və xarici bazarlara çıxış həyata keçirildi.',
    icon: Globe,
    color: '#ff6b35',
  },
  {
    year: '2010',
    title: 'Texnoloji İnnovasiya',
    description: 'Müasir texnologiyalar və rəqəmsal həllər şirkət fəaliyyətinə inteqrasiya edildi.',
    icon: TrendingUp,
    color: '#4ecdc4',
  },
  {
    year: '2015',
    title: 'Komanda Genişlənməsi',
    description: '500+ əməkdaş sayına çatdıq və peşəkar komandamızı genişləndirdik.',
    icon: Users,
    color: '#45b7d1',
  },
  {
    year: '2020',
    title: 'Keyfiyyət Sertifikatları',
    description: 'ISO standartları və beynəlxalq keyfiyyət sertifikatları əldə edildi.',
    icon: Award,
    color: '#f39c12',
  },
  {
    year: '2024',
    title: 'Rəqəmsal Transformasiya',
    description: 'Tam rəqəmsal transformasiya tamamlandı və yeni texnoloji həllər tətbiq edildi.',
    icon: TrendingUp,
    color: '#e74c3c',
  },
];

const Timeline = () => {
  const t = useTranslations('company.timeline');

  return (
    <AnimatedSection id="timeline-section" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TagComponent
            text="Our Journey"
            icon={Clock}
            className="text-[#ffe500] bg-[#ffe500]"
          />

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('sectionTitle')}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('sectionDescription')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ffe500] to-gray-300 rounded-full"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const IconComponent = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
                      style={{ backgroundColor: event.color }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Event Card */}
                  <div
                    className={`w-5/12 ${
                      isEven ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      {/* Year Badge */}
                      <div
                        className={`inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4`}
                        style={{ backgroundColor: event.color }}
                      >
                        {event.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {t(`events.${index + 1}.title`)}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {t(`events.${index + 1}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-to-r from-[#ffe500] to-[#ffcc00] rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                25+
              </div>
              <div className="text-black/80 font-medium">
                {t('stats.experience')}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                1200+
              </div>
              <div className="text-black/80 font-medium">
                {t('stats.suppliers')}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                500+
              </div>
              <div className="text-black/80 font-medium">
                {t('stats.employees')}
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                100+
              </div>
              <div className="text-black/80 font-medium">
                {t('stats.projects')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Timeline;