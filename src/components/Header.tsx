import { Link } from "react-router-dom";

export const Header = () => (
  <header className="px-6 py-3 bg-elba text-chardon md:px-0">
    <nav className="flex justify-between max-w-128 mx-auto">
      <h1 className="font-[800] letter-spacing-[.2px] text-lg">
        <Link to="/">adamcantrun</Link>
      </h1>
      <ul className="flex gap-4 items-center justify-center">
        <li>
          <Link to="/about" className="text-sm">
            about
          </Link>
        </li>
        <li>
          <Link to="/" className="text-sm">
            posts
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
