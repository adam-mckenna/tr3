import { Header } from "./components/Header";

import "./App.css";

const articles = [
  {
    category: "Racing",
    title:
      "The secret to running the perfect race: it's easier than you think.",
    description:
      "The key to finishing a race strong while also leaving nothing behind is not only possible, it's easy.",
    author: {
      name: "Adam McKenna",
      url: "https://www.instagram.com/adamcantrun/#",
    },
    date: "Apr 27, 2025",
  },
  {
    category: "Auxiliary work",
    title: "Why strength training is the key to avoiding injury.",
    description:
      "If you want to avoid those wobbling knees, you gotta train the glutes.",
    author: {
      name: "Adam McKenna",
      url: "https://www.instagram.com/adamcantrun/#",
    },
    date: "Apr 12, 2025",
  },
  {
    category: "Racing",
    title:
      "The secret to running the perfect race: it's easier than you think.",
    description:
      "The key to finishing a race strong while also leaving nothing behind is not only possible, it's easy.",
    author: {
      name: "Adam McKenna",
      url: "https://www.instagram.com/adamcantrun/#",
    },
    date: "Feb 14, 2025",
  },
];

const App = () => {
  return (
    <main className="min-h-screen bg-chardon">
      <Header />

      <section className="w-full max-w-128 mx-auto pt-8">
        <h1 className="font-black text-3xl text-elba">
          let’s talk about running.
        </h1>
        <p className="text-philippine-grey text-lg font-serif mt-1">
          this blog explores the art and science of optimal training, racing and
          recovery for runners.
        </p>
      </section>

      <section className="grid w-full max-w-128 mx-auto pt-8 gap-2">
        <h2 className="text-elba font-bold text-lg">Latest articles</h2>

        {articles.map(({ category, title, description, author, date }) => (
          <article className="mb-2">
            <p className="font-serif text-philippine-grey text-xs mb-1">
              {category}
            </p>
            <h3 className="font-semibold text-elba">{title}</h3>
            <p className="text-sm text-elba opacity-65 mb-2">{description}</p>
            <p className="flex gap-1 font-light text-philippine-grey text-xs">
              <span>
                Written by&nbsp;
                <a
                  className="text-sea-blue underline font-medium"
                  target="_blank"
                  href={author.url}
                >
                  {author.name}
                </a>
              </span>
              <span>•</span>
              <span>{date}</span>
            </p>
          </article>
        ))}
      </section>
    </main>
  );
};

export default App;
