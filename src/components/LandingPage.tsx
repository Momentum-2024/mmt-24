import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'

function LandingPage() {
  return (
    <>
      <div className="h-screen hero-bg flex items-center justify-center text-white">
        <Image src="/2024-cursive.svg" alt="2024" height={0} width={950} className="absolute"/>
        <div className="absolute text-8xl heading-txt blur-sm">
          MOMENTUM
        </div>
        <div className="absolute text-8xl heading-txt">
          MOMENTUM
        </div>
        <div className="h-32 w-14 bg-white fixed end-0 flex flex-col rounded-l-md items-center justify-evenly z-50">
          <FaInstagram size={27} color="black"/>
          <FiYoutube size={27} color="black"/>
        </div>
      </div>
    </>
  )
}

export default LandingPage
