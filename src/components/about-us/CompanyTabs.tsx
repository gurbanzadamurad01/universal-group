'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Target, Clock, Building } from 'lucide-react';
import MissionVision from './MissionVision';
import AboutCompany from './AboutCompany';

type TabType = 'mission-vision' | 'timeline' | 'about-company';

interface Tab {
  id: TabType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CompanyTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>('mission-vision');
  const [isSticky, setIsSticky] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('companyTabs');

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current && containerRef.current) {
        tabsRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        // Make tabs sticky when they reach the top of the viewport
        if (containerRect.top <= 0 && !isSticky) {
          setIsSticky(true);
        } else if (containerRect.top > 0 && isSticky) {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  const tabs: Tab[] = [
    {
      id: 'mission-vision',
      label: t('missionVision'),
      icon: Target,
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
      case 'about-company':
        return <AboutCompany />;
      default:
        return <MissionVision />;
    }
  };

  return (
    <div ref={containerRef} className="py-12 md:py-20 bg-gradient-to-b from-slate-50 via-white to-gray-50/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,229,0,0.03)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.02)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative">
        {/* Tab Navigation */}
        <div 
          ref={tabsRef}
          className={`
            flex justify-center mb-12 md:mb-16 transition-all duration-300
            ${isSticky 
              ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-lg py-4' 
              : ''
            }
          `}
        >
          <div className={`
            relative backdrop-blur-md p-1.5 md:p-2 rounded-2xl shadow-lg border max-w-full overflow-hidden w-auto xl:w-1/3
            ${isSticky 
              ? 'bg-transparent border-gray-200/30' 
              : 'bg-white/70 border-white/20'
            }
          `}>
            {/* Active tab indicator */}
            <div 
              className="absolute top-1.5 md:top-2 bottom-1.5 md:bottom-2 bg-gradient-to-r from-[#ffe500] via-[#ffed4a] to-[#f59e0b] rounded-xl transition-all duration-500 ease-out shadow-md"
              style={{
                left: `calc(${tabs.findIndex(tab => tab.id === activeTab) * (100 / tabs.length)}% + 0.375rem)`,
                width: `calc(${100 / tabs.length}% - 0.73rem)`,
              }}
            />
            
            <div className="relative flex">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      relative flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-xl font-medium md:font-semibold transition-all duration-500 cursor-pointer group flex-1 min-w-0
                      ${isActive 
                        ? 'text-white z-10 transform scale-[1.02]' 
                        : 'text-gray-600 hover:text-gray-900 hover:scale-[1.01]'
                      }
                    `}
                  >
                    {/* Icon with animation */}
                    <div className={`
                      p-1.5 md:p-2 rounded-lg transition-all duration-300 flex-shrink-0
                      ${isActive 
                        ? 'bg-white/20 text-white shadow-sm' 
                        : 'bg-gray-100/80 text-gray-600 group-hover:bg-[#ffe500]/20 group-hover:text-[#ffe500]'
                      }
                    `}>
                      <IconComponent className={`h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ${isActive ? 'rotate-12 scale-110' : 'group-hover:rotate-6'}`} />
                    </div>
                    
                    {/* Label */}
                    <span className="text-xs md:text-sm lg:text-base">
                      {tab.label}
                    </span>
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-md animate-pulse" />
                    )}
                    
                    {/* Hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#ffe500]/0 to-[#f59e0b]/0 group-hover:from-[#ffe500]/5 group-hover:to-[#f59e0b]/5 transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Placeholder to maintain layout when tabs are sticky */}
        {isSticky && <div className="h-20 mb-12 md:mb-16" />}

        {/* Tab Content with animation */}
        <div className="relative">
          <div 
            key={activeTab}
            className="min-h-[400px] md:min-h-[600px] animate-in fade-in-0 slide-in-from-bottom-4 duration-700"
          >
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTabs;