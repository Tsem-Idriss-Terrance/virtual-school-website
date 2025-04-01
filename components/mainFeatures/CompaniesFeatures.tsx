import React from "react";
import Feature from "./Feature";
import { InscriptionFeaturePictures } from "./StudentsFeautures";

export default function CompaniesFeatures() {
  return (
    <div  id="compnies-features" className="pt-4 md:pt-7">

<div className=" mb-4 md:mb-7">
<div className="title text-3xl font-bold  text-center">
            <span className="text-green-500">Companies</span> Features
        </div>
        <p className="subTile text-center">
            Main Features for Companies
        </p>
</div>
      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Gestion de profil et de la page école</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Création de profil avec logo, description et coordonnées.
            </Feature.Description>
            <Feature.Description>
              Ajout de vidéos de présentation et de témoignages.
            </Feature.Description>
            <Feature.Description className="">
              Gestion de la visibilité publique ou privée de la page.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Gestion des cours et du contenu</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Création de cours avec modules, chapitres et leçons.
            </Feature.Description>
            <Feature.Description>
              Téléversement de vidéos, PDF, diapositives et autres contenus
              multimédias.
            </Feature.Description>
            <Feature.Description className="">
              Configuration des prérequis et des objectifs de chaque cours.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Monétisation et paiements</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
              Tarification des cours (gratuit, payant, abonnement).
            </Feature.Description>
            <Feature.Description>
              Intégration avec des passerelles de paiement (Stripe, PayPal).
            </Feature.Description>
            <Feature.Description className="">
              Gestion des offres promotionnelles et codes de réduction.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Suivi et gestion des étudiants</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
            Liste des étudiants inscrits avec historique de suivi.            </Feature.Description>
            <Feature.Description>
            Gestion des inscriptions et annulations.
            </Feature.Description>
            <Feature.Description className="">
            Envoi de messages groupés ou individuels.            
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Analyse des performances et rapports</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
            Statistiques d'engagement des étudiants.            
            </Feature.Description>
            <Feature.Description>
            Suivi de la progression des cours et des évaluations.
            </Feature.Description>
            <Feature.Description className="">
            Rapport sur les revenus générés et les cours les plus populaires.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Outils de communication et d'interaction</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
            Système de chat pour communiquer avec les étudiants.            </Feature.Description>
            <Feature.Description>
            Notifications pour les événements ou mises à jour de cours.
            </Feature.Description>
            <Feature.Description className="">
            Gestion des commentaires et avis sur les cours.
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Gestion administrative et certification</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
            Attribution automatique de certificats après validation d’un cours.            </Feature.Description>
            <Feature.Description>
            Gestion des équipes pédagogiques (ajout de professeurs ou formateurs).
            </Feature.Description>
            <Feature.Description className="">
            Archivage et sauvegarde des cours pour réutilisation ultérieure.            
            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>

      <Feature className="  flex flex-col items-center p-4">
        <Feature.Title>Sécurité et confidentialité</Feature.Title>
        <div className="content flex  min-[1030px]:gap-x-32 gap-5 flex-wrap justify-center">
          <div className="des md:pt-16 pt-3">
            <Feature.Description>
            Gestion des rôles et permissions (administrateurs, enseignants, assistants).            </Feature.Description>
            <Feature.Description>
            Sauvegarde et protection des données.
            </Feature.Description>
            <Feature.Description className="">
            Authentification à deux facteurs pour plus de sécurité.            </Feature.Description>
          </div>
          <Feature.Carousel images={InscriptionFeaturePictures} />
        </div>
      </Feature>
    </div>
  );
}
