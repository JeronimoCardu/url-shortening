"use client";

import { useState } from "react";
import LinkShorted from "./LinkShorted";
export type LinkData = {
  link: string;
  linkShorted: string;
};
export default function Shorter() {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [copy, setCopy] = useState<string>("");

  const shorterURL = async (urlToShort: string) => {
    const data = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: urlToShort }),
    });

    if (!data.ok) {
      setError(true);
      return;
    } else setError(false);

    const response = await data.json();
    setLinks([
      {
        link: urlToShort,
        linkShorted: `${response.result_url}`,
      },
      ...links,
    ]);
  };

  return (
    <>
      <form
        id="shorter"
        className="desktop:justify-center desktop:w-sizeDesktop desktop:py-12 desktop:flex-row w-sizeMobile desktop:bg-[url(/images/bg-shorten-desktop.svg)] absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-[10px] bg-purple-800 bg-[url(/images/bg-shorten-mobile.svg)] p-[1rem_1.5rem]"
        onSubmit={(e) => {
          e.preventDefault();
          shorterURL(value);
        }}
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Shorten a link here..."
          className={`${
            error ? "border-red-500" : "border-transparent"
          } desktop:w-8/10 rounded-[5px] border-2 bg-white p-4 text-[1.125rem] outline-0`}
          required
        />
        <button
          type="submit"
          className="bg-lightBlue desktop:px-4 text-nold curosr-pointer cursor-pointer rounded-[5px] py-4 text-[1.125rem] font-bold text-white"
        >
          Shorten It!
        </button>
      </form>
      <div className="space-y-6 pt-25">
        {links.length > 0 &&
          links.map((link, idx) => (
            <LinkShorted
              key={idx}
              link={link.link}
              linkShorted={link.linkShorted}
              copy={copy}
              setCopy={setCopy}
            />
          ))}
      </div>
    </>
  );
}
