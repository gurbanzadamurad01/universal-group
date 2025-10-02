import { Metadata } from 'next';
import Banner from '@/components/custom-components/Banner';
import ServicesClient from './ServicesClient';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Xidmətlər | Universal Group',
  description: '25 illik təcrübə ilə beynəlxalq səviyyədə təchizat həlləri və peşəkar xidmətlər təqdim edirik. Müştərilərimizin ehtiyaclarını ən yüksək keyfiyyətdə qarşılayırıq.',
  keywords: 'xidmətlər, təchizat həlləri, peşəkar xidmət, beynəlxalq ticarət, Universal Group',
  openGraph: {
    title: 'Xidmətlər | Universal Group',
    description: '25 illik təcrübə ilə beynəlxalq səviyyədə təchizat həlləri və peşəkar xidmətlər təqdim edirik.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xidmətlər | Universal Group',
    description: '25 illik təcrübə ilə beynəlxalq səviyyədə təchizat həlləri və peşəkar xidmətlər təqdim edirik.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <div>
      <Banner bannerKey="services" />
      <ServicesClient locale={locale as 'en' | 'tr' | 'az'} />
    </div>
  );
}