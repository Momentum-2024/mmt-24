'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image'
import React, { useEffect } from 'react'

function About() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-sec",
        start: "top 550px", // when the top of the trigger hits the top of the viewport
        end: "bottom 300px",
        // markers: true,
        scrub: 0
      },
    });

    tl.fromTo(".ncu-logo",
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1
      }
    )

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-sec",
        start: "top 550px", // when the top of the trigger hits the top of the viewport
        end: "bottom 300px",
        // markers: true,
        scrub: 0
      },
    });

    t2.fromTo(".about-text-anim",
      {
        y:-10,
        opacity: 0
      },
      {
        y:0,
        opacity: 1,
        duration: 1
      }
    )
  },[])
  return (
    <div className='bg-[#030919] w-screen flex justify-center items-center p-20 -mt-2'>
      <div className='flex text-white items-center justify-evenly about-sec'>
        <Image src="/logo-ncu.svg" height={200} width={200} alt='NCU' className='ncu-logo'></Image>
        <div className='w-3/5 flex flex-col space-y-3'>
            <div className='space-x-2 text-2xl font-semibold about-text-anim'>
                <span >
                    POWERED 
                </span>
                <span className='by text-transparent'>BY</span>
            </div>
            <span className='text-4xl font-bold about-text-anim'>THE NORTHCAP UNIVERSITY</span>
            <span className='leading-relaxed text-lg mb-4 text-center sm:text-left about-text-anim'>
                Momentum is a 2-day long festival organized in the month of November. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2024, the 26th Edition is planned for 23rd-24th October.
            </span>
        </div>
      </div>
    </div>
  )
}

export default About
