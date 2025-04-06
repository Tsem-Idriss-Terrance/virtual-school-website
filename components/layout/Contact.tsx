import React from "react";
import ContactForm from "../features/ContactForm";
import {Facebook, Headphones, Headset, Mail, MessageCirclePlus, Music2, Send } from "lucide-react";
import Link from "next/link";
import FollowButtons from "../features/cta/FollowButtons";

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
        <div className="flex justify-center mb-4 md:mb-8">
        <Link href="to:692692482"   className="flex font-semibold text-lg text-transparent bg-clip-text animate-aura">Contactez l'assistance telephonique de Virtual Skul <Headset className="ml-3 text-muted-foreground"/></Link>
        </div>


      </div>


      <div className="mailusOn mb-4 md:mb-8">
        <div className="flex scroll-m-20 py-4 text-xl font-semibold tracking-tight">
          Par mail <Mail className="ml-3"/>
        </div>
        <ContactForm />
      </div>


      <div className="reseauxSociaux">
        <div className="usbtitle scroll-m-20 py-4 text-xl font-semibold tracking-tight">
          Nos Resaux sociaux.
        </div>
        <div className="flex justify-center gap-3 flex-wrap">
          <FollowButtons Network="TikTok" href="https://www.lienTikTok.com" icon={<Music2 className="font-bold text-[#949499]" size={30}/>} color="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <FollowButtons Network="Whats'app" href="https://www.LeLienPourLeCompteGdevSurLeReaseau.com" icon={<MessageCirclePlus className="font-bold text-green-600" size={30}/>} color="bg-gradient-to-r from-green-500 via-purple-500 to-pink-500"/>
          <FollowButtons Network="Telegram" href="https://www.LeLienPourLeCompteGdevSurLeReaseau.com" icon={<Send  className="font-bold text-cyan-600" size={30}/>} color="bg-linear-to-r from-cyan-500 to-blue-500"/>
          <FollowButtons Network="Facebook" href="https://www.LeLienPourLeCompteGdevSurLeReaseau.com" icon={<Facebook  className="font-bold text-blue-700" size={30}/>} color="bg-linear-to-r from-blue-500 via-indigo-500 to-blue-700"/>
        </div>
      </div>


    </section>
  );
}
