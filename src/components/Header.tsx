import React, { useRef, useState, useEffect } from "react";

import { FocusTrap } from "focus-trap-react";
import { Article } from "@utils/contentful";

type HeaderProps = {
  site: string;
  articles: Article[];
};

export const Header = ({ site, articles }: HeaderProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  const [isSearchFormVisible, setIsSearchFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<Array<Article>>([]);

  const handleOnCloseSearch = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setIsSearchFormVisible(false);
  };

  useEffect(() => {
    if (!isSearchFormVisible && searchButtonRef.current) {
      // Small delay to ensure state has updated and FocusTrap is deactivated
      setTimeout(() => {
        searchButtonRef.current?.focus();
      }, 0);
    }
  }, [isSearchFormVisible]);

  useEffect(() => {
    let filtered: Array<Article> = [];
    if (searchQuery !== "") {
      filtered = articles.filter((article: Article) =>
        article.fields.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredArticles(filtered);
  }, [searchQuery]);

  return (
    <header className="relative flex p-4 gap-6 max-w-lg mx-auto xl:p-0 xl:pt-6 xl:pb-2">
      <a
        href={site}
        className="relative items-center w-12 md:w-14 hover:z-100 focus:z-100 justify-self-start cursor-pointer transition-all group focus:online-none focus:ring-0"
      >
        <img
          src="/tr3-logo.svg"
          alt="tr3: train, race, recover, repeat."
          className="w-12 h-12 md:w-14 md:h-14 transition-[opacity] group-focus:opacity-0 group-hover:opacity-0"
        />
        <img
          src="/tr3-logo-inverted.svg"
          alt=""
          className="absolute top-0 w-12 h-12 md:w-14 md:h-14 transition-[opacity] opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-focus:ring-2 group-focus:ring-[#252621] group-focus:ring-offset-2 group-focus:rounded"
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

      <FocusTrap active={isSearchFormVisible}>
        <div
          className={`fixed flex flex-wrap content-start justify-center gap-2 z-100 bg-[#252621]/90 h-dvh w-dvw left-0 top-0 p-8 pt-14 md:pt-32 transition-all ${isSearchFormVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <button
            tabIndex={isSearchFormVisible ? 0 : -1}
            onClick={handleOnCloseSearch}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleOnCloseSearch(e);
              }
            }}
            className="absolute top-4 right-4 flex items-center cursor-pointer justify-center h-8 w-8 transition-all rounded opacity-75 focus:opacity-100 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
          >
            <span className="icon-close text-white w-4 h-4" />
          </button>

          <div className="max-w-lg w-full md:px-8">
            <input
              ref={searchInputRef}
              type="search"
              name="search"
              autoFocus={isSearchFormVisible}
              tabIndex={isSearchFormVisible ? 0 : -1}
              value={searchQuery}
              onChange={({ target }) => setSearchQuery(target.value)}
              placeholder="Search..."
              className="border-b-2 border-[#F4F4F5]/50 py-4 h-12 w-full transition-all text-[#F4F4F5] placeholder-[#F4F4F5]  focus:border-[#F4F4F5] focus:outline-none focus:border-b-4"
            />

            {searchQuery &&
              (filteredArticles.length > 0 ? (
                <div className="w-full mt-4">
                  {filteredArticles.map((article: Article) => (
                    <a
                      tabIndex={isSearchFormVisible ? 0 : -1}
                      href={`${site}articles/${article.fields.slug}`}
                      key={article.fields.slug}
                      className="block text-white py-2 border-b border-gray-600 transition-all focus:rounded focus:px-2 focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2"
                    >
                      {article.fields.title}
                    </a>
                  ))}
                </div>
              ) : (
                <div className="text-white py-2 w-full text-center">
                  No results
                </div>
              ))}
          </div>
        </div>
      </FocusTrap>

      <button
        ref={searchButtonRef}
        aria-label="Open search"
        onClick={(e) => {
          if (!isSearchFormVisible || !searchQuery) {
            e.preventDefault();
            setIsSearchFormVisible(true);
            if (searchInputRef && searchInputRef.current) {
              searchInputRef.current.focus();
            }
          }
        }}
        className="grid items-center content-center justify-center cursor-pointer gap-1.5 w-12 h-12 md:w-14 md:h-14 group bg-[#252621] transition-all hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#252621] focus:ring-offset-2 focus:rounded"
      >
        <span className="icon-search w-4 h-4 md:w-6 md:h-6 text-white transition-all group-hover:text-[#252621] group-focus:text-[#252621]" />
      </button>
    </header>
  );
};
