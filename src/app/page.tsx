import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Shorter from '@/components/Shorter'
import StartedBtn from '@/components/StartedBtn'
import Stat from '@/components/Stat'
import Image from 'next/image'

export default function Home() {
  const statistics = [
    {
      title: 'Brand Recognition',
      paragraph:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
      img: '/images/icon-brand-recognition.svg',
    },
    {
      title: 'Detailed Records',
      paragraph:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      img: '/images/icon-detailed-records.svg',
    },
    {
      title: 'Fully Customizable',
      paragraph:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      img: '/images/icon-fully-customizable.svg',
    },
  ]
  return (
    <>
      <NavBar />
      <main>
        <section className='px-6 flex overflow-x-hidden flex-col items-center space-y-4'>
          <Image
            className='sm:scale-100 scale-150 my-25 translate-x-25'
            rel='preload'
            width={800}
            height={700}
            src={'/images/illustration-working.svg'}
            alt={'illustration'}
            priority
          />
          <h1 className='text-black-900 text-center leading-[3rem] text-[2.625rem] font-bold'>
            More than just shorter links
          </h1>
          <p className='text-[1.125rem] scroll-x-0 text-gray-100 text-center'>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <StartedBtn />
        </section>
        <div className='bg-[#EFF1F7] relative mt-50'>
          <Shorter />
          <section className='py-16 w-[calc(100%_-_3rem)] space-y-5 mx-auto text-center'>
            <h2 className='font-bold text-[1.75rem]'>Advanced Statistics</h2>
            <p className='text-gray-100'>
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
            <aside className='space-y-20 relative my-18'>
              <div className='w-2 h-full bg-lightBlue left-1/2 -translate-x-1/2 absolute'></div>
              {statistics.map((stat, idx) => (
                <Stat key={idx} stat={stat} />
              ))}
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
