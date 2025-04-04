import React from "react";
import ContactForm from "../features/ContactForm";
import { Headphones, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="lg:px-32 md:my-32 my-10 px-8" id="contact">
      <div className="title">
        <h2 className="scroll-m-20 py-5 sm:py-8 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Contactez-Nous
        </h2>
        <div className="flex scroll-m-20 py-4 text-xl font-semibold tracking-tight">
          Service Client <Headphones className="ml-3"/>.
        </div>
        <div className="flex justify-center">
        <Link href="to:692692482"   className="flex">Contactez l'assistance telephonique de Virtual Skul <Headphones className="ml-3"/></Link>
        </div>
      </div>

      <div className="mailusOn">
        <div className="flex scroll-m-20 py-4 text-xl font-semibold tracking-tight">
          Par mail <Mail className="ml-3"/>
        </div>
        <ContactForm />
      </div>
      <div className="reseauxSociaux">
        <div className="usbtitle scroll-m-20 py-4 text-xl font-semibold tracking-tight">
          Nos Resaux sociaux.
        </div>
      </div>
    </section>
  );
}
