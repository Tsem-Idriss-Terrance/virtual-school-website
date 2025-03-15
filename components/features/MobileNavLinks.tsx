"use client"

import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MobileNavLinks() {
    const t = useTranslations("header")
    const navLinks = [
      {
        id: 0,
        name: t("feature"),
        href: "#feature",
      },
      {
        id: 1,
        name: t("resources"),
        href: "#ressources",
      },
      {
        id: 2,
        name: t("rate"),
        href: "#pricing",
      },
      {
        id: 3,
        name: "FAQs",
        href: "#faq",
      },
      {
        id: 4,
        name: "Contact",
        href: "#contact",
      },
    ];

  const location = usePathname()
  return (
    <nav className="mb-2">
      <ul className="flex flex-col  gap-2 ">
        {navLinks.map((navLink) => {
          return (
            <li key={navLink.id}>
              <Link href={navLink.href} className={cn(
                location === navLink.href? "bg-muted" : "hover:bg-muted hover:opacity-75", "px-2 py-2  flex items-end justify-center font-medium rounded-md"
              )}>{navLink.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
