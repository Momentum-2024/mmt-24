'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FiYoutube } from 'react-icons/fi'
import SVGAnim from './SVGAnim'

function LandingPage() {
  // useEffect(()=>{
  //   let a=window.document.querySelectorAll("#hero-svg-path")
  //   console.log(a[0].getTotalLength());
    
  // },[])
  return (
    <>
      <div className="h-screen w-screen hero-bg flex items-center justify-center text-white">
        <SVGAnim></SVGAnim>
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
