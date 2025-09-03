import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ByLanguage } from "@/types";

interface Language {
  code: string;
  name: ByLanguage;
  flag: string;
}

const languages: Language[] = [
  {
    code: "en",
    name: {
      az: "Ingiliscə",
      tr: "Ingilizce",
      en: "English",
    },
    flag: "🇺🇸",
  },
  {
    code: "tr",
    name: {
      az: "Türkçə",
      tr: "Türkçe",
      en: "Turkish",
    },
    flag: "🇹🇷",
  },
  {
    code: "az",
    name: {
      az: "Azərbaycanca",
      tr: "Azərbaycan",
      en: "Azerbaijani",
    },
    flag: "🇦🇿",
  },
];

interface LanguageSelectorProps {
  currentLocale: string; // We'll pass this from the Navbar
  compact?: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLocale,
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Get current path: /en/projects/project-ace
  const router = useRouter(); // For navigation

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to switch language
  const handleLanguageSelect = (language: Language) => {
    console.log(
      "🔄 Switching language from",
      currentLocale,
      "to",
      language.code
    );
    console.log("📍 Current pathname:", pathname);

    // Remove current locale from path and add new locale
    // Example: /en/projects/project-ace -> /projects/project-ace -> /tr/projects/project-ace
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";
    const newPath = `/${language.code}${
      pathWithoutLocale === "/" ? "" : pathWithoutLocale
    }`;

    console.log("🎯 New path will be:", newPath);

    // Navigate to new path
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          compact ? "p-2" : "px-4 py-2"
        } rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
          isOpen
            ? "bg-[#ffe500] text-[#fff] shadow-lg"
            : "text-[#ffe500] hover:text-[#ffe500] hover:bg-[#ffe500]/10"
        }`}
      >
        {!compact && <Globe size={16} />}
        <span className="text-lg">{currentLanguage.flag}</span>
        {!compact && (
          <span className="hidden xl:inline">{currentLanguage.name[currentLocale]}</span>
        )}
        <ChevronDown
          size={compact ? 14 : 16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Language Dropdown */}
      <div
        className={`absolute top-full right-0 mt-2 ${
          compact ? "w-40" : "w-48"
        } bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2"
        }`}
      >
        <div className="py-2 max-h-64 overflow-y-auto">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full ${
                compact ? "px-3 py-2" : "px-4 py-3"
              } text-sm font-medium transition-all duration-200 hover:bg-[#ffe500]/10 hover:text-[#ffe500] border-l-4 border-transparent hover:border-[#ffe500] flex items-center gap-3 ${
                language.code === currentLocale
                  ? "bg-[#ffe500]/10 text-[#ffe500] border-[#ffe500]"
                  : "text-[#040404]"
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className={compact ? "truncate" : ""}>{language.name[currentLocale]}</span>
              {language.code === currentLocale && (
                <span className="ml-auto text-xs text-[#ffe500]">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
