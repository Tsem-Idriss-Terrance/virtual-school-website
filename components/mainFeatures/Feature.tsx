import React, { ReactNode } from 'react'

import FeatureTitle from './FeatureTitle'
import FeatureDescription from './FeatureDescription'
import FeatureCarousel  from './FeatureCarousel'
import { cn } from '@/lib/utils'


interface Feature{
    children: ReactNode,
    className?: string
}

export default function Feature({children, className}: Feature) {
  return (
    <section className={cn("my-4 md:my-9",className)} >{children}</section>
  )
}

Feature.Title = FeatureTitle
Feature.Description = FeatureDescription
Feature.Carousel = FeatureCarousel