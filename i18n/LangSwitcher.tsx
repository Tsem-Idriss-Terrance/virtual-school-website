"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";
import { Languages } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

export function LangSwitcher() {
  // const langue: string | undefined = getCookie("language") as string | undefined;
  const [langue, setLangue] = React.useState<string | undefined>(
    getCookie("language") as string | undefined
  );
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    setLangue(lang);
    setCookie("language", lang);

    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <Languages/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          value={langue}
          onValueChange={handleLanguageChange}
        >
          <DropdownMenuRadioItem value="fr">Francais <ReactCountryFlag countryCode="FR" /></DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">English <ReactCountryFlag countryCode="US" /></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      <span className='sr-only'>lang changer</span>

    </DropdownMenu>
  );
}
