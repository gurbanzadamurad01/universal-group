import { LucideProps } from "lucide-react";

export interface ByLanguage {
  [key: string]: string; // Add this index signature
}

export interface ByLanguageMassiv {
  [key: string]: string[]; // Add this index signature
}

export interface ServiceData {
  id: number | string;
  title: string;
  description: string;
  category: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  features: string[];
  pricing: string;
  deliveryTime: string;
  fullDescription: string;
  image?: string;
  commonLocation?: string;
  hotline?: string;
  mail?: string;
  workTime?: string;
  urlTitle?: string;
}

export interface CarouselSlide {
  id: number;
  image: string;
  title1: ByLanguage;
  title2: ByLanguage;
  subtitle: ByLanguage;
  description: ByLanguage;
  ctaText: ByLanguage;
  ctaLink: string;
}