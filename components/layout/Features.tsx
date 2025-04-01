import React from "react";
import Feature from "../mainFeatures/Feature";
import StudentsFeautures from "../mainFeatures/StudentsFeautures";
import CompaniesFeatures from "../mainFeatures/CompaniesFeatures";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const InscriptionFeaturePictures = [
  "/features/f1.jpeg",
  "/features/f2.jpeg",
  "/features/f3.jpeg",
  "/features/f4.jpeg",
];

export default function Features() {
  return (
    <section className="pt-5 md:pt-9" id="feature">
        <div className="py-3 md:py-6">
      <div className=" text-4xl font-bold text-center">Features</div>
      <p className="text-center">Our Main Features</p>
      </div>

      <p className="text-center">
        <Link href="#compnies-features" className="group ">
          {" "}
          <span className="hover:underline mr-3">go directly to companies Features{" "}</span>
          <Button className="bg-blue-600 hover:bg-blue-600/85 text-white ">
            Companies Features
            <span className="transition-transform transform group-hover:translate-x-2">
              <ChevronRight />
            </span>
          </Button>{" "}
        </Link>
      </p>


      <StudentsFeautures />
      <div className="flex justify-center items-center gap-2  py-5 md:py-10">
        <p className="text-2xl">You can start as a student right now...</p>
        <Button className="bg-green-400 text-white font-semibold text-2xl">
          Get Started
        </Button>
      </div>
      <CompaniesFeatures />

      <div className="flex justify-center items-center gap-2  py-5 md:py-10">
        <p className="text-2xl">You can start as a Company right now...</p>
        <Button className="bg-green-400 text-white font-semibold text-2xl">
          Get Started
        </Button>
      </div>

      {/* <Feature className="  flex flex-col items-center">
        <Feature.Title>Decouvertes & Inscriptions aux ecoles</Feature.Title>
        <div className="content flex  md:gap-32 items-center">
          <div className="des">
            <Feature.Description>
              Utilisation des comptes g-mail pour s'inscrire
            </Feature.Description>
            <Feature.Description>
              Personnalisation du profile (Bio, Photos...)
            </Feature.Description>
            <Feature.Description>
              Suivi des cours et historique des apprentissages.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature> */}
    </section>
  );
}
