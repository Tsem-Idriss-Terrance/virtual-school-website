import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function TrustByStudents() {

    const trustingStudents = [
        {   id:1,
            image: "/avatars/noirTete2.jpeg"
        },
        {   id:2,
            image: "/avatars/noirTete10.jpeg"
        },
        {   id:3,
            image: "/avatars/noirTete3.jpeg"
        },
        {   id:4,
            image: "/avatars/noirTete4.jpeg"
        },
        {   id:5,
            image: "/avatars/noirTete5.jpeg"
        }
    ]

    const t = useTranslations("hero")

  return (
    <div className='flex items-center gap-3 flex-wrap'>
        <div className="desc text-left font-bold">
        {t('trustedBy')} <br />
        {t('moreThanStudents')}
        </div>
        <div className="avatars flex ">
        {
        trustingStudents.map((student)=>{
            return (
                <Image key={student.id} className='rounded-full w-11 h-11 mx-[-6px]  border-2 object-cover' height={50} width={50} alt={`photo de ${student.image}`} src={student.image}/>
            )
        })
        }
            <div className="rounded-full w-11 h-11 mx-[-10px]  border-2 bg-blue-500/90 flex items-center justify-center text-sm font-bold text-gray-300">100+</div>
        </div>
    </div>
  )
}
