import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface FeatureTitleProps{
    children: ReactNode
    className?: string
}

export default function FeatureTitle({children, className}: FeatureTitleProps) {
  return (
    <h3 className={cn("text-2xl font-medium mb-4 md:mb-6 ", className)}>{children}</h3>
  )
}
