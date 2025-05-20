const articles = [
  {
    category: "Racing",
    title:
      "The secret to running the perfect race: it's easier than you think.",
    href: "/posts/some-page",
    description:
      "The key to finishing a race strong while also leaving nothing behind is not only possible, it's easy.",
    author: {
      name: "Adam McKenna",
      url: "https://www.instagram.com/adamcantrun",
    },
    date: "Apr 27, 2025",
  },
  {
    category: "Auxiliary work",
    href: "/posts/some-page",
    title: "Why strength training is the key to avoiding injury.",
    description:
      "If you want to avoid those wobbling knees, you gotta train the glutes.",
    author: {
      name: "Adam McKenna",
      url: "https://www.instagram.com/adamcantrun",
    },
    date: "Apr 12, 2025",
  },
  {
    category: "Racing",
    href: "/posts/some-page",
    title:
      "The secret to running the perfect race: it's easier than you think.",
    description:
      "The key to finishing a race strong while also leaving nothing behind is not only possible, it's easy.",
    author: {
      name: "Adam McKenna",
      url: "https://www.instagram.com/adamcantrun",
    },
    date: "Feb 14, 2025",
  },
];

export const Home = () => (
  <>
    <section className="w-full max-w-128 mx-auto pt-12">
      <h1 className="font-[700] text-3xl text-elba -tracking-[1.25px]">
        let's talk about running.
      </h1>
      <p className="text-philippine-grey text-xl leading-[25.5px] -tracking-[.5px] font-serif mt-1">
        this blog explores the art and science of optimal training, racing and
        recovery for runners.
      </p>
    </section>

    <section className="grid w-full max-w-128 mx-auto pt-8 gap-3">
      <h2 className="text-elba font-[600] text-[22px] -tracking-[1.25px]">
        Latest articles
      </h2>

      {articles.map(({ category, href, title, description, author, date }) => (
        <article className="mb-4">
          <p className="font-serif text-philippine-grey text-xs mb-[2px]">
            {category}
          </p>
          <h3 className="font-semibold text-elba -tracking-[.8px]">
            <a href={href}>{title}</a>
          </h3>
          <p className="text-sm text-philippine-grey font-[300] mb-[6px] -tracking-[.45px] leading-[22px] mt-[2px]">
            {description}
          </p>
          <p className="flex items-center gap-1.5 font-[300] text-philippine-grey text-[10px]">
            <span>{date}</span>
            <span className="text-[8px]">//</span>
            <span>
              <a
                className="text-sea-blue underline font-medium"
                target="_blank"
                href={author.url}
              >
                {author.name}
              </a>
            </span>
          </p>
        </article>
      ))}
    </section>
  </>
);
