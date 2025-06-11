'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  return (
    <header className='relative desktop:items-center w-full desktop:justify-self-center desktop:w-sizeDesktop p-6 flex justify-between'>
      <Image src={'/images/logo.svg'} alt='Shortly' width={120} height={32} />
      <nav
        className={`${
          !openMenu && ' desktop:items-center hidden'
        } text-[1.125rem] w-sizeMobile desktop:flex desktop:flex-row desktop:justify-between desktop:text-[0.9375rem]  desktop:relative  absolute flex flex-col bg-purple-800 rounded-[10px] gap-6  desktop:top-0 desktop:bg-transparent  top-[5rem] z-20 p-[2rem_1rem]`}>
        <div className='desktop:mx-6 font-bold desktop:text-gray-100  text-white text-center desktop:flex-row flex flex-col gap-6 desktop:items-center'>
          <Link className='desktop:hover:text-black' href='#'>
            Features
          </Link>
          <Link className='desktop:hover:text-black' href='#'>
            Pricing
          </Link>
          <Link className='desktop:hover:text-black' href='#'>
            Resources
          </Link>
        </div>
        <hr className='text-gray-100 desktop:hidden' />
        <div className='desktop:justify-self-end flex desktop:flex-row desktop:items-center flex-col gap-6'>
          <Link
            className='font-bold desktop:hover:text-black desktop:text-gray-100 text-white text-center'
            href='#'>
            Login
          </Link>
          <Link
            className='font-bold desktop:px-6 desktop:hover:opacity-75 bg-lightBlue rounded-full py-3 text-white text-center'
            href='#'>
            SignUp
          </Link>
        </div>
      </nav>
      <button
        className='desktop:hidden cursor-pointer'
        onClick={() => setOpenMenu(!openMenu)}>
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
