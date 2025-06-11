type Props = {
  link: {
    link: string
    linkShorted: string
  }
}

export default function LinkShorter({ link }: Props) {
  return (
    <div className='bg-white w-[calc(100%_-_3rem)] mx-auto rounded-[10px]'>
      <p className='p-3'>{link.link}</p>
      <hr className='text-gray-50' />
      <section className='p-3 space-y-3'>
        <p className='text-lightBlue'>{link.linkShorted}</p>
        <button className='bg-lightBlue font-bold w-full border-0 outline-0 py-2 text-white cursor-pointer rounded-[5px]'>
          Copy
        </button>
      </section>
    </div>
  )
}
