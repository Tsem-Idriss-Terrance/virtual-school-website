import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div className="logo ">
    <Link href="/" className="flex items-end">
      <Image
        width={50}
        height={50}
        src={"/vs_logo.png"}
        alt="Logo du site"
      />
      <h1 className="whitespace-nowrap mr-4 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
        Virtual Skull
      </h1>
    </Link>
  </div>
  )
}
