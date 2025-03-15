'use client'

import Hero from "@/components/layout/Hero";
import { Button } from "@/components/ui/button";
import { LangSwitcher } from "@/i18n/LangSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
const t = useTranslations("HomePage")

  return (
    <div className="mt-24 md:mt-36">
      <Button>{t("test")}</Button>
      <Hero/>
    </div>

  );
}
