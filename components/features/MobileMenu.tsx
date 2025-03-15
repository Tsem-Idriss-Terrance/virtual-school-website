import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { LangSwitcher } from "@/i18n/LangSwitcher";
import { useTranslations } from "next-intl";

export default function MobileMenu() {
    const t = useTranslations("header")
  return (
    <div className=" md:hidden ml-1">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className=" px-3 flex flex-col gap-y-3">
                <MobileNavLinks/>
            <div className="cta flex flex-col gap-2 ">
                          <Button className="bg-green-700 font-bold py-3 hover:bg-green-500 text-white rounded-2xl">
                          {t("getStarted")}
                          </Button>
                          <Button className="bg-blue-700 font-bold px-3  hover:bg-blue-500 text-white rounded-2xl">
                          {t("signIn")}
                          </Button>
            </div>
            <div className="pref flex gap-2">
                          <ThemeSwitcher /> 
                          <LangSwitcher />
            </div>
          </div>

        </SheetContent>
      </Sheet>
    </div>
  );
}
