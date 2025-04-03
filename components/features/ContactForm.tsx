import React from 'react'
import "@gdev-org/gdev_form_validator"
import { cn } from '@/lib/utils'
import { buttonVariants } from '../ui/button'


export default function ContactForm() {
  return (
    <div className="service flex justify-center">
    <form
        id="myForm"
        lang="en"
        className="w-full md:!w-[700px] "
        form_validator_design="ifta-label"
        response_exclude='["pToggle"]'
      >
        <div className="flex gap-2 max-[650px]:flex-wrap  w-full my-2">
          <div className="gdev-field-wrapper flex-1/2 flex-grow-1 ">
            <div className="capsule">
              <label htmlFor="nom" className='font-semibold  -my-3'>Nom ou societe</label>
              <input
                type="text"
                className=" !border-t-0  !border-l-0 !border-r-0 border-none  text-light mt-4"
                id="nom"
                placeholder="Kenfack Nkrumah"
                name="nom"
                gdev_props='{"name":"nom","type":"text", "minChar": "2"}'
              />
            </div>
            <span className="gdev-error"/>
          </div>

          <div className="gdev-field-wrapper flex-1/2 flex-grow-1  ">
            <div className="capsule">
              <label htmlFor="mail" className='font-semibold -my-3'>Adress e-mail</label>
              <input
                type="email"
                className=" !border-t-0  !border-l-0 !border-r-0 border-none focus:outline-0 outline-0  mt-4 "
                placeholder="Nkrumah@mail.com"
                id="mail"
                name="mail"
                gdev_props='{"name":"mail","type":"email", "provider":"any"}'
              />
            </div>
                      <span className="gdev-error"/>
          </div>
        </div>

        <div className="flex gap-2 max-[650px]:flex-wrap flex-1 w-full my-4">
          <div className="gdev-field-wrapper flex-1/2 flex-grow-1">
            <div className="capsule">
              <label htmlFor="tel" className='font-semibold -my-3'>Numero de telephone</label>
              <input
                type="tel"
                className=" !border-t-0  !border-l-0 !border-r-0  border-secondary mt-4 text-light"
                id="tel"
                placeholder="+23765498xxxx"
                name="tel"
                gdev_props='{"name":"tel","type":"tel", "country": "any"}'
              />
            </div>
          <span className="gdev-error"/>
          </div>

          <div className="gdev-field-wrapper flex-1/2 flex-grow-1">
            <div className="capsule">
              <label htmlFor="budget" className='font-semibold -my-3'>Budget (fcfa)</label>
              <input
                type="number"
                className=" !border-t-0  !border-l-0 !border-r-0 br-0 border-secondary mt-4 text-light"
                placeholder="800000"
                id="budget"
                name="budget"
                gdev_props='{"name":"budget","type":"number", "min":"20000"}'
              />
            </div>
            <span className="gdev-error"/>

          </div>
        </div>

        <div className="gdev-field-wrapper w-full my-4">
          <div className="capsule">
            <label htmlFor="entreprise" className='font-semibold -my-3'>Entreprise</label>
            <input
              type="text"
              placeholder="Societe Nkrumah"
              className=" !border-t-0  !border-l-0 !border-r-0 w-full border-secondary text-light mt-4"
              id="entreprise"
              name="entreprise"
              gdev_props='{"name":"entreprise","type":"text", "minChar": "3"}'
            />
          </div>
          <span className="gdev-error"/>
        </div>

        <div className="gdev-field-wrapper my-4">
          <div className="capsule">
            <label htmlFor="message" className='font-semibold -my-3'>Message</label>
            <textarea
              type="text "
              placeholder="Salut, Veuillez nous laisser un message concernant votre preoccupation sur virtual Skull"
              id="message"
              className="py-4 h-[70px] !border-t-0  !border-l-0 !border-r-0 br-0 border-secondary sb-i text-light mt-4"
              name="message"
              gdev_props='{"name":"message","type":"text", "minChar": "5", "minWord":"3"}'
            />
          </div>
          <span className="gdev-error"/>
        </div>

        <div className="mt-3 flex justify-center">
          <button type="submit" className={cn(buttonVariants(), "bg-green-600 font-medium text-lg text-white hover:bg-blue-500 transition-all delay-300 ease-out origin-left cursor-pointer ")}>
            Envoyer ma demande
          </button>
        </div>
      </form>
    </div>
  )
}
