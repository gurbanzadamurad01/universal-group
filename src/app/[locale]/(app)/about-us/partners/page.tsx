import Banner from "@/components/custom-components/Banner";
import CTASection from "@/components/custom-components/CtaSection";
import PartnersSection from "@/components/custom-components/PartnersSection";
import { setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <div>
      <Banner bannerKey="partners" />
      <PartnersSection locale={locale as 'az' | 'en' | 'tr'} />
      <CTASection />
    </div>
  );
};

export default Page;