import React from "react";
import Feature from "../mainFeatures/Feature";

const InscriptionFeaturePictures = [
  "/features/f1.jpeg",
  "/features/f2.jpeg",
  "/features/f3.jpeg",
  "/features/f4.jpeg",
];

export default function Features() {
  return (
    <div>
      <Feature className="  flex flex-col items-center">
        <Feature.Title>Inscription & Profiles</Feature.Title>
        <div className="content flex  md:gap-32 ">
          <div className="des md:pt-16">
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
      </Feature>

      <Feature className="  flex flex-col items-center">
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
      </Feature>
    </div>
  );
}
