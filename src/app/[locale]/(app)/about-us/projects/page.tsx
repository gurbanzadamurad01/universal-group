import Banner from "@/components/custom-components/Banner";
import ProductsSection from "@/components/custom-components/ProductsSection";
import CTASection from "@/components/custom-components/CtaSection";
import { setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div>
      <Banner bannerKey="projects" />
      <ProductsSection locale={locale} />
      <CTASection locale={locale} />
    </div>
  );
};

export default Page;
