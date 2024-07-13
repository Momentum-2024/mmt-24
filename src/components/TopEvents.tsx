import Image from 'next/image'
import React from 'react'

function TopEvents() {
  return (
    <div className='min-h-screen bg-[#905aaa] flex flex-col justify-between -mt-2 '>
      <Image src="/featured-1.svg" width={100} height={100} alt='' className='w-screen'/>
      
      <div className='px-6'> 
        
      </div>
      
      <Image src="/featured-2.svg" width={100} height={100} alt='' className='w-screen '/>
      
    </div>
  )
}

export default TopEvents
