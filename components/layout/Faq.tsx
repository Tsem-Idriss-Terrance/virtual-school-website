import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useTranslations } from "next-intl";

export default function Faq() {
  const t = useTranslations("faq");

  const qr1 = [
    { q: t("qr1.q1"), r: t("qr1.r1") },
    { q: t("qr1.q2"), r: t("qr1.r2") },
    { q: t("qr1.q3"), r: t("qr1.r3") },
    { q: t("qr1.q4"), r: t("qr1.r4") },
    { q: t("qr1.q5"), r: t("qr1.r5") },
    { q: t("qr1.q6"), r: t("qr1.r6") },
  ];

  const qr2 = [
    { q: t("qr2.q1"), r: t("qr2.r1") },
    { q: t("qr2.q2"), r: t("qr2.r2") },
    { q: t("qr2.q3"), r: t("qr2.r3") },
    { q: t("qr2.q4"), r: t("qr2.r4") },
    { q: t("qr2.q5"), r: t("qr2.r5") },
    { q: t("qr2.q6"), r: t("qr2.r6") },
  ];

  return (
    <section className="lg:px-32 md:my-32 my-10 px-8" id="faq">
      <div className="title">
        <h2 className="scroll-m-20 py-5 sm:py-8 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          {t("title")}
        </h2>
      </div>
      <div className="acc grid md:grid-cols-2 place-content-center items-center md:gap-10">
        <Accordion type="single" collapsible>
          {qr1.map((element, index) => (
            <AccordionItem key={`qr1-${index}`} value={`qr1-${index}`}>
              <AccordionTrigger className="scroll-m-20 text-2xl font-semibold tracking-tight ">
                <span className="line-clamp-1">{element.q}</span>
              </AccordionTrigger>
              <AccordionContent className="leading-7 [&:not(:first-child)]:mt-6 text-xl">
                {element.r}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible>
          {qr2.map((element, index) => (
            <AccordionItem key={`qr2-${index}`} value={`qr2-${index}`}>
              <AccordionTrigger className="scroll-m-20 text-2xl font-semibold tracking-tight">
                <span className="line-clamp-1">{element.q}</span>
              </AccordionTrigger>
              <AccordionContent className="leading-7 [&:not(:first-child)]:mt-6 text-xl">
                {element.r}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
