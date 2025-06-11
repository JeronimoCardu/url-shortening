'use client'

import { useState } from 'react'
import LinkShorted from './LinkShorted'

export default function Shorter() {
  const [links, setLinks] = useState([
    {
      link: 'www.frontendmenotr.io',
      linkShorted: 'relink',
    },
    {
      link: 'www.frontendmenotr.io',
      linkShorted: 'relink',
    },
    {
      link: 'www.frontendmenotr.io',
      linkShorted: 'relink',
    },
  ])
  return (
    <>
      <form
        id='shorter'
        className='flex desktop:justify-center desktop:w-sizeDesktop desktop:py-12 desktop:flex-row w-sizeMobile absolute left-1/2 -translate-x-1/2 -translate-y-1/2 gap-4 flex-col p-[1rem_1.5rem] rounded-[10px] bg-purple-800 desktop:bg-[url(/images/bg-shorten-desktop.svg)] bg-[url(/images/bg-shorten-mobile.svg)]'
        onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          placeholder='Shorten a link here...'
          className='bg-white desktop:w-8/10 outline-0 text-[1.125rem] p-4 rounded-[5px]'
          required
        />
        <button
          type='submit'
          className='bg-lightBlue desktop:px-4 cursor-pointer font-bold text-[1.125rem] rounded-[5px] py-4 text-nold text-white curosr-pointer'>
          Shorten It!
        </button>
      </form>
      <div className='space-y-6 pt-25'>
        {links.length > 0 &&
          links.map((link, idx) => <LinkShorted key={idx} link={link} />)}
      </div>
    </>
  )
}
