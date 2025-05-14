export const Header = () => (
  <header className="py-3 bg-elba text-chardon">
    <nav className="flex justify-between max-w-128 mx-auto">
      <h1 className="font-[800] letter-spacing-[.2px] text-lg">
        <a href="/">adamcantrun</a>
      </h1>
      <ul className="flex gap-4 items-center justify-center">
        <li>
          <a href="/about" className="text-sm">
            about
          </a>
        </li>
        <li>
          <a href="/" className="text-sm">
            posts
          </a>
        </li>
      </ul>
    </nav>
  </header>
);
