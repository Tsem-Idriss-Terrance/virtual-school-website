import { Button } from "@/components/ui/button";
import { LangSwitcher } from "@/i18n/LangSwitcher";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
const t = useTranslations("HomePage")

  return (
    <div className="">
      <LangSwitcher/>
      <Button>{t("title")}</Button>
    </div>

  );
}
