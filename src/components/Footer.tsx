import { format } from "date-fns";

export const Footer = () => (
  <footer className="bg-chardon w-full py-8 px-6 md:px-8 xl:px-0 md:py-12">
    <div className="max-w-lg text-center md:text-left mx-auto grid gap-6 md:grid-cols-12 md:gap-16">
      <section className="md:col-span-4 grid gap-2">
        <h2 className="text-[#181A2A] font-semibold text-lg">About</h2>

        <p className="text-[#696A75] font-serif max-w-[289px]">
          tr3 is a platform created for serious runners, by serious runners.
        </p>
        <p className="text-[#696A75] font-serif max-w-[289px]">
          We publish authentic, high-quality, science-backed content for
          recreational athletes who care about performance, not just
          participation.
        </p>
      </section>

      <section className="md:col-span-2 flex flex-wrap gap-3 content-start">
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

      <section className="md:col-span-2 flex flex-wrap gap-3 content-start">
        <h2 className="text-[#181A2A] w-full font-semibold text-lg">
          Other Links
        </h2>
        <ul className="grid gap-2 w-full">
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
      </section>

      <section className="md:col-span-3 flex flex-wrap gap-3 content-start">
        <h2 className="text-[#181A2A] w-full font-semibold text-lg">
          Social Links
        </h2>

        <ul className="flex gap-3 mx-auto md:mx-0">
          <li>
            <a
              href="/"
              className="flex opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              <span className="icon-facebook block bg-[#3B3C4A] w-4 h-4" />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              <span className="icon-youtube block bg-[#3B3C4A] w-4 h-4" />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="flex opacity-75 transition-all hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
            >
              <span className="icon-instagram block bg-[#3B3C4A] w-4 h-4" />
            </a>
          </li>
        </ul>
      </section>

      <section className="md:col-span-12 text-sm font-light text-center text-[#696A75] font-serif">
        <span>
          &copy; {format(new Date(), "yyyy")} tr3 — All rights reserved.
        </span>
      </section>
    </div>
  </footer>
);
