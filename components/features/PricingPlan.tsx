import React, { useRef } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { CheckCheck } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface PricingPlanProps {
  title: string;
  price: string;
  features: string[];
  storage: string[];
  className?: string;
}

export default function PricingPlan({
  title,
  price,
  features,
  storage,
  className = "",
}: PricingPlanProps) {

  return (
    <Card
      className={cn("w-[85%] min-w-[280px] sm:w-[420px] h-[700px]  flex justify-evenly transition delay-150 duration-300 ease-out  hover:border hover:border-ring hover:shadow-2xl  shadow-accent", className)}
    >

      <CardHeader className="text-center font-semibold text-2xl border-b border-green-400">
        {title}
      </CardHeader>

      <CardContent>
        <div className="price py-4 text-center">
          <p className="scroll-m-20 text-2xl font-semibold tracking-tight text-blue-600">{price}</p>
        </div>

        <div className="feature py-6">
          <h4 className="mb-3 text-xl font-medium">Features</h4>
          {features.map((feature, index) => (
            <p key={index} className="pl-8">
              <span>
                <CheckCheck className="inline text-green-500" />
              </span>{" "}
              {feature}
            </p>
          ))}
        </div>

        <div className="storage py-6">
          <h4 className="mb-3 text-xl font-medium">Storage</h4>
          {storage.map((item, index) => (
            <p key={index} className="pl-8">
              <span>
                <CheckCheck className="inline text-green-500" />
              </span>{" "}
              {item}
            </p>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="bg-blue-500 hover:bg-blue-500/85 w-full font-medium text-xl text-white cursor-pointer">
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
}
