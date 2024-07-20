'use client'
import AboutEvent from '@/components/AboutEvent'
import Payment from '@/components/Register'
import { useState } from 'react'

function Page({params}) {
  const [proceedToPay, setProceedToPay]= useState(false);
  return (
    <div className='event-bg min-h-screen'>
      <div className=' text-white z-30 flex justify-around pb-8 items-start px-16 pt-[110px] h-full'>
        {
          !proceedToPay?
          <AboutEvent setProceedToPay={setProceedToPay}/>
          :
          <Payment/>
        }
      </div>
    </div>
  )
}

export default Page
