import Image from 'next/image'
import React from 'react'

function TopEvents() {
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
        <div className='space-y-4'>
          <Image src="/event-poster.png" height={400} width={350} alt='p1'/>
          <Image src="/event-poster.png" height={400} width={350} alt='p1'/>
        </div>
        <div className='space-y-4'>
          <Image src="/event-poster1.png" height={400} width={350} alt='p1'/>
          <Image src="/event-poster1.png" height={400} width={350} alt='p1'/>
        </div>
        <div className='space-y-3'>
          <Image src="/event-poster2.png" height={400} width={350} alt='p1'/>
          <Image src="/event-poster2.png" height={400} width={350} alt='p1'/>
        </div>
        <div className='space-y-2'>
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
