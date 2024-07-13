import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='bg-[#030919] w-screen flex justify-center items-center p-20 -mt-2'>
      <div className='flex text-white items-center justify-evenly'>
        <Image src="/logo-ncu.svg" height={200} width={200} alt='NCU'></Image>
        <div className='w-3/5 flex flex-col space-y-3'>
            <div className='space-x-2 text-2xl font-semibold'>
                <span >
                    POWERED 
                </span>
                <span className='by text-transparent'>BY</span>
            </div>
            <span className='text-4xl font-bold'>THE NORTHCAP UNIVERSITY</span>
            <span className='leading-relaxed text-lg mb-4 text-center sm:text-left'>
                Momentum is a 2-day long festival organized in the month of November. Momentum is the university fest where we provide the student community from various Universities and Colleges with velocity. This year Momentum 2024, the 26th Edition is planned for 23rd-24th October.
            </span>
        </div>
      </div>
    </div>
  )
}

export default About
