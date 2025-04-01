import React from "react";
import Feature from "../mainFeatures/Feature";

export const InscriptionFeaturePictures = [
  "/features/f1.jpeg",
  "/features/f2.jpeg",
  "/features/f3.jpeg",
  "/features/f4.jpeg",
];

export default function StudentsFeautures() {
  return (
    <div className="pt-4 md:pt-7">
<div className=" mb-4 md:mb-7">
<div className="title text-3xl font-bold text-center">
            <span className="text-green-500">Students</span> Features
        </div>
        <p className="subTile text-center">
            Main Features for Student
        </p>
</div>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Inscription & Profiles</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Utilisation des comptes g-mail pour s'inscrire
            </Feature.Description>
            <Feature.Description>
              Personnalisation du profile (Bio, Photos...)
            </Feature.Description>
            <Feature.Description className="">
              Suivi des cours et historique des apprentissages.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Decouvertes & Inscriptions aux ecoles</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Recherche avancée avec filtres (par domaine, popularité, avis).
            </Feature.Description>
            <Feature.Description>
              Système de recommandation basé sur les préférences et
              l’historique.
            </Feature.Description>
            <Feature.Description className="">
              Abonnement aux écoles pour suivre leurs actualités.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Gestion des cours</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Inscription aux cours avec possibilité de prévisualiser le
              contenu.
            </Feature.Description>
            <Feature.Description>
              Téléchargement des documents de cours et supports.
            </Feature.Description>
            <Feature.Description className="">
              Suivi des progrès avec badges et points de compétence.
            </Feature.Description>
            <Feature.Description className="">
              Téléchargement de certificats après réussite d'un cours.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Apprentissage interactif</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Quiz et évaluations en fin de module.
            </Feature.Description>
            <Feature.Description>
              Exercices pratiques avec correction automatique.
            </Feature.Description>
            <Feature.Description className="">
              Projets collaboratifs en groupe.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Notifications et rappels</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Rappels pour les cours à suivre ou les évaluations à rendre.
            </Feature.Description>
            <Feature.Description>
              Notifications des mises à jour de cours ou nouveaux contenus.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>
          Interaction avec les enseignants et les autres étudiants
        </Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Système de commentaires sur les cours.
            </Feature.Description>
            <Feature.Description>
            Forums pour échanger avec d'autres étudiants.            </Feature.Description>
            <Feature.Description className="">
            Chat en direct pour poser des questions aux enseignants.            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Statistiques et progression</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
            Tableau de bord avec statistiques d'apprentissage.
            </Feature.Description>
            <Feature.Description>
            Suivi des progrès par module et par compétence.            </Feature.Description>
            <Feature.Description className="">
            Comparaison de performances avec d’autres étudiants.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Personnalisation de l’expérience</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
            Thème sombre ou clair.
            </Feature.Description>
            <Feature.Description>
            Réglage des notifications et préférences de langue.
            </Feature.Description>
            <Feature.Description className="">
            Liste de cours favoris pour un accès rapide.            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>
    </div>
  );
}
