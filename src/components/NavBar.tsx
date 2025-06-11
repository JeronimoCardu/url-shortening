'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <header className='relative w-full p-6 flex justify-between'>
      <Image src={'/images/logo.svg'} alt='Shortly' width={120} height={32} />
      <nav
        className={`${
          openMenu && 'hidden'
        } text-[1.125rem] absolute flex flex-col bg-purple-800 rounded-[10px] gap-6 w-[calc(100%_-_3rem)] top-[5rem] z-20 p-[2rem_1rem]`}>
        <Link className='font-bold text-white text-center' href='#'>
          Features
        </Link>
        <Link className='font-bold text-white text-center' href='#'>
          Pricing
        </Link>
        <Link className='font-bold text-white text-center' href='#'>
          Resources
        </Link>
        <hr className='text-gray-100' />
        <div className='flex flex-col gap-6'>
          <Link className='font-bold text-white text-center' href='#'>
            Login
          </Link>
          <Link
            className='font-bold bg-lightBlue rounded-full py-3 text-white text-center'
            href='#'>
            SignUp
          </Link>
        </div>
      </nav>
      <button onClick={() => setOpenMenu(!openMenu)}>
        <Image
          src={'/images/hamburger.png'}
          alt='Shortly'
          width={32}
          height={32}
        />
      </button>
    </header>
  )
}
