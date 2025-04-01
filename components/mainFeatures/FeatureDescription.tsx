import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import React from 'react'

interface FeatureDescriptionProps{
    children: string,
    className?: string
}

export default function FeatureDescription({children, className}: FeatureDescriptionProps) {
  return (
    <p className={cn(" sm:text-xl mb-4 md:mb-6 lg:mb-8   text-justify max-w-md  md:gap-3", className)}>
        <Check className='text-green-500  inline rounded-full border-green-400 border mr-2 mb-2'/> 
        {children}</p>
  )
}
