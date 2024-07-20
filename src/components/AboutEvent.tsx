import React from 'react'
import EventDetails from './EventDetails'
import Image from 'next/image'

function AboutEvent({setProceedToPay}) {
  return (
    <>
        <div className='flex flex-col h-4/5 w-4/6 space-y-5 z-30 p-10 rounded-lg bg-[#030919ae]'>
            <EventDetails/>
        </div>
        <div className='sticky top-[110px]'>
            <div className='space-y-3'>
            <Image src="/event-poster.png" height={300} width={300} alt='p1' className='z-20 rounded-sm'/> 
            <button 
                className='bg-green-500 w-full px-5 py-2 rounded-sm hover:bg-green-600'
                onClick={()=>{setProceedToPay(true)}}
            >Register !</button>
            </div>
        </div>
    </>
  )
}

export default AboutEvent
