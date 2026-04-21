import { Metadata } from 'next';
import Banner from '@/components/custom-components/Banner';
import ProductsClient from './ProductsClient';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Məhsullar | Universal Group',
  description: 'Sənaye və tikinti sahələri üçün yüksək keyfiyyətli məhsullar və həllər. 22+ kateqoriyada premium məhsullar.',
  keywords: [
    'sənaye məhsulları',
    'tikinti materialları',
    'polad materiallar',
    'qaynaq avadanlıqları',
    'aşındırıcılar',
    'elektrik materialları',
    'universal group',
    'azərbaycan'
  ],
  openGraph: {
    title: 'Məhsullar | Universal Group',
    description: 'Sənaye və tikinti sahələri üçün yüksək keyfiyyətli məhsullar və həllər',
    type: 'website',
    locale: 'az_AZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Məhsullar | Universal Group',
    description: 'Sənaye və tikinti sahələri üçün yüksək keyfiyyətli məhsullar və həllər',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ProductsPage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <>
      <Banner bannerKey="products" />
      <ProductsClient locale={locale as 'az' | 'en' | 'tr'} />
    </>
  );
};

export default ProductsPage;