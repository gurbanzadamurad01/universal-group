import Footer from "@/components/layout-components/footer";
import Navbar from "@/components/layout-components/navbar";
import { setRequestLocale } from 'next-intl/server';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className={`flex min-h-screen flex-col`}>
      <Navbar locale={locale} />
      {children}
      <Footer locale={locale} />
      {/* <Footer locale={locale} /> */}
    </div>
  );
}
