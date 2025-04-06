import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Virtual Skull",
  description: "Plateforme de formation en ligne pour tous les niveaux.",
  openGraph: {
    title: "Virtual Skull",
    description: "Plateforme de formation en ligne pour tous les niveaux.",
    url: "https://virtual-school-website-qeoi.vercel.app/", 
    siteName: "Virtual Skull",
    images: [
      {
        url: "https://virtual-school-website-qeoi.vercel.app/vs_logo.png",
        width: 1200,
        height: 630,
        alt: "Bannière de Virtual Skull",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Skull",
    description: "Plateforme de formation en ligne pour tous les niveaux.",
    images: ["https://virtual-school-website-qeoi.vercel.app/vs_logo.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  return (
    <html lang={locale} >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NextIntlClientProvider>
          <ThemeProvider
                      attribute="class"
                      defaultTheme="system"
                      enableSystem
                      disableTransitionOnChange
          >
          <Header/>
          <main>{children}</main>
        <Footer/>
        </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
