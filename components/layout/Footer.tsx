"use client"

import React, { useState } from "react";
import Logo from "../features/Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { useNavLinks } from "@/data/navLinks";
import { SendHorizontal } from "lucide-react";
import { useTranslations } from "next-intl"; 

export default function Footer() {
  const t = useTranslations("footer");
  const navLinks = useNavLinks();
  const [email, setEmail] = useState("");

  const legals = [
    {
      id: 0,
      name: t("legal.termsOfUse"),
      href: "term-of-use",
    },
    {
      id: 1,
      name: t("legal.privacyPolicy"),
      href: "privacy-policy",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log(`Email submitted: ${email}`);
      setEmail(""); // Reset field after submission
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <footer className="md:px-10 px-4 xl:px-32 py-8 w-full bg-accent">
      <div className="options flex max-[500px]:flex-wrap">
        <div className="logo mr-auto max-[1200px]:w-full mb-5 max-[1200px]:mr-8">
          <Logo />
          <p className="pt-2">
            {t("logoText")} <a href="https://gdev.dev"></a>
          </p>
        </div>

        <div className="linkSupports flex md:gap-x-32 justify-between max-[1430px]:flex-wrap gap-4">
          <div className="links">
            <p className="title font-bold text-xl">{t("links")}</p>
            <ul className="ml-2 pt-2">
              {navLinks.map((link) => (
                <li key={link.id} className="text-ring font-medium">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="legal">
            <p className="title font-bold text-xl">{t("legals")}</p>
            <ul className="ml-2 pt-2">
              {legals.map((legal) => (
                <li key={legal.id} className="text-ring font-medium">
                  <Link href={legal.href}>{legal.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="newLetter max-[1200px]:w-full">
            <p className="title font-bold text-xl">{t("newsletterTitle")}</p>
            <form onSubmit={handleNewsletterSubmit} className="pt-3 flex max-[1200px]:w-full">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                className="h-[42px] border bg-white text-black pl-2 rounded-sm max-[1200px]:w-full lg:w-[300px]"
                placeholder={t("newsletterPlaceholder")}
                required
              />
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-500/85 font-medium ml-3 h-[42px] text-lg overflow-hidden text-white cursor-pointer group relative"
              >
                <span className="absolute inset-0 bg-blue-600 transition-all duration-300 group-hover:w-full w-0 h-full " />
                <span className="absolute w-0 left-0 top-1/2 transform -translate-y-1/2 group-hover:w-full group-hover:translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <SendHorizontal className="w-8 h-8" />
                </span>
                <span>{t("submitButton")}</span>
              </Button>
            </form>
            <p className="font-thin pt-2 pl-3">
              {t("newsletterText")}
            </p>
          </div>
        </div>
      </div>

      <div className="copy pt-5">
        <p>&copy;{t("copy")}</p>
      </div>
    </footer>
  );
}
