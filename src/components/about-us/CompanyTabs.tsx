'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Target, Clock, Building } from 'lucide-react';
import MissionVision from './MissionVision';
import Timeline from './Timeline';
import AboutCompany from './AboutCompany';

type TabType = 'mission-vision' | 'timeline' | 'about-company';

interface Tab {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CompanyTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('mission-vision');
  const t = useTranslations('company.tabs');

  const tabs: Tab[] = [
    {
      id: 'mission-vision',
      label: t('missionVision'),
      icon: Target,
    },
    {
      id: 'timeline',
      label: t('timeline'),
      icon: Clock,
    },
    {
      id: 'about-company',
      label: t('aboutCompany'),
      icon: Building,
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'mission-vision':
        return <MissionVision />;
      case 'timeline':
        return <Timeline />;
      case 'about-company':
        return <AboutCompany />;
      default:
        return <MissionVision />;
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-xl inline-flex">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center flex-col lg:flex-row gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
                    ${
                      activeTab === tab.id
                        ? 'bg-[#ffe500] text-black shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }
                  `}
                >
                  <IconComponent className="h-5 w-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default CompanyTabs;