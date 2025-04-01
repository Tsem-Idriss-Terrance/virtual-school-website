import React, { useRef } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { CheckCheck } from 'lucide-react'
import { Button } from '../ui/button'
import PricingPlan from '../features/PricingPlan'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


gsap.registerPlugin(useGSAP)

export default function Pricing() {
    const $follower = useRef<HTMLDivElement>(null)
    const $section = useRef<HTMLDivElement>(null)


    useGSAP(
        () => {
            const xTo = gsap.quickTo($follower.current, "x", {
                duration: 0.6,
                ease: "power3",
            });

            const yTo = gsap.quickTo($follower.current, "y", {
                duration: 0.6,
                ease: "power3",
            });

            const handleMouseMove = (e: MouseEvent) => {
                xTo(e.clientX)
                yTo(e.clientY)

                gsap.to($follower.current, {
                    opacity: 1,
                    duration: 0.2,
                })
            };

            const handleMouseLeave = () => {
                gsap.to($follower.current, {
                    opacity: 0,
                    duration: 0.3,
                });
            };

            $section.current?.addEventListener("mousemove", handleMouseMove)
            $section.current?.addEventListener("mouseleave", handleMouseLeave)

            return () => {
                $section.current?.removeEventListener("mousemove", handleMouseMove)
                $section.current?.removeEventListener("mouseleave", handleMouseLeave)
            };
        },
        { scope: $follower, revertOnUpdate: true }
    );

    return (
        <section ref={$section} className="mx-auto p-8 md:my-32 my-20 relative" id='pricing'>
            <div
                ref={$follower}
                className="pointer-events-none fixed left-0 top-0 aspect-square w-[50px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full will-change-transform opacity-0"
            >
                <div className="h-full w-full animate-spin bg-gradient-to-r from-cyan-700/75 to-amber-600/75" />
            </div>

            <div className="title text-center mb-8">
                <h3 className="text-4xl font-bold">Pricing</h3>
                <p className="text-lg text-gray-600">
                    Our prices are applied only for companies using our platform to handle their training.
                </p>
            </div>

            <div className="cards flex justify-evenly max-[520px]:justify-center  flex-wrap gap-5 mx-auto">
                <PricingPlan
                    title="Freemium"
                    price="Free"
                    features={["Main Features"]}
                    storage={["256Mb storage available"]}
                    className='card'
                />

                <PricingPlan
                    title="Medium"
                    price="23000Fcfa/month"
                    features={[
                        "Freemium Features",
                        "+ Advanced dashboard analysis",
                    ]}
                    storage={[
                        "Freemium Storage (256Mb)",
                        "+ Additional 256Mb storage available",
                    ]}
                    className='card'
                />

                <PricingPlan
                    title="Premium"
                    price="35000Fcfa/month"
                    features={[
                        "Medium Features",
                        "+ AI assistance",
                        "+ Student platform tracking",
                    ]}
                    storage={[
                        "Medium Storage (512Mb)",
                        "+ Additional 256Mb storage available",
                    ]}
                    className='card'
                />
            </div>
        </section>
    )
}
