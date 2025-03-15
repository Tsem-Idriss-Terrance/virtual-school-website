import React from "react";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import Image from "next/image";
import NavLinks from "../features/NavLinks";
import Link from "next/link";
import { LangSwitcher } from "@/i18n/LangSwitcher";
import GetStartedButton from "../features/cta/GetStartedButton";
import SignInButton from "../features/cta/SignInButton";
import { Button } from "../ui/button";
import MobileMenu from "../features/MobileMenu";
import Menu from "../features/Menu";
import Logo from "../features/Logo";

export default function Header() {
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full flex py-2 justify-between items-center md:px-8 px-4 lg:px-32 border-b-accent border">
      <Logo/>
      <Menu />
      <MobileMenu />
    </header>
  );
}
