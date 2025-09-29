"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

import MotionContainer from "@/components/custom-components/MotionContainer";
import LanguageSelector from "../ui/language-selector";
// Create navigation items dynamically
const createNavItems = (t: any) => {
  return [
    { path: "/", label: t('home'), isLink: true },
    {
      path: "/about-us",
      label: t('about'),
      isLink: false,
      submenu: [
        {
          path: "/about-us/company",
          label: t('company'),
        },
        {
          path: "/about-us/projects",
          label: t('projects'),
        },
        {
          path: "/about-us/partners",
          label: t('partners'),
          submenu: [
            {
              path: "/about-us/partners/rockwool",
              label: "Rockwool",
            },
            {
              path: "/about-us/partners/merdiven",
              label: "Çağsan Merdiven",
            },
            {
              path: "/about-us/partners/netlift",
              label: "Netlift",
            },
            {
              path: "/about-us/partners/norton",
              label: "Norton saint-cobain",
            },
            {
              path: "/about-us/partners/jotun",
              label: "Jotun",
            },
            {
              path: "/about-us/partners/mosa",
              label: "Mosa",
            },
            {
              path: "/about-us/partners/magmaweld",
              label: "Magmaweld",
            },
            {
              path: "/about-us/partners/bosch",
              label: "Bosch",
            },
            {
              path: "/about-us/partners/lincoln",
              label: "Lincoln electric",
            },
            {
              path: "/about-us/partners/esab",
              label: "ESAB",
            },
            {
              path: "/about-us/partners/bosch",
              label: "Bosch invented for life",
            },
          ],
        },
        {
          path: "/about-us/clients",
          label: t('clients'),
        },
        // {
        //   path: "/about-us/team",
        //   label: t('team'),
        // },
        // {
        //   path: "/about-us/vacancy",
        //   label: t('vacations'),
        // },
      ],
    },
    { path: "/products", label: t('products'), isLink: true },
    { path: "/services", label: t('services'), isLink: true },
    { path: "/contact-us", label: t('contact'), isLink: true },
  ];
};

