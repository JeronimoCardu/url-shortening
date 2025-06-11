import Image from 'next/image'

type Props = {
  stat: {
    title: string
    paragraph: string
    img: string
  }
}

export default function Stat({ stat }: Props) {
  return (
    <article className='desktop:nth-[4]:translate-y-2/4 desktop:nth-[3]:translate-y-1/4 desktop:max-h-fit desktop:min-h-60 relative bg-white rounded-[10px]'>
      <Image
        className='absolute -translate-y-1/2 rounded-full bg-purple-800 p-3 left-1/2 -translate-x-1/2'
        width={60}
        height={60}
        src={stat.img}
        alt={''}
      />
      <div className='flex flex-col desktop:text-left p-[3rem_2rem_2rem]  space-y-4 text-center'>
        <h1 className='text-[1.375rem] font-bold'>{stat.title}</h1>
        <p className='text-[0.9375rem] text-gray-100'>{stat.paragraph}</p>
      </div>
    </article>
  )
}
