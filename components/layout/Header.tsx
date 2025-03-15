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

export default function Header() {
  return (
    <header className="flex py-2 justify-between items-center md:px-8 px-4 lg:px-32">
      <div className="logo ">
        <Link href="/" className="flex items-end">
          <Image
            width={50}
            height={50}
            src={"/vs_logo.png"}
            alt="Logo du site"
          />
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            Virtual Skull
          </h1>
        </Link>
      </div>
      <div className="menu  flex items-end gap-4 sm:flex-wrap">
        <NavLinks />
        <div className="cta flex sm:gap-2 gap-1  ">
          <Button className="bg-green-700 font-bold max-[400px]:hidden hover:bg-green-500 text-white rounded-2xl">
            Get Started
          </Button>
          <Button className="bg-blue-700 font-bold  max-[460px]:hidden hover:bg-blue-500 text-white rounded-2xl">
            Sign In
          </Button>
        </div>
        <div className="preferences flex gap-2 max-[600px]:hidden">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
      
        <MobileMenu/>
    </header>
  );
}
