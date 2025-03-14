"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { SunMedium } from 'lucide-react'

export default function ThemeSwitcher() {
    const {theme, setTheme} = useTheme()
  return (
    <Button className='relative' onClick={()=>setTheme(theme === "light"? "dark":"light")}>
        <SunMedium className='absolute scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90'/>
        <SunMedium className='scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0'/>
        <span className='sr-only'>Theme changer</span>
    </Button>
  )
}
