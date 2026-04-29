import Banner from "@/components/custom-components/Banner";
import CTASection from "@/components/custom-components/CtaSection";
import TeamSection from "@/components/custom-components/TeamSection";
import StatsSection from "@/components/custom-components/StatsSection";
import DepartmentsSection from "@/components/custom-components/DepartmentsSection";
import { setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <div>
      <Banner bannerKey="team" />
      <StatsSection locale={locale as 'az' | 'en' | 'tr'} />
      <TeamSection locale={locale as 'az' | 'en' | 'tr'} />
      <DepartmentsSection locale={locale as 'az' | 'en' | 'tr'}/>
      <CTASection locale={locale} />
    </div>
  );
};

export default Page;