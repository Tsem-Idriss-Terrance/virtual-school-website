import React from 'react'
import MarqueeCompanies from '../features/MarqueeCompanies'

export default function TrustesByCompanies() {
  return (
    <section className='py-5 md:py-9 border-t border-b'>
      <p className='font-bold text-lg text-center pb-5'>+De 80 structures de formations et entreprises sur notre platforme.</p>
      <MarqueeCompanies />
    </section>
  )
}
