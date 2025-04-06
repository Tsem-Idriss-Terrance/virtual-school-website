import React from "react";
import Logo from "../features/Logo";
//import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "../ui/button";
import { useNavLinks } from "@/data/navLinks";
import { SendHorizontal } from "lucide-react";


export default function Footer() {

  const navLinks = useNavLinks()

  const legals = [
    {
      id: 0,
      name: "Terms of use",
      href: "term-of-use",
    },
    {
      id: 1,
      name: "Privacy policy",
      href: "privacy-policy",
    },
  ];

  return (
    <footer className="md:px-10 px-4 xl:px-32 py-8 w-full  bg-accent">
      <div className="options flex max-[500px]:flex-wrap ">
        <div className="logo mr-auto max-[1200px]:w-full mb-5 max-[1200px]:mr-8">
          <Logo />
          <p className="pt-2">Made with &hearts; by <a href="gdev.dev" className=""> Gdev</a>.</p>
        </div>

        <div className="linkSupports flex md:gap-x-32 justify-between  max-[1430px]:flex-wrap gap-4">
          <div className="links  ">
            <p className="title font-bold text-xl">Links</p>
            <ul className="ml-2 pt-2">
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className="text-ring font-medium">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="legal ">
            <p className="title font-bold text-xl">Legals</p>
            <ul className="ml-2 pt-2">
              {legals.map((legal) => {
                return (
                  <li key={legal.id} className="text-ring font-medium">
                    <Link href={legal.href}>{legal.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="newLetter max-[1200px]:w-full">
            <p className="title font-bold text-xl">NewsLetter</p>

            <form action="" className="pt-3 flex max-[1200px]:w-full">
              <input
                type="email"
                name="email"
                id="email"
                className="h-[42px] border bg-white text-black pl-2 rounded-sm max-[1200px]:w-full lg:w-[300px]"
                placeholder="xyz@gmail.com"
              />

              <Button
            type="submit"
            className="bg-green-600 hover:bg-green-500/85 font-medium ml-3 h-[42px] text-lg overflow-hidden text-white cursor-pointer group relative"
          >
            <span className="absolute inset-0 bg-blue-600 transition-all duration-300 group-hover:w-full w-0 h-full " />
            <span className="absolute w-0 left-0 top-1/2 transform -translate-y-1/2  group-hover:w-full group-hover:translate-x-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100">
              <SendHorizontal className="w-8 h-8"/>
            </span>
            <span>Submit</span>
          </Button>
            </form>
            <p className="font-thin pt-2 pl-3">
              Stay intouch of each update by submitting to our newLetter.
            </p>
          </div>
        </div>
      </div>
      <div className="copy pt-5">
        <p>&copy; 2025~Virtual Skul~All right Reserved</p>{" "}
      </div>
    </footer>
  );
}

