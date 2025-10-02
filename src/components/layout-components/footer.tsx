"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';
import Link from "next/link";

interface FooterProps {
  locale: string;
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const pathName = usePathname();
  const t = useTranslations('footer');
  if (pathName === `/${locale}`) return null;
  return (
    <footer className="w-full">
      {/* Main Footer */}
      <div
        style={{ backgroundColor: "rgb(77,77,77)" }}
        className="px-6 py-16 relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400/5 to-transparent rounded-full blur-lg"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="group">
                <Link
                  href={`/${locale}`}
                  className="flex items-center space-x-4"
                >
                  <img
                    src="/logo/universal-logo.png"
                    alt="Universal Group Logo"
                    className="h-12 w-auto"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-xl font-extrabold text-white leading-tight">
                      Universal Group
                    </h1>
                    <p className="text-sm text-[#ffe500] font-medium leading-tight">
                      {t('tagline')}
                    </p>
                  </div>
                </Link>
              </div>

              <p className="text-gray-300 text-base leading-relaxed">
                {t('description').split(t('experienceYears')).map((part, index) => (
                  <span key={index}>
                    {index === 0 && (
                      <span className="text-yellow-400 font-semibold">
                        {t('experienceYears')}
                      </span>
                    )}
                    {part}
                  </span>
                ))}
              </p>

              <div className="flex space-x-4">
                <div className="p-2 rounded-lg bg-gray-600/50 hover:bg-yellow-500 transition-all duration-300 cursor-pointer group">
                  <Facebook className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                </div>
                <div className="p-2 rounded-lg bg-gray-600/50 hover:bg-yellow-500 transition-all duration-300 cursor-pointer group">
                  <Instagram className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                </div>
                <div className="p-2 rounded-lg bg-gray-600/50 hover:bg-yellow-500 transition-all duration-300 cursor-pointer group">
                  <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                </div>
                <div className="p-2 rounded-lg bg-gray-600/50 hover:bg-yellow-500 transition-all duration-300 cursor-pointer group">
                  <Twitter className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors" />
                </div>
              </div>

              <div className="flex items-center space-x-2 text-yellow-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{t('location')}</span>
              </div>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-xl relative">
                {t('company')}
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  {
                    name: t('aboutUs'),
                    desc: t('aboutUsDesc'),
                    link: "company",
                  },
                  { name: t('team'), desc: t('teamDesc'), link: "team" },
                  {
                    name: t('careers'),
                    desc: t('careersDesc'),
                    link: "vacancy",
                  },
                  {
                    name: t('projects'),
                    desc: t('projectsDesc'),
                    link: "projects",
                  },
                  {
                    name: t('clients'),
                    desc: t('clientsDesc'),
                    link: "clients",
                  },
                ].map((item, index) => (
                  <li key={index} className="group">
                    <Link
                      href={`/${locale}/about-us/${item.link}`}
                      className="flex items-center justify-between text-gray-300 hover:text-yellow-400 transition-all duration-300 py-1"
                    >
                      <div>
                        <span className="text-base font-medium">
                          {item.name}
                        </span>
                        <p className="text-sm text-gray-500 group-hover:text-gray-400">
                          {item.desc}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-xl relative">
                {t('contact')}
                <div className="absolute -bottom-2 left-0 w-8 h-1 bg-yellow-500 rounded-full"></div>
              </h4>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+994 12 555-55-55", label: t('office') },
                  { icon: Phone, text: "+994 51 555-55-55", label: t('mobile') },
                  {
                    icon: Mail,
                    text: "info@universalgroup.az",
                    label: t('email'),
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-600/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-yellow-500/20 group-hover:bg-yellow-500 transition-all duration-300">
                      <item.icon className="w-4 h-4 text-yellow-400 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-white text-base font-medium transition-colors">
                        {item.text}
                      </p>
                      <p className="text-sm text-gray-500">{item.label}</p>
                    </div>
                  </div>
                ))}

                <div className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-600/30 transition-all duration-300">
                  <div className="p-2 rounded-lg bg-yellow-500/20 group-hover:bg-yellow-500 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-yellow-400 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                      {t('address')}
                    </p>
                    <p className="text-xs text-gray-500">{t('headquarters')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ backgroundColor: "rgb(0,0,0)" }} className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-gray-400 text-sm">
                {t('copyright')}
              </p>
            </div>
            <div className="flex space-x-8">
              {[t('privacyPolicy'), t('termsOfUse'), t('siteMap')].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 text-sm transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
