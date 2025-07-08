import React, { useEffect, useState } from "react";

export const Header = ({ site }) => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const handleOnMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsBackgroundVisible(true);
  };
  const handleOnMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsBackgroundVisible(false);
  };

  return (
    <>
      <div
        className={`fixed w-dvw h-dvh bg-black pointer-events-none transition-all ease-in-out ${isBackgroundVisible ? "opacity-50" : "opacity-0"}`}
      />

      <header className="flex items-center p-6 md:px-0 w-full max-w-[1216px] mx-auto">
        <a
          href={site}
          className="relative justify-self-start z-10 focus:invert transition-all group"
          onMouseOver={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
        >
          <img
            src="/tr3-logo.svg"
            alt="tr3"
            className="transition-[opacity] group-hover:opacity-0 w-18 h-18"
          />
          <img
            src="/tr3-logo-inverted.svg"
            alt="tr3"
            className="absolute top-0 transition-[opacity] opacity-0 group-hover:opacity-100 w-18 h-18"
          />
        </a>

        <nav className="flex-grow flex items-center justify-center">
          <ul>
            <li className="flex gap-10">
              <a href={site}>Home</a>
              <a href={site + "about"}>About</a>
              <a href={site + "articles"}>Articles</a>
            </li>
          </ul>
        </nav>

        <form
          action="/search"
          method="GET"
          role="search"
          className="relative flex items-center justify-between w-50 justify-self-end bg-[#F4F4F5] placeholder:text-[#A1A1AA] text-[#252621] rounded-[5px]"
        >
          <label className="sr-only" htmlFor="search">
            Search the site
          </label>
          <input
            type="search"
            className="w-full pl-4 pr-2 py-2 transition-all rounded focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
            name="query"
            placeholder="Search..."
          />
          <button
            className="cursor-pointer absolute flex items-center justify-center right-0 w-10 h-10 transition-all rounded focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
            type="submit"
          >
            <span className="icon-search" />
          </button>
        </form>
      </header>
    </>
  );
};
