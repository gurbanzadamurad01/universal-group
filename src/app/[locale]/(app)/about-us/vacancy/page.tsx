import Banner from "@/components/custom-components/Banner";
import CTASection from "@/components/custom-components/CtaSection";
import VacationsSection from "@/components/custom-components/VacationsSection";
import OpenModal from "@/components/custom-components/OpenModal";
import { setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner bannerKey="vacations">
        <OpenModal />
      </Banner>
      {/* Vacations Section */}
      <VacationsSection locale={locale as 'az' | 'en' | 'tr'} />

      {/* CTA Section */}
      <CTASection locale={locale} />
    </div>
  );
};

export default Page;