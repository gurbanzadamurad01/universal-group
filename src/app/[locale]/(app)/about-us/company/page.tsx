import AnimatedSection from "@/components/custom-components/AnimatedSection";
import Banner from "@/components/custom-components/Banner";
import CTASection from "@/components/custom-components/CtaSection";
import TagComponent from "@/components/custom-components/TagComponent";
import ImageTextTemplate from "@/components/templates/ImageTextTemplate";
import CompanyTabs from "@/components/about-us/CompanyTabs";
import Top5Projects from "@/components/about-us/Top5Projects";
import {
  Award,
  Cpu,
  Globe,
  Heart,
  Leaf,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { setRequestLocale, getTranslations } from 'next-intl/server';

const advantages = [
  {
    icon: (
      <svg
        className="h-15 w-15 text-[#ffe500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "25+ İl Təcrübə",
    description:
      "Uzun illər ərzində qazanılmış təcrübə və beynəlxalq əlaqələr sayəsində ölkənin aparıcı təchizat şirkətlərindən birinə çevrilmişik.",
  },
  {
    icon: (
      <svg
        className="h-15 w-15 text-[#ffe500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "1200+ Tədarükçü",
    description:
      "B2B və B2C seqmentlərində geniş miqyaslı fəaliyyət göstərən şirkətimiz, 1200-dən çox beynəlxalq tədarükçü ilə işləyir və geniş məhsul portfelinə malikdir.",
  },
  {
    icon: (
      <svg
        className="h-15 w-15 text-[#ffe500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Keyfiyyət Zəmanəti",
    description:
      "Təchizatın 70%-i xaricdən, 30%-i isə yerli bazardan aparılır. Bütün məhsullarımız beynəlxalq keyfiyyət standartlarına uyğundur və zəmanət ilə təmin edilir.",
  },
  {
    icon: (
      <svg
        className="h-15 w-15 text-[#ffe500]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "24/7 Dəstək",
    description:
      "Müştərilərimizə 24 saat, həftənin 7 günü dəstək xidməti göstəririk. Hər hansı bir problem və ya sualınız olduqda bizə müraciət edə bilərsiniz.",
  },
];

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

const preferences = [
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

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('company');
  return (
    <div className="min-h-screen">
      {/* Hero Section with ImageTextTemplate */}
      <ImageTextTemplate text1={t('bannerContent.mainParagraph1')} text2={t('bannerContent.mainParagraph2')} text3={t('bannerContent.mainParagraph3')} />

      {/* Company Tabs Section */}
      <CompanyTabs />

      {/* Top 5 Projects Section */}
      <Top5Projects />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Page;
