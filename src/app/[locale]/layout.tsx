import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';

import { setRequestLocale } from "next-intl/server";
import { locales } from "@/config";

import MoveTop from "@/components/custom-components/MoveTop";


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Universal Group",
  description: "Trade Smarter, Not Harder",
  icons: { icon: "/favicon.ico" },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);  
  
  return (
    <html lang={locale}>
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <MoveTop />
      </body>
    </html>
  );
}
