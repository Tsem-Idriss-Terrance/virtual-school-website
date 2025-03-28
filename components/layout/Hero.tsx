

import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ChevronRight, FileVideo, Play, Tv, Video, Videotape } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TrustByStudents from "../features/TrustByStudents";

export default function Hero() {
  const t = useTranslations("hero");


  return (
    <section className=" w-full  max-[500px]:flex-wrap flex items-center justify-center md:gap-4 gap-2  px-4">
      {/* cote gauche avec les lettres */}

      <div className="left md:w-lg w-fit flex flex-col max-[500px]:text-center">
        <h1 className="croll-m-20 md:leading-15 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {/* Solution tout-en-un pour gérer facilement vos{" "} */}
          {t("allInOneSolution")}
          <span className="bg-green-600">
            {/* formations */} {t("training")}
          </span>
          .
        </h1>
        <p  className="mt-2 leading-8 text-xl text-muted-foreground italic">
          "{" "}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Virtual Skul{" "}
          </span>
          {/* est une solution digitale dédiée aux{" "} */}
          {t("isASolutionDedicatedTo")}
          <span className="text-blue-600">
            {/* centres de formation */}
            {t("trainingCenter")}
          </span>
          ,{" "}
          <span className="text-blue-600">
            {/* étudiants */}
            {t("students")}
          </span>{" "}
          {t("and")}
          {/* {t("and")} */}{" "}
          <span className="text-blue-600">
            {/* entreprises */}
            {t("companies")}
          </span>
          ."
        </p>
        <p className="mt-5 flex items-baseline gap-5 mb-10">
          <Button className="bg-green-700 cursor-pointer hover:bg-green-500 rounded-2xl sm:text-2xl font-bold md:py-6 relative group">
            {/* Essai Gratuit */}
            {t("freeTrial")}

            <span className="transition-transform transform group-hover:translate-x-2">
              <ChevronRight />
            </span>
          </Button>
          <Button variant="outline">
            View Demo{" "}
            <span className="transition-transform transform group-hover:translate-x-2">
              <Play />
            </span>
          </Button>
        </p>
        <TrustByStudents/>
      </div>

      {/* cote droit ou il ya la photo */}
      <div className="right md:w-[400px] w-fit">
        <Image
          width={400}
          height={300}
          src={"/testImageToemove1.svg"}
          alt="mettre une image qui regarde le bouton essai gratuit et qui fait reference a l'etude ou formation en ligne"
        />
      </div>
    </section>
  );
}
