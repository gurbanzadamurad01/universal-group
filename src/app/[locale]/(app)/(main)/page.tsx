import CarouselHero from "@/components/custom-components/CarouselHero";
import MotionContainer from "@/components/custom-components/MotionContainer";
import { setRequestLocale } from 'next-intl/server';

const Page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  // Await the params object before destructuring.
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);


  return (
    <div className="">
      <main className="">
        <MotionContainer>
          <CarouselHero locale={locale} />
        </MotionContainer>
      </main>
    </div>
  );
};

export default Page;
