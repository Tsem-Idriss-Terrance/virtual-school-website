import { cn } from '@/lib/utils'
import React from 'react'

interface FeatureDescriptionProps{
    children: string,
    className?: string
}

export default function FeatureDescription({children, className}: FeatureDescriptionProps) {
  return (
    <p className={cn("text-gray-700 mb-2", className)}>{children}</p>
  )
}
