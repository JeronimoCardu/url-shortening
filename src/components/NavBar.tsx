"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="desktop:items-center desktop:justify-self-center desktop:w-sizeDesktop relative flex w-full justify-between p-6">
      <Image src={"/images/logo.svg"} alt="Shortly" width={120} height={32} />
      <nav
        className={`${
          !openMenu && "desktop:items-center hidden"
        } w-sizeMobile desktop:flex desktop:flex-row desktop:justify-between desktop:text-[0.9375rem] desktop:relative desktop:top-0 desktop:bg-transparent absolute top-[5rem] z-20 flex flex-col gap-6 rounded-[10px] bg-purple-800 p-[2rem_1rem] text-[1.125rem]`}
      >
        <div className="desktop:mx-6 desktop:text-gray-100 desktop:flex-row desktop:items-center flex flex-col gap-6 text-center font-bold text-white">
          <Link className="desktop:hover:text-black" href="#">
            Features
          </Link>
          <Link className="desktop:hover:text-black" href="#">
            Pricing
          </Link>
          <Link className="desktop:hover:text-black" href="#">
            Resources
          </Link>
        </div>
        <hr className="desktop:hidden text-gray-100" />
        <div className="desktop:justify-self-end desktop:flex-row desktop:items-center flex flex-col gap-6">
          <Link
            className="desktop:hover:text-black desktop:text-gray-100 text-center font-bold text-white"
            href="#"
          >
            Login
          </Link>
          <Link
            className="desktop:px-6 desktop:hover:opacity-75 bg-lightBlue rounded-full py-3 text-center font-bold text-white"
            href="#"
          >
            SignUp
          </Link>
        </div>
      </nav>
      <button
        className="desktop:hidden cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <Image
          src={"/images/hamburger.png"}
          alt="Shortly"
          width={32}
          height={32}
        />
      </button>
    </header>
  );
}
