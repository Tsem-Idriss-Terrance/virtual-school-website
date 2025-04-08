import React from 'react'
import MarqueeCompanies from '../features/MarqueeCompanies'
import { useTranslations } from 'next-intl'

export default function TrustesByCompanies() {

  const t = useTranslations("hero")
  return (
    <section className='py-5 md:py-9 border-t border-b'>
      <p className='font-bold text-lg text-center pb-5'>{t("moreThan80Organizations")}</p>
      <MarqueeCompanies />
    </section>
  )
}
