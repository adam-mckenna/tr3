import { format } from "date-fns";

import { Category } from "@utils/contentful";

type FooterProps = { categories: Array<Category>; isHome: boolean };

export const Footer = ({ categories, isHome }: FooterProps) => (
  <footer className="bg-chardon w-full px-6 md:px-8 xl:px-0">
    {isHome && (
      <div className="bg-[#EED9C3] -mx-6 md:-mx-8 md:px-8 lg:mx-0">
        <div className="flex items-center justify-center w-full max-w-lg mx-auto py-6 md:justify-end">
          <a
            className="flex gap-1 items-center px-6 text-lg py-3 uppercase text-elba/75 text-center font-semibold transition-all focus:text-elba hover:text-elba hover:gap-3 focus:gap-3 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            href="articles"
          >
            <span className="tracking-[1px] ml-[1px]">View All Articles</span>
            <span className="mb-2">&#10230;</span>
          </a>
        </div>
      </div>
    )}

    <div className="max-w-lg text-center py-8 lg:py-10 md:text-left mx-auto grid gap-6 md:grid-cols-20 md:gap-8 lg:gap-16">
      <section className="md:col-span-8 grid gap-2">
        <h2 className="text-[#181A2A] font-semibold text-lg">About</h2>

        <p className="text-[#696A75] font-serif max-w-[289px] max-md:mx-auto">
          tr3 is a platform created for serious runners, by serious runners.
        </p>
        <p className="text-[#696A75] font-serif max-w-[289px] max-md:mx-auto">
          We publish authentic, high-quality, science-backed content for
          recreational athletes who care about performance, not just
          participation.
        </p>
      </section>

      <section className="md:col-span-4 flex flex-wrap gap-3 content-start">
        <h2 className="text-[#181A2A] w-full font-semibold text-lg">
          Categories
        </h2>
        <ul className="grid gap-2 w-full">
          {categories.map(({ fields }) => (
            <li key={fields.slug}>
              <a
                href={`/categories/${fields.slug}`}
                className="text-[#3B3C4A] opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
              >
                {fields.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="md:col-span-4 flex flex-wrap gap-3 content-start">
        <h2 className="text-[#181A2A] w-full font-semibold text-lg">
          Quick Links
        </h2>
        <ul className="grid gap-2 w-full">
          <li>
            <a
              href="/"
              className="text-[#3B3C4A] opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-[#3B3C4A] opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              Articles
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-[#3B3C4A] opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              About
            </a>
          </li>
        </ul>
      </section>

      <section className="md:col-span-4 flex flex-wrap gap-3 content-start">
        <h2 className="text-[#181A2A] w-full font-semibold text-lg">
          Other Links
        </h2>
        <ul className="grid gap-2 w-full mb-6">
          <li>
            <a
              href="/terms-and-conditions"
              className="text-[#3B3C4A] opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              Terms and Conditions
            </a>
          </li>
          <li>
            <a
              href="/privacy-policy"
              className="text-[#3B3C4A] opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              Privacy Policy
            </a>
          </li>
        </ul>

        <h2 className="text-[#181A2A] w-full font-semibold text-lg">
          Social Links
        </h2>

        <ul className="flex gap-3 mx-auto md:mx-0">
          {/* todo: facebook page? */}
          {/* <li>
            <a
              href="/"
              className="flex opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              <span className="icon-facebook block bg-[#3B3C4A] w-4 h-4" />
            </a>
          </li> */}
          <li>
            <a
              href="https://www.youtube.com/@tr3running"
              target="_blank"
              aria-label="TR3 YouTube channel"
              className="flex opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              <span className="icon-youtube block bg-[#3B3C4A] w-4 h-4" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/adamcantrun/"
              target="_blank"
              aria-label="adamcantrun instagram"
              className="flex opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              <span className="icon-instagram block bg-[#3B3C4A] w-4 h-4" />
            </a>
          </li>
        </ul>
      </section>

      <section className="md:col-span-20 text-sm font-light text-center text-[#696A75] font-serif">
        <span>
          &copy; {format(new Date(), "yyyy")} tr3 — All rights reserved.
        </span>
      </section>
    </div>
  </footer>
);
