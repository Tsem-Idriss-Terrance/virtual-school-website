import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  const QR1 = [
    {
      q: "Quelles sont les fonctionnalités incluses dans chaque plan ?",
      r: "Chaque plan propose un ensemble de fonctionnalités adaptées aux besoins des utilisateurs. Le plan Freemium offre les fonctionnalités de base, tandis que les plans Medium et Premium incluent des fonctionnalités avancées telles que l’analyse de tableau de bord, l’assistance IA et le suivi de la plateforme d’apprentissage.",
    },
    {
      q: "Puis-je passer à un plan supérieur à tout moment ?",
      r: "Oui, vous pouvez passer à un plan supérieur depuis votre tableau de bord à tout moment. La mise à niveau sera appliquée immédiatement après le paiement.",
    },
    {
      q: "Quels sont les tarifs des différents plans ?",
      r: "Le plan Freemium est gratuit. Le plan Medium coûte 23 000 Fcfa par mois. Le plan Premium coûte 35 000 Fcfa par mois. Vous pouvez consulter tous les détails sur notre page de tarification.",
    },
    {
      q: "Puis-je bénéficier d'un essai gratuit des plans payants ?",
      r: "Nous proposons un essai gratuit de 7 jours pour les nouveaux utilisateurs des plans Medium et Premium.",
    },
    {
      q: "Quels modes de paiement sont acceptés ?",
      r: "Nous acceptons les cartes de crédit/débit (Visa, MasterCard), les virements bancaires et les paiements via mobile (MTN Money, Orange Money).",
    },
    {
      q: "Puis-je obtenir une facture pour mon abonnement ?",
      r: "Oui, les factures sont générées automatiquement après chaque paiement et sont disponibles dans votre espace client.",
    },
  ];

  const QR2 = [
    {
      q: "Puis-je annuler mon abonnement à tout moment ?",
      r: "Oui, vous pouvez annuler votre abonnement depuis votre compte. Votre accès restera actif jusqu'à la fin de la période de facturation en cours.",
    },
    {
      q: "Puis-je obtenir un remboursement après l'annulation ?",
      r: "Les remboursements ne sont généralement pas possibles, sauf en cas de problème technique ou de facturation incorrecte.",
    },
    {
      q: "Mes données sont-elles sécurisées ?",
      r: "Oui, nous utilisons des protocoles de sécurité de pointe pour protéger vos informations. Vos données sont chiffrées et stockées de manière sécurisée.",
    },
    {
      q: "Que se passe-t-il si je dépasse la capacité de stockage ?",
      r: "Si vous dépassez la capacité de stockage allouée, vous recevrez une notification pour passer à un plan supérieur ou acheter un espace de stockage supplémentaire.",
    },
    {
      q: "Comment contacter le support client ?",
      r: "Vous pouvez nous contacter par e-mail, via le chat en direct sur notre site ou en soumettant une demande depuis votre espace client.",
    },
    {
      q: "Quels sont les horaires de disponibilité du support ?",
      r: "Notre équipe d'assistance est disponible du lundi au vendredi, de 9h00 à 18h00 (GMT).",
    },
  ];

  return (
    <section className="lg:px-32 md:my-32 my-10 px-8" id="faq">

        <div className="title">
        <h2 className="scroll-m-20 py-5 sm:py-8 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Foire aux questions
    </h2>
        </div>
      <div className="acc grid md:grid-cols-2 place-content-center items-center md:gap-10">
        <Accordion type="single" collapsible>
          {QR1.map((element, index) => (
            <AccordionItem key={`qr1-${index}`} value={`qr1-${index}`}>
              <AccordionTrigger className="scroll-m-20 text-2xl font-semibold tracking-tight "><span className="line-clamp-1">{element.q}</span></AccordionTrigger>
              <AccordionContent className="leading-7 [&:not(:first-child)]:mt-6 text-xl">{element.r}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible>
          {QR2.map((element, index) => (
            <AccordionItem key={`qr2-${index}`} value={`qr2-${index}`}>
              <AccordionTrigger className="scroll-m-20 text-2xl font-semibold tracking-tight"><span className="line-clamp-1">{element.q}</span></AccordionTrigger>
              <AccordionContent className="leading-7 [&:not(:first-child)]:mt-6 text-xl">{element.r}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </section>
  );
}
