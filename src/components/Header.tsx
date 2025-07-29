import React, { useState } from "react";

type HeaderProps = {
  site: string;
};

export const Header = ({ site }: HeaderProps) => {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  const [search, setSearch] = useState("");
  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);

  const handleOnMouseOver = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    setIsBackgroundVisible(true);
  };
  const handleOnMouseLeave = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    setIsBackgroundVisible(false);
  };

  return (
    <>
      {/* todo: convert overlay into a React hook */}
      <div
        className={`fixed left-0 w-dvw h-screen bg-black pointer-events-none transition-all z-100 ease-in-out ${isSearchFormVisible || isBackgroundVisible ? "opacity-50" : "opacity-0"}`}
      />

      <header className="relative flex p-4 gap-6 xl:p-0 xl:pt-6 xl:pb-2 max-w-lg mx-auto">
        <a
          href={site}
          className="relative items-center w-12 md:w-18 hover:z-100 focus:z-100 justify-self-start cursor-pointer transition-all group focus:online-none focus:ring-0"
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
            className="absolute top-0 w-12 h-12 md:w-18 md:h-18 transition-[opacity] opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus:ring-2 group-focus:ring-[#252621] group-focus:ring-offset-2 group-focus:rounded"
          />
        </a>

        <nav
          aria-label="Mobile navigation with featured links"
          className="flex flex-grow items-center justify-center"
        >
          <ul className="flex gap-5 md:gap-6 lg:gap-12">
            <li>
              <a
                className="cursor-pointer py-1 rounded transition-all hover:underline decoration-3 focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
                href={site}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer py-1 rounded transition-all hover:underline decoration-3 focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
                href={site}
              >
                Articles
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer py-1 rounded transition-all hover:underline decoration-3 focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
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
          className={`flex ${isSearchFormVisible ? "z-100" : ""}`}
        >
          <label className="sr-only" htmlFor="search">
            Search the site
          </label>
          <input
            type="search"
            autoFocus={isSearchFormVisible}
            tabIndex={isSearchFormVisible ? 0 : -1}
            className={`absolute z-100 right-4 top-4 h-12 md:h-18 bg-[#F4F4F5] p-4 transition-all ease-in-out ${isSearchFormVisible ? "opacity-100 w-[calc(100vw-80px)] md:w-[calc(100vw-110px)] lg:w-[calc(100%-88px)]" : "opacity-0 w-12 md:18 pointer-events-none"} focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2 focus:rounded`}
            name="query"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            placeholder="Search..."
          />

          <button
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
            aria-label="Open search"
            onClick={(e) => {
              if (!isSearchFormVisible || !search) {
                e.preventDefault();
                setIsSearchFormVisible(!isSearchFormVisible);
              }
            }}
            className={`grid items-center content-center justify-center cursor-pointer hover:z-100 focus:z-100 gap-1.5 w-12 h-12 md:w-18 md:h-18 group bg-[#252621] transition-all hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2 focus:rounded ${isSearchFormVisible ? "z-[101]" : ""}`}
          >
            <span className="icon-search w-4 h-4 md:w-6 md:h-6 text-white transition-all group-hover:text-[#252621] group-focus:text-[#252621]" />
          </button>
        </form>
      </header>
    </>
  );
};