// Desktop Navigation Component
const DesktopNav = ({ 
  isActive,
  isScrolled,
  locale,
  navItems,
}: {
  isActive: (path: string) => boolean;
  isScrolled: boolean;
  isHomePage: boolean;
  locale: string;
  navItems: any[];
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <nav className="hidden lg:flex space-x-8">
      {navItems.map((item) => (
        <div
          key={item.path}
          className="relative group m-0 lg:mr-3"
          onMouseEnter={() => setHoveredItem(item.path)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {item.isLink ? (
            <Link
              href={`/${locale}${item.path === "/" ? "" : item.path}`}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1 ${
                isActive(item.path)
                  ? "bg-[#ffe500]/70 text-[#fff] shadow-lg"
                  : !isScrolled
                  ? "text-white hover:text-[#ffe500] hover:bg-white/20"
                  : "text-[#fff] hover:text-[#ffe500] hover:bg-[#ffe500]/10"
              }`}
            >
              {item.label}
              {item.submenu && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    hoveredItem === item.path ? "rotate-180" : ""
                  }`}
                />
              )}
            </Link>
          ) : (
            <p
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1 ${
                isActive(item.path)
                  ? "bg-[#ffe500]/70 text-[#fff] shadow-lg"
                  : !isScrolled
                  ? "text-white hover:text-[#ffe500] hover:bg-white/20"
                  : "text-[#fff] hover:text-[#ffe500] hover:bg-[#ffe500]/10"
              }`}
            >
              {item.label}
              {item.submenu && (
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    hoveredItem === item.path ? "rotate-180" : ""
                  }`}
                />
              )}
            </p>
          )}

          {/* Desktop Submenu */}
          {item.submenu && (
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                hoveredItem === item.path
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}
            >
              <div className="py-2">
                {item.submenu.map((subItem: { path: string; label: string }) => (
                  <Link
                    key={subItem.path}
                    href={`/${locale}${subItem.path}`}
                    className={`flex justify-between px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-[#ffe500]/2 hover:text-[#ffe500] border-l-4 border-transparent hover:border-[#ffe500] ${
                      isActive(subItem.path)
                        ? "bg-[#ffe500]/10 text-[#ffe500] border-[#ffe500]"
                        : "text-[#040404]"
                    }`}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

// Mobile Navigation Component
const MobileNav = ({
  isMenuOpen,
  setIsMenuOpen,
  isActive,
  locale,
  navItems,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isActive: (path: string) => boolean;
  locale: string;
  navItems: any[];
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleSubmenu = (path: string) => {
    setExpandedItems((prev) =>
      prev.includes(path)
        ? prev.filter((item) => item !== path)
        : [...prev, path]
    );
  };

  return (
    <>
      {isMenuOpen && (
        <MotionContainer>
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#fff] shadow-xl rounded-b-2xl animate-[fadeIn 0.6s ease-out] z-50 ">
            <nav className="flex flex-col py-4 max-h-96 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.path)}
                        className={`w-full px-6 py-3 text-left font-medium transition-all duration-300 flex items-center justify-between ${
                          isActive(item.path)
                            ? "bg-[#ffe500] text-[#fff] border-l-4 border-[#ffe500]"
                            : "text-[#040404] hover:text-[#ffe500] hover:bg-[#ffe500]/10"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            expandedItems.includes(item.path)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Submenu */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedItems.includes(item.path)
                            ? "max-h-64 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.submenu.map((subItem: { path: string; label: string }) => (
                          <Link
                            key={subItem.path}
                            href={`/${locale}/${subItem.path}`}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block pl-12 pr-6 py-2 text-sm font-medium transition-all duration-300 border-l-4 ${
                              isActive(subItem.path)
                                ? "bg-[#ffe500]/20 text-[#ffe500] border-[#ffe500]"
                                : "text-[#666] hover:text-[#ffe500] hover:bg-[#ffe500]/10 border-transparent hover:border-[#ffe500]"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={`/${locale}${item.path === "/" ? "" : item.path}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-6 py-3 text-left font-medium transition-all duration-300 ${
                        isActive(item.path)
                          ? "bg-[#ffe500] text-[#fff] border-l-4 border-[#ffe500]"
                          : "text-[#040404] hover:text-[#ffe500] hover:bg-[#ffe500]/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </MotionContainer>
      )}
    </>
  );
};

const Navbar = ({ locale }: { locale: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('navbar');
  const h = useTranslations('hero');
  const f = useTranslations('footer');
  
  const navItems = createNavItems(t);

  const isHomePage = true;

  // Updated isActive function with nested route support
  const isActive = (href: string) => {
    const langCodes = ["en", "tr", "az"];
    const definedRoutes = [
      "home",
      "about-us",
      "products",
      "services",
      "contact-us",
    ];

    const currentPath = pathname; // e.g., /en/projects/project-ace
    const hrefPath = `/${locale}${href === "/" ? "" : href}`; // Convert relative href to full path

    // Remove trailing slashes for comparison
    const normalizedCurrent = currentPath.replace(/\/$/, "") || "/";
    const normalizedHref = hrefPath.replace(/\/$/, "") || "/";

    const pathSegments = normalizedCurrent.split("/").filter(Boolean);
    const hrefSegments = normalizedHref.split("/").filter(Boolean);

    const currentLang = pathSegments[0];
    const currentPage = pathSegments[1];

    const hrefLang = hrefSegments[0];
    const hrefPage = hrefSegments[1];

    // Homepage logic
    if (langCodes.includes(hrefLang) && !hrefPage) {
      return !currentPage || !definedRoutes.includes(currentPage);
    }

    // Language must match
    if (currentLang !== hrefLang) {
      return false;
    }

    // Exact match
    if (normalizedCurrent === normalizedHref) {
      return true;
    }

    // Parent route match: href is a parent of current path
    // e.g., current: /en/projects/project-ace, href: /en/projects
    if (normalizedCurrent.startsWith(normalizedHref + "/")) {
      return true;
    }

    return false;
  };

  // Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isHomePage
          ? `fixed left-0 right-0 transition-all duration-300 z-50 ${
              isScrolled
                ? "bg-[#040404]/95 backdrop-blur-md shadow-lg top-0 lg:top-0"
                : "backdrop-blur-sm top-0 lg:top-0"
            }`
          : "sticky top-0 bg-[#040404] z-50 transition-all duration-300"
      } z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href={`/${locale}`} className="flex items-center space-x-4">
            <img
              src="/logo/universal-logo.png"
              alt="Universal Group Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-extrabold text-white leading-tight">
                {h('title1')}
              </h1>
              <p className="text-sm text-[#ffe500] font-medium leading-tight">
                {f('tagline')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav
            isActive={isActive}
            isScrolled={isScrolled}
            isHomePage={isHomePage}
            locale={locale}
            navItems={navItems}
          />

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isHomePage && !isScrolled
                  ? "text-white hover:text-[#ffe500] hover:bg-white/20"
                  : "text-[#fff] hover:text-[#ffe500] hover:bg-[#ffe500]/10"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <LanguageSelector currentLocale={locale} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <MobileNav
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isActive={isActive}
            locale={locale}
            navItems={navItems}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
