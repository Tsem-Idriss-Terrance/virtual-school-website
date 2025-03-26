import React from 'react'
import NavLinks from './NavLinks'
import { Button } from '../ui/button'
import ThemeSwitcher from '../theme/ThemeSwitcher'
import { LangSwitcher } from '@/i18n/LangSwitcher'
import { useTranslations } from 'next-intl'

export default function Menu() {
  const t = useTranslations("header")
  return (
    <div className="flex justify-end items-end gap-4 sm:flex-wrap">
    <NavLinks />
    <div className="cta flex sm:gap-2 gap-1  ">
      <Button className="bg-green-700 font-bold max-[400px]:hidden hover:bg-green-500 text-white rounded-2xl">
        {t("getStarted")}
      </Button>
      <Button className="bg-blue-700 font-bold  max-[510px]:hidden hover:bg-blue-500 text-white rounded-2xl">
        {t("signIn")}
      </Button>
    </div>
    <div className="preferences flex gap-2 max-[620px]:hidden">
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  </div>
  )
}
