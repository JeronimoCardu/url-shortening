"use client";
export default function StartedBtn() {
  return (
    <button
      onClick={() => (window.location.href = "#shorter")}
      className="desktop:hover:opacity-75 bg-lightBlue mt-8 cursor-pointer rounded-[1.75rem] border-0 p-[1rem_2rem] font-bold text-white outline-0"
    >
      Get Started
    </button>
  );
}
