'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function TopEvents() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    gsap.fromTo(".go-dn-1",{
      y: -100,
    },
    {
      y: 100,
      duration: 6, 
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
    )
    gsap.fromTo(".go-dn-2",{
      y: -50,
    },
    {
      y: 50,
      duration: 3, 
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
    )
    gsap.fromTo(".go-up-1",{
      y: 50,
    },
    {
      y: -100,
      duration: 6, 
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
    )
    gsap.fromTo(".go-up-2",{
      y: 20,
    },
    {
      y: -50,
      duration: 3, 
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    }
    )
  },[])
  return (
    <div className='min-h-screen w-screen flex flex-col justify-between -mt-2 z-50'>
      <div className='flex items-center'>
        {/* <span className='absolute text-white ml-10 text-7xl'>FEATURED</span> */}
        <div className='flex absolute w-screen justify-between'>
          <Image src="/Planet.svg" width={300} height={500} alt='' className=' mt-32'/>
          <Image src="/megaphone.svg" width={400} height={500} alt='' className='-mt-36 align-bottom -mr-20'/>
        </div>
        <Image src="/featured-1.svg" width={100} height={100} alt='' className='w-screen '/>
      </div>
      
      <div className='px-6 flex space-x-4 justify-between bg-[#905aaa] -mt-36 -z-10 '> 
        <div className='space-y-4 go-dn-1'>
          <Image src="/event-poster.png" height={400} width={350} alt='p1'/>
          <Image src="/event-poster.png" height={400} width={350} alt='p1'/>
        </div>
        <div className='space-y-4 go-up-1'>
          <Image src="/event-poster1.png" height={400} width={350} alt='p1'/>
          <Image src="/event-poster1.png" height={400} width={350} alt='p1'/>
        </div>
        <div className='space-y-3 go-dn-2'>
          <Image src="/event-poster2.png" height={400} width={350} alt='p1'/>
          <Image src="/event-poster2.png" height={400} width={350} alt='p1'/>
        </div>
        <div className='space-y-2 go-up-2'>
          <Image src="/event-poster3.png" height={400} width={350} alt='p1'/>
          <Image src="/event-poster3.png" height={400} width={350} alt='p1'/>
        </div>
      </div>
      
      <div className='flex items-center justify-end -mt-96'>
        <Image src="/featured-2.svg" width={100} height={100} alt='' className='w-screen'/>
        <button className='py-3 px-10 bg-gray-200 hover:bg-white absolute mr-20 text-xl rounded-[2rem] mb-10'>
          SEE ALL
        </button>
      </div>
    </div>
  )
}

export default TopEvents
