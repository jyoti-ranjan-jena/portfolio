import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='w-full flex px-[5px] md:px-[30px] py-5 justify-between items-center'>
      <div>
        <Link href={"/"} className='text-2xl font-bold'>
          My Portfolio
        </Link>
      </div>
      <div className='space-x-4'>
        <Link href={"/"} className='text-xl hover:text-2xl hover:text-green-500 transition-all duration-300'>Home</Link>
        <Link href={"/projects"} className='text-xl hover:text-2xl hover:text-green-500 transition-all duration-300'>Projects</Link>
        <Link href={"/experience"} className='text-xl hover:text-2xl hover:text-green-500 transition-all duration-300'>Experience</Link>
        <Link href={"/contact"} className='text-xl hover:text-2xl hover:text-green-500 transition-all duration-300'>Contact Me</Link>
      </div>
    </div>
  )
}

export default Page