import Image from 'next/image'
import Link from 'next/link'

function NotFound() {
  return (
    <div className='h-screen bg-[#030919] text-white z-50 absolute w-screen flex flex-col justify-center items-center space-y-6'>
      <div className='text-[10rem] flex items-center -space-x-10'>
        <span>4</span>
        <span><Image src="/mercury.svg" height={300} width={300} alt='0'/></span>
        <span>4</span>
      </div>
      <div className='text-lg'>We can not find this page for you :(</div>
      <Link href="/">
        <div className='underline cursor-pointer'>
          Try this Instead :)
        </div>
      </Link>
    </div>
  )
}

export default NotFound
