'use client'

import Features from "@/components/layout/Features";
import Hero from "@/components/layout/Hero";
import TrustesByCompanies from "@/components/layout/TrustedByCompanies";
import { Button } from "@/components/ui/button";
import { LangSwitcher } from "@/i18n/LangSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
const t = useTranslations("HomePage")

  return (
    <div className="mt-24 md:mt-36 min-h-screen">
      <Hero/>
      <TrustesByCompanies/>
      <Features/>
    </div>

  );
}
