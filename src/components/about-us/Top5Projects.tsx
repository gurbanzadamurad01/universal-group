'use client';

import { useTranslations } from 'next-intl';
import { Calendar, MapPin, Users, Award } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  year: string;
  category: string;
  status: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Baku Crystal Hall",
    description: "Modern concert and conference venue with state-of-the-art facilities",
    image: "/images/projects/crystal-hall.jpg",
    location: "Baku, Azerbaijan",
    year: "2012",
    category: "Entertainment",
    status: "Completed"
  },
  {
    id: 2,
    title: "Flame Towers",
    description: "Iconic skyscrapers that define Baku's modern skyline",
    image: "/images/projects/flame-towers.jpg",
    location: "Baku, Azerbaijan",
    year: "2012",
    category: "Commercial",
    status: "Completed"
  },
  {
    id: 3,
    title: "Heydar Aliyev Center",
    description: "Architectural masterpiece designed by Zaha Hadid",
    image: "/images/projects/heydar-aliyev.jpg",
    location: "Baku, Azerbaijan",
    year: "2012",
    category: "Cultural",
    status: "Completed"
  },
  {
    id: 4,
    title: "Baku Olympic Stadium",
    description: "Multi-purpose stadium for international sporting events",
    image: "/images/projects/olympic-stadium.jpg",
    location: "Baku, Azerbaijan",
    year: "2015",
    category: "Sports",
    status: "Completed"
  },
  {
    id: 5,
    title: "Port Baku Towers",
    description: "Luxury residential and commercial complex",
    image: "/images/projects/port-baku.jpg",
    location: "Baku, Azerbaijan",
    year: "2014",
    category: "Residential",
    status: "Completed"
  }
];

export default function Top5Projects() {
  const t = useTranslations('top5Projects');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Award className="w-16 h-16 text-white/50" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.year}
                  </div>
                </div>

                {/* View Details Button */}
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  {t('viewDetails')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            {t('viewAllProjects')}
          </button>
        </div>
      </div>
    </section>
  );
}