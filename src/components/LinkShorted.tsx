"use client";

import { LinkData } from "./Shorter";
import { Dispatch, SetStateAction } from "react";

type Props = LinkData & {
  copy: string;
  setCopy: Dispatch<SetStateAction<string>>;
};

export default function LinkShorter({
  link,
  linkShorted,
  copy,
  setCopy,
}: Props) {
  const copyShortLink = () => {
    navigator.clipboard.writeText(linkShorted);
    setCopy(linkShorted);
  };
  return (
    <div className="desktop:px-4 desktop:flex desktop:items-center desktop:justify-between desktop:w-sizeDesktop w-sizeMobile mx-auto rounded-[10px] bg-white">
      <p className="desktop:w-1/2 p-3 break-words">{link}</p>
      <hr className="desktop:hidden text-gray-50" />
      <section className="desktop:flex desktop:items-center desktop:gap-4 space-y-3 p-3">
        <p className="text-lightBlue desktop:m-0">{linkShorted}</p>
        <button
          onClick={() => copyShortLink()}
          className={`${copy == linkShorted ? "bg-purple-800" : "bg-lightBlue"} desktop:px-6 w-full cursor-pointer rounded-[5px] border-0 py-2 font-bold text-white outline-0 hover:bg-purple-600`}
        >
          {copy == linkShorted ? "Copied!" : "Copy"}
        </button>
      </section>
    </div>
  );
}
