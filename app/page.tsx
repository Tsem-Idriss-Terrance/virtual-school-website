'use client'

import Contact from "@/components/layout/Contact";
import Faq from "@/components/layout/Faq";
import Features from "@/components/layout/Features";
import Hero from "@/components/layout/Hero";
import Pricing from "@/components/layout/Pricing";
import TrustesByCompanies from "@/components/layout/TrustedByCompanies";

import { useTranslations } from "next-intl";

export default function Home() {
//const t = useTranslations("HomePage")

  return (
    <div className="mt-24 md:mt-36 min-h-screen">
      <Hero/>
      <TrustesByCompanies/>
      <Features/>
      <Pricing/>
      <Faq/>
      <Contact/>
    </div>

  );
}
