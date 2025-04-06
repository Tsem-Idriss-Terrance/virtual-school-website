import React, { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

//import adobe from "/companies/adobe.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { twJoin } from "tailwind-merge";

interface MarqueeCompaniesProps {
  isReversed?: boolean;
  className?: string;
}

export default function MarqueeCompanies({
  isReversed = false,
  className,
}: MarqueeCompaniesProps) {
  const companiesLogo = [
    {
      id: 1,
      src: "/companies/adobe.png",
    },
    {
      id: 2,
      src: "/companies/dropBox.png",
    },
    {
      id: 3,
      src: "/companies/figma.png",
    },
    {
      id: 4,
      src: "/companies/ihc.png",
    },
    {
      id: 5,
      src: "/companies/slack.png",
    },
    {
      id: 6,
      src: "/companies/miro.png",
    },
    {
      id: 7,
      src: "/companies/lucid.png",
    },
    {
      id: 8,
      src: "/companies/mercedes.png",
    },
  ];

  const ELEMENTS = [...companiesLogo, ...companiesLogo, ...companiesLogo]
  const marquee = useRef<HTMLDivElement>(null)
  const timeline = useRef<GSAPTimeline>(null)
  const timelineTweenScale = useRef<GSAPTween>(null)

  gsap.registerPlugin(useGSAP);
  useGSAP(
    ()=>{
        const scrollHorizontal = ()=>{
            timeline.current?.kill()
            gsap.set(
                marquee.current,
                {
                    xPercent: isReversed? -50 : 0
                }
            )
            timeline.current = gsap
            .timeline({
                defaults: {ease: "none", repeat: -1}
            })
            .to(marquee.current, {
                xPercent: isReversed? 0 : -50,
                duration: 20
            })
            .set(marquee.current, {xPercent: 0})
        }
        scrollHorizontal()
    },
    {
        dependencies: [isReversed]
    }
 
  )

const onPointerEnter =()=>{
  if (!timeline.current) return 
  timelineTweenScale.current = gsap.to(timeline.current, {timeScale: 0.25, duration: 0.4})
}
const onPointerLeave =()=>{
  if (!timeline.current) return 
  timelineTweenScale.current = gsap.to(timeline.current, {timeScale: 1, duration: 0.2})
}

const list = useMemo(
    ()=>(
      <div className="flex w-fit items-center gap-10" ref={marquee}>
        {ELEMENTS.map((logo, index) => {
          const isLast = index === ELEMENTS.length - 1
            return (
              <div key={index} className={twJoin(" relative flex shrink-0 items-center justify-center", isLast && "mr-10")}>
              <Image width={100} height={100} alt="companies logo " src={logo.src} className="object-cover w-16 h-16" />
              </div>
            );
          })}
          </div>
    )
    , []
)

  return (
    <div className={cn("w-full overflow-x-hidden   ", className)}
    onPointerEnter={onPointerEnter}
    onPointerLeave={onPointerLeave}
    style={{
      maskImage: "linear-gradient(to right, transparent 0%, black 25%, transparent 100%"
    }}
    >
      <div className="flex items-center w-full  " >
        {list}

      </div>
    </div>
  );
}
