import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface FollowButtonsProps {
  href: string,  
  icon: ReactNode,
  color: string,
  Network: string
}

export default function FollowButtons({href, icon, color, Network }: FollowButtonsProps) {
  return (
    <div className="">
    <a
    href={href} target="_blank" rel="noopener noreferrer"
    aria-label={`Suivre sur ${Network}`}
    role="button"  
    className={cn(
      "flex h-20 w-20 rounded-full  justify-center items-center bg-[#00001A] cursor-pointer relative group"
    )}>
      <div className={cn(
        "w-full h-full bg-black rounded-full flex items-center justify-center relative",
        "animate-background-rotate", color
      )}/>
        <div className="flex items-center justify-center absolute left-1/2  top-1/2 transform -translate-y-1/2 -translate-x-1/2  bg-muted dark:bg-black w-[75px] h-[75px] rounded-full group-hover:scale-110 transition-all delay-75 duration-300 ease-out">
          {icon}
        </div>
    </a>
    <p className='text-center pt-3 max-w-20 line-clamp-1'> <a href={href} aria-label={`Voir le profil sur ${Network}`}>{Network}</a> </p>
    </div>
  )
}
