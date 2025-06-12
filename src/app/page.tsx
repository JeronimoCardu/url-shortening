import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Shorter from "@/components/Shorter";
import StartedBtn from "@/components/StartedBtn";
import Stat from "@/components/Stat";
import Image from "next/image";

export default function Home() {
  const statistics = [
    {
      title: "Brand Recognition",
      paragraph:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      img: "/images/icon-brand-recognition.svg",
    },
    {
      title: "Detailed Records",
      paragraph:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      img: "/images/icon-detailed-records.svg",
    },
    {
      title: "Fully Customizable",
      paragraph:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      img: "/images/icon-fully-customizable.svg",
    },
  ];
  return (
    <>
      <NavBar />
      <main>
        <section className="desktop:ml-[12.5rem] desktop:grid desktop:grid-cols-[3fr_2fr] flex flex-col items-center space-y-4 overflow-x-hidden px-6">
          <Image
            className="desktop:py-13 desktop:row-start-1 desktop:col-start-2 desktop:m-0 my-25 translate-x-25 scale-150 sm:m-0 sm:scale-100 sm:pb-6"
            rel="preload"
            width={800}
            height={700}
            src={"/images/illustration-working.svg"}
            alt={"illustration"}
            priority
          />
          <div className="desktop:col-start-1 desktop:row-start-1 desktop:items-start flex flex-col items-center space-y-2">
            <h1 className="text-black-900 desktop:text-[5rem] desktop:leading-[5.625rem] desktop:text-left text-center text-[2.625rem] leading-[3rem] font-bold">
              More than just shorter links
            </h1>
            <p className="scroll-x-0 desktop:text-left text-center text-[1.125rem] text-gray-100">
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </p>
            <StartedBtn />
          </div>
        </section>
        <div className="relative mt-50 bg-[#EFF1F7]">
          <Shorter />
          <section className="w-sizeMobile desktop:w-sizeDesktop desktop:flex desktop:flex-col desktop:items-center mx-auto space-y-5 py-16 text-center">
            <h2 className="text-[1.75rem] font-bold">Advanced Statistics</h2>
            <p className="desktop:w-2/3 text-gray-100">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
            <aside className="desktop:flex desktop:gap-4 relative my-18 space-y-20">
              <div className="desktop:w-full desktop:left-0 desktop:h-2 bg-lightBlue desktop:-translate-x-0 desktop:top-1/2 desktop:-translate-y-1/2 absolute left-1/2 h-full w-2 -translate-x-1/2"></div>
              {statistics.map((stat, idx) => (
                <Stat key={idx} stat={stat} />
              ))}
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
