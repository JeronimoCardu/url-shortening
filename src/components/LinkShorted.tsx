type Props = {
  link: {
    link: string
    linkShorted: string
  }
}

export default function LinkShorter({ link }: Props) {
  return (
    <div className='bg-white desktop:px-4 desktop:flex desktop:items-center desktop:justify-between desktop:w-sizeDesktop w-sizeMobile mx-auto rounded-[10px]'>
      <p className='p-3'>{link.link}</p>
      <hr className='desktop:hidden text-gray-50' />
      <section className='p-3 desktop:flex desktop:items-center desktop:gap-4 space-y-3'>
        <p className='text-lightBlue desktop:m-0'>{link.linkShorted}</p>
        <button className='bg-lightBlue hover:bg-purple-600 font-bold w-full border-0 desktop:px-6 outline-0 py-2 text-white cursor-pointer rounded-[5px]'>
          Copy
        </button>
      </section>
    </div>
  )
}
