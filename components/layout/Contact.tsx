import React from "react";
import ContactForm from "../features/ContactForm";
import { Headphones } from "lucide-react";

export default function Contact() {
  return (
    <section className="lg:px-32 md:my-32 my-10 px-8" id="contact">
      <div className="title">
        <h2 className="scroll-m-20 py-5 sm:py-8 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Contactez-Nous
        </h2>
        <div className=" scroll-m-20 py-4 text-xl font-semibold tracking-tight">
          Nous sommes là pour vous aider.
        </div>
        <div className="">
          Contactez l'assistance telephonique <Headphones/>
        </div>
      </div>

      <div className="mailusOn">
        <div className="usbtitle scroll-m-20 py-4 text-xl font-semibold tracking-tight">
          Par mail
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
