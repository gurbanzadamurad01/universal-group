"use client";

import React from "react";
import { Star, Award, TrendingUp, Zap, Target } from "lucide-react";

interface TopProject {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  year: string;
  status: string;
  highlight: string;
}

const TopProjectsSection = () => {
  const topProjects: TopProject[] = [
    {
      id: 1,
      name: "Petkim",
      description: "Türkiyənin ən böyük petrokimya kompleksi layihəsi",
      icon: <Star className="w-8 h-8" />,
      year: "2019-2022",
      status: "Tamamlanmış",
      highlight: "$2.5B Dəyər"
    },
    {
      id: 2,
      name: "Star Project",
      description: "Türkiyə-Azərbaycan enerji əməkdaşlığı layihəsi",
      icon: <Award className="w-8 h-8" />,
      year: "2020-2023",
      status: "Tamamlanmış",
      highlight: "Strateji Əhəmiyyət"
    },
    {
      id: 3,
      name: "Azeri Central East",
      description: "Xəzər dənizində neft hasilatı platforması kompleksi",
      icon: <TrendingUp className="w-8 h-8" />,
      year: "2018-2024",
      status: "Davam edir",
      highlight: "ACG Sahəsi"
    },
    {
      id: 4,
      name: "HAOR",
      description: "Heydər Əliyev Oil Refinery modernizasiya layihəsi",
      icon: <Zap className="w-8 h-8" />,
      year: "2021-2025",
      status: "Davam edir",
      highlight: "Modernizasiya"
    },
    {
      id: 5,
      name: "Shahdeniz 2",
      description: "Təbii qaz hasilatı və ixrac infrastrukturu",
      icon: <Target className="w-8 h-8" />,
      year: "2019-2023",
      status: "Tamamlanmış",
      highlight: "TAP Boru Kəməri"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: "#ffe500" }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full" style={{ backgroundColor: "#040404" }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full" style={{ backgroundColor: "#ffe500" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(255, 229, 0, 0.1)", border: "1px solid #ffe500" }}>
            <Star className="w-5 h-5" style={{ color: "#ffe500" }} />
            <span className="text-sm font-semibold" style={{ color: "#040404" }}>Ən Böyük Layihələrimiz</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#040404" }}>
            Top 5 <span style={{ color: "#ffe500" }}>Layihələrimiz</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            25 illik təcrübəmiz ərzində həyata keçirdiyimiz ən böyük və strateji əhəmiyyətli layihələr. 
            Bu layihələr bizim peşəkarlığımızın və beynəlxalq səviyyədə fəaliyyət göstərmə qabiliyyətimizin ən yaxşı nümunələridir.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {topProjects.map((project, index) => {
            const isCenter = index === 2;
            const cardStyles = [
              // Card 1: Glassmorphism with neon glow
              {
                background: "linear-gradient(135deg, rgba(255, 229, 0, 0.9) 0%, rgba(255, 237, 78, 0.8) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 229, 0, 0.3)",
                boxShadow: "0 25px 50px -12px rgba(255, 229, 0, 0.4), 0 0 0 1px rgba(255, 229, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              },
              // Card 2: Dark with electric blue accents
              {
                background: "linear-gradient(135deg, #040404 0%, #1a1a1a 50%, #0f172a 100%)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)"
              },
              // Card 3: Center - Holographic effect
              {
                background: "linear-gradient(45deg, #ffe500 0%, #ff6b6b 25%, #4ecdc4 50%, #45b7d1 75%, #ffe500 100%)",
                backgroundSize: "400% 400%",
                animation: "gradient 8s ease infinite",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 30px 60px -12px rgba(255, 229, 0, 0.5), 0 0 40px rgba(255, 107, 107, 0.3)"
              },
              // Card 4: Cyberpunk style
              {
                background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
                border: "1px solid rgba(0, 255, 255, 0.4)",
                boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.3), inset 0 1px 0 rgba(0, 255, 255, 0.1)"
              },
              // Card 5: Warm gradient with gold accents
              {
                background: "linear-gradient(135deg, #ff9a56 0%, #ff6b6b 50%, #feca57 100%)",
                border: "1px solid rgba(255, 215, 0, 0.4)",
                boxShadow: "0 25px 50px -12px rgba(255, 154, 86, 0.4), 0 0 30px rgba(255, 215, 0, 0.2)"
              }
            ];

            return (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-110 hover:-translate-y-4 cursor-pointer ${
                  isCenter ? 'lg:col-span-1 lg:row-span-1 lg:scale-110' : ''
                }`}
                style={{
                  ...cardStyles[index],
                  minHeight: isCenter ? "400px" : "350px",
                  transform: isCenter ? "perspective(1000px) rotateY(-5deg)" : "none"
                }}
              >
                {/* Animated Background Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full opacity-30 animate-pulse"
                      style={{
                        backgroundColor: index % 2 === 0 ? "#040404" : "#ffe500",
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                      }}
                    />
                  ))}
                </div>

                {/* Floating Geometric Shapes */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div 
                    className="absolute top-6 right-6 w-16 h-16 border-2 rotate-45 transition-transform duration-700 group-hover:rotate-90"
                    style={{ borderColor: index % 2 === 0 ? "#040404" : "#fff" }}
                  />
                  <div 
                    className="absolute bottom-6 left-6 w-12 h-12 rounded-full border transition-transform duration-700 group-hover:scale-150"
                    style={{ borderColor: index % 2 === 0 ? "#040404" : "#fff" }}
                  />
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-dashed rounded-full transition-transform duration-1000 group-hover:rotate-180"
                    style={{ borderColor: index % 2 === 0 ? "#040404" : "#fff" }}
                  />
                </div>

                {/* Holographic Overlay for Center Card */}
                {isCenter && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                )}

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-2xl"
                        style={{
                          background: index === 2 
                            ? "linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 229, 0, 0.8))"
                            : index % 2 === 0 
                              ? "rgba(4, 4, 4, 0.15)" 
                              : "rgba(255, 229, 0, 0.25)",
                          color: index === 2 ? "#040404" : index % 2 === 0 ? "#040404" : "#ffe500",
                          backdropFilter: "blur(10px)",
                          border: index === 2 ? "2px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        {project.icon}
                      </div>
                      
                      <div className="text-right">
                        <div 
                          className="text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: index === 2
                              ? "linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 229, 0, 0.8))"
                              : index % 2 === 0 
                                ? "rgba(4, 4, 4, 0.15)" 
                                : "rgba(255, 229, 0, 0.25)",
                            color: index === 2 ? "#040404" : index % 2 === 0 ? "#040404" : "#ffe500",
                            border: "1px solid rgba(255, 255, 255, 0.2)"
                          }}
                        >
                          {project.status}
                        </div>
                      </div>
                    </div>

                    <h3 
                      className="text-xl font-bold mb-3 transition-all duration-500 group-hover:scale-105 group-hover:text-shadow-lg"
                      style={{ 
                        color: index === 2 ? "#fff" : index % 2 === 0 ? "#040404" : "#fff",
                        textShadow: isCenter ? "0 0 20px rgba(255, 255, 255, 0.5)" : "none"
                      }}
                    >
                      {project.name}
                    </h3>
                    
                    <p 
                      className="text-sm leading-relaxed mb-4 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: index === 2 ? "rgba(255, 255, 255, 0.9)" : index % 2 === 0 ? "#040404" : "#fff" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm"
                        style={{ 
                          color: index === 2 ? "rgba(255, 255, 255, 0.9)" : index % 2 === 0 ? "rgba(4, 4, 4, 0.8)" : "rgba(255, 255, 255, 0.8)",
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.2)"
                        }}
                      >
                        {project.year}
                      </span>
                      <span 
                        className="text-sm font-bold px-3 py-1 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                        style={{
                          background: index === 2
                            ? "linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 229, 0, 0.8))"
                            : index % 2 === 0 
                              ? "rgba(4, 4, 4, 0.15)" 
                              : "rgba(255, 229, 0, 0.25)",
                          color: index === 2 ? "#040404" : index % 2 === 0 ? "#040404" : "#ffe500",
                          border: "1px solid rgba(255, 255, 255, 0.2)"
                        }}
                      >
                        {project.highlight}
                      </span>
                    </div>
                    
                    {/* Interactive CTA Button */}
                    <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <button 
                        className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-sm"
                        style={{
                          background: index === 2
                            ? "linear-gradient(45deg, rgba(255, 255, 255, 0.9), rgba(255, 229, 0, 0.8))"
                            : index % 2 === 0 
                              ? "rgba(4, 4, 4, 0.9)" 
                              : "rgba(255, 229, 0, 0.9)",
                          color: index === 2 ? "#040404" : index % 2 === 0 ? "#ffe500" : "#040404",
                          border: "1px solid rgba(255, 255, 255, 0.3)"
                        }}
                      >
                        <span className="text-sm">Ətraflı</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 rounded-3xl animate-pulse"
                    style={{
                      background: `linear-gradient(45deg, transparent, ${index === 2 ? 'rgba(255, 255, 255, 0.3)' : index % 2 === 0 ? 'rgba(255, 229, 0, 0.3)' : 'rgba(59, 130, 246, 0.3)'}, transparent)`,
                      padding: "2px"
                    }}
                  />
                </div>

                {/* Floating Action Indicator */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                  <div 
                    className="w-3 h-3 rounded-full animate-ping"
                    style={{ backgroundColor: index % 2 === 0 ? "#ffe500" : "#00ffff" }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="#all-projects" className="inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer" style={{ backgroundColor: "#ffe500", color: "#040404" }}>
            <span className="font-semibold">Bütün layihələrimizi görün</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopProjectsSection;