import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Universal Group",
  description: "Universal Group - engineering service",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}