import React, { useState } from "react";

type HeaderProps = {
  site: string;
};

export const Header = ({ site }: HeaderProps) => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const [search, setSearch] = useState("");
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);

  const handleOnMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsBackgroundVisible(true);
  };
  const handleOnMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsBackgroundVisible(false);
  };

  return (
    <>
      {/* todo: convert overlay into a React hook */}
      <div
        className={`fixed left-0 w-dvw h-screen bg-black pointer-events-none transition-all z-100 ease-in-out ${isBackgroundVisible ? "opacity-50" : "opacity-0"}`}
      />

      <header className="relative flex p-4 gap-6">
        <a
          href={site}
          className="relative items-center w-12 justify-self-start cursor-pointer transition-all group focus:online-none focus:ring-0"
          onMouseOver={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
        >
          <img
            src="/tr3-logo.svg"
            alt="tr3"
            className="w-12 h-12 md:w-18 md:h-18 transition-[opacity] group-focus:opacity-0 group-hover:opacity-0"
          />
          <img
            src="/tr3-logo-inverted.svg"
            alt="tr3"
            className="absolute top-0 w-12 h-12 md:w-18 md:h-18 transition-[opacity] opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus:ring-2 group-focus:ring-[#252621] group-focus:ring-offset-2 rounded"
          />
        </a>

        <nav
          aria-label="Mobile navigation with featured links"
          className="flex flex-grow items-center justify-center md:hidden"
        >
          <ul className="flex gap-5 md:gap-6">
            <li>
              <a
                className="cursor-pointer py-1 rounded transition-all focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
                href={site}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer py-1 rounded transition-all focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
                href={site}
              >
                Articles
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer py-1 rounded transition-all focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
                href={`${site}about`}
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        <form
          action="/search"
          method="GET"
          role="search"
          className="flex "
          // className="h-12 right-4 items-center justify-between w-full bg-[#F4F4F5] placeholder:text-[#fff] text-[#252621]"
        >
          <label className="sr-only" htmlFor="search">
            Search the site
          </label>
          <input
            type="search"
            autoFocus={isSearchFormVisible}
            tabIndex={isSearchFormVisible ? 0 : -1}
            className={`absolute right-4 top-4 h-12 z-10 bg-[#F4F4F5] p-4 transition-all ease-in-out ${isSearchFormVisible ? "opacity-100 w-[calc(100vw-80px)]" : "opacity-0 w-12 pointer-events-none"} focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2 focus:rounded`}
            name="query"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            placeholder="Search..."
          />

          {/* todo: add overlay on open */}
          <button
            aria-label="Open search"
            onClick={(e) => {
              if (!isSearchFormVisible || !search) {
                e.preventDefault();
                setIsSearchFormVisible(!isSearchFormVisible);
              }
            }}
            className="grid items-center content-center justify-center z-100 gap-1.5 w-12 h-12 group bg-[#252621] transition-all hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2 focus:rounded"
          >
            <span className="icon-search text-white transition-all group-hover:text-[#252621] group-focus:text-[#252621]" />
            {/* <span className="block h-0.5 w-5 bg-white transition-all group-hover:bg-[#252621] group-focus:bg-[#252621]" />
          <span className="block h-0.5 w-5 bg-white transition-all group-hover:bg-[#252621] group-focus:bg-[#252621]" />
          <span className="block h-0.5 w-5 bg-white transition-all group-hover:bg-[#252621] group-focus:bg-[#252621]" /> */}
          </button>
        </form>

        {/* todo: add mobile nav */}
      </header>

      {/* <header className="flex gap-4 relative flex justify-between md:min-h-[120px] items-center p-4 md:py-6 md:px-4 lg:px-0 w-full max-w-lg mx-auto">
        <a
          href={site}
          className="min-w-12 relative cursor-pointer justify-self-start z-1000 focus:invert transition-all group"
          onMouseOver={handleOnMouseOver}
          onMouseLeave={handleOnMouseLeave}
        >
          <img
            src="/tr3-logo.svg"
            alt="tr3"
            className="transition-[opacity] group-hover:opacity-0 w-12 h-12 md:w-18 md:h-18"
          />
          <img
            src="/tr3-logo-inverted.svg"
            alt="tr3"
            className="absolute top-0 transition-[opacity] opacity-0 group-hover:opacity-100 w-18 h-18"
          />
        </a> 
        
        <form
          action="/search"
          method="GET"
          role="search"
          className="h-12 right-4 items-center justify-between w-full bg-[#F4F4F5] placeholder:text-[#fff] text-[#252621]"
        >
          <label className="sr-only" htmlFor="search">
            Search the site
          </label>
          <input
            type="search"
            className="w-full h-full pl-4 pr-2 transition-all rounded focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
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

        <button className="min-w-12 grid items-center content-center justify-center gap-1.5 w-12 h-12 bg-[#252621]">
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
          <span className="block h-0.5 w-5 bg-white" />
        </button>

        <nav className="hidden md:flex flex-grow items-center justify-end md:justify-center z-10">
          <ul className="flex gap-6 md:gap-6">
            <li>
              <a className="cursor-pointer px-2 py-1 rounded transition-all focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2" href={site}>Home</a>
            </li>
            <li>

              <a className="cursor-pointer px-2 py-1 rounded transition-all focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2" href={site}>Articles</a>
            </li>
            <li>

              <a className="cursor-pointer px-2 py-1 rounded transition-all focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2" href={`${site}about`}>About</a>
            </li>
          </ul>
        </nav>

        <form
          action="/search"
          method="GET"
          role="search"
          className="right-4 lg:right-0 hidden md:flex items-center justify-between w-50 justify-self-end bg-[#F4F4F5] placeholder:text-[#A1A1AA] text-[#252621] rounded-[5px]"
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
      </header> */}
    </>
  );
};
