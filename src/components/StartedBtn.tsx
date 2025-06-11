'use client'
export default function StartedBtn() {
  return (
    <button
      onClick={() => (window.location.href = '#shorter')}
      className='cursor-pointer rounded-[1.75rem] mt-8 p-[1rem_2rem] desktop:hover:opacity-75 bg-lightBlue border-0 outline-0 text-white font-bold '>
      Get Started
    </button>
  )
}
