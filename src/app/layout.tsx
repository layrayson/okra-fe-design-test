import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import localFont from "@next/font/local";

export const metadata: Metadata = {
  title: "Brint",
  description: "Brint community",
};

const ppTelegraf = localFont({
  src: [
    {
      path: "../../public/assets/fonts/PP_Telegraf/pptelegraf-ultralight.otf",
      weight: "200",
    },
    {
      path: "../../public/assets/fonts/PP_Telegraf/pptelegraf-regular.otf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/PP_Telegraf/pptelegraf-ultrabold.otf",
      weight: "700",
    },
  ],
  variable: "--font-pptelegraf",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ppTelegraf.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
