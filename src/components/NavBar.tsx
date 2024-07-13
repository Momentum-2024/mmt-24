import React from 'react'
import SignInButton from './SignInButton'
import Image from 'next/image'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='z-10 flex text-white w-[100%] justify-between px-24 py-4 montserrat-light fixed'>
      <Image src="/Logo.png" alt='mmt' height={50} width={50}/>
      <div className='flex items-center space-x-10 font-light'>
        <Link href="/" className='hover:font-normal cursor-pointer'>
          <div>Home</div>
          <hr />
        </Link>
        <Link href="/events" className='hover:font-normal cursor-pointer'>Events</Link>
        <Link href="/" className='hover:font-normal cursor-pointer'>Faqs</Link>
        <SignInButton/>
      </div>
    </div>
  )
}

export default NavBar
