import type { Metadata } from 'next';
import Banner from '@/components/custom-components/Banner';
import ContactClient from './ContactClient';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Əlaqə | Universal Group',
  description: 'Universal Group ilə əlaqə saxlayın. Bizim komandamız sizin suallarınızı cavablandırmaq və layihələrinizə dəstək olmaq üçün hazırdır.',
  keywords: 'əlaqə, Universal Group, Azərbaycan, Bakı, ticarət, xidmətlər, dəstək',
  openGraph: {
    title: 'Əlaqə | Universal Group',
    description: 'Universal Group ilə əlaqə saxlayın. Bizim komandamız sizin suallarınızı cavablandırmaq və layihələrinizə dəstək olmaq üçün hazırdır.',
    type: 'website',
    locale: 'az_AZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Əlaqə | Universal Group',
    description: 'Universal Group ilə əlaqə saxlayın. Bizim komandamız sizin suallarınızı cavablandırmaq və layihələrinizə dəstək olmaq üçün hazırdır.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <>
      <Banner bannerKey="contact" />
      <ContactClient locale={locale as 'az' | 'en' | 'tr'} />
    </>
  );
}