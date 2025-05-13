export const Header = () => (
  <header className="flex justify-between p-4 bg-chardon">
    <h1>
      <a href="/">adamcantrun</a>
    </h1>

    <nav>
      <ul className="flex gap-2 items-center justify-center">
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/">posts</a>
        </li>
      </ul>
    </nav>
  </header>
);
