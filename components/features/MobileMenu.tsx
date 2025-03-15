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

export default function MobileMenu() {
  return (
    <div className="mobileMenu md:hidden ml-1">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="menu px-3 flex flex-col gap-y-3">
            <div className="mobileNavlink mb-2">
                <MobileNavLinks/>
            </div>
            <div className="cta flex flex-col gap-2 ">
                          <Button className="bg-green-700 font-bold py-3 hover:bg-green-500 text-white rounded-2xl">
                            Get Started
                          </Button>
                          <Button className="bg-blue-700 font-bold px-3  hover:bg-blue-500 text-white rounded-2xl">
                            Sign In
                          </Button>
            </div>
            <div className="pref flex gap-2">
                          <ThemeSwitcher /> 
                          <LangSwitcher />
            </div>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
