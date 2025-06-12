import Image from "next/image";

type Props = {
  stat: {
    title: string;
    paragraph: string;
    img: string;
  };
};

export default function Stat({ stat }: Props) {
  return (
    <article className="desktop:nth-[4]:translate-y-2/4 desktop:nth-[3]:translate-y-1/4 desktop:max-h-fit desktop:min-h-60 relative rounded-[10px] bg-white">
      <Image
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-800 p-3"
        width={60}
        height={60}
        src={stat.img}
        alt={""}
      />
      <div className="desktop:text-left flex flex-col space-y-4 p-[3rem_2rem_2rem] text-center">
        <h1 className="text-[1.375rem] font-bold">{stat.title}</h1>
        <p className="text-[0.9375rem] text-gray-100">{stat.paragraph}</p>
      </div>
    </article>
  );
}
