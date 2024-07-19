import EventDetails from '@/components/EventDetails'
import Image from 'next/image'
import React from 'react'

function page({params}) {
  return (
    <div className='events-bg min-h-screen'>
      <div className=' text-black z-60 flex justify-around pb-8 items-start px-16 pt-[110px] h-full'>
        <div className='flex flex-col h-4/5 w-4/6 space-y-5 z-30 p-10 rounded-lg text-white bg-[#030919ae]'>
          <EventDetails/>
        </div>
        <div className='sticky top-[110px]'>
          <div className='space-y-3'>
            <Image src="/event-poster.png" height={300} width={300} alt='p1' className='z-20 rounded-sm'/> 
            <button className='bg-green-500 w-full px-5 py-2 rounded-sm text-white hover:bg-green-600'>Register !</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
