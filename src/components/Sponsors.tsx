import Image from 'next/image'
import React from 'react'

function Sponsors() {
  return (
    <>
        <div className=' bg-[#030919] pt-7 pb-44 flex flex-col items-center justify-between w-screen space-y-20'>
            <div className='flex justify-start text-white w-[90%] text-3xl font-semibold'>
                <span>SPONSORED BY</span>
            </div>
            <Image src="/Sponsors.svg" height={900} width={900} alt='sponsors'/>
        </div> 
    </>
  )
}

export default Sponsors
