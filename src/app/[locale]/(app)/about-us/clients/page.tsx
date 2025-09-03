import Banner from "@/components/custom-components/Banner";
import CTASection from "@/components/custom-components/CtaSection";
import ClientsSection from "@/components/custom-components/ClientsSection";
import { setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <div>
      <Banner bannerKey="clients" />
      <ClientsSection locale={locale as 'az' | 'en' | 'tr'} />
      <CTASection />
    </div>
  );
};

export default Page;