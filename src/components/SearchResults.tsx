import { Article } from "@utils/contentful";
import { getFormattedDate } from "@utils/helpers";
import { useEffect, useState } from "react";

type SearchResultsProps = {
  items: Array<Article>;
};

export const SearchResults = ({ items }: SearchResultsProps) => {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("query") || "";

  const [articles, setArticles] = useState<Array<Article> | undefined>();

  useEffect(() => {
    const filteredArticles = items.filter((item) =>
      item.fields.title.toLowerCase().includes(search),
    );

    if (filteredArticles.length) {
      setArticles(
        filteredArticles.sort((a, b) => {
          const d1 = new Date(a.fields.publishedDate);
          const d2 = new Date(b.fields.publishedDate);
          return d1 > d2 ? -1 : 1;
        }),
      );
    }
  }, []);

  return (
    <>
      <header className="w-full max-w-128 mx-auto px-6 py-8 md:p-0 md:pt-12">
        <h1 className="font-[700] text-3xl text-elba -tracking-[1.25px]">
          Search results for "{search}"
        </h1>
      </header>

      <section className="grid w-full max-w-128 mx-auto gap-6 px-6 mb-12 md:p-0 md:pt-6">
        {articles ? (
          articles.map(({ fields }) => {
            const { title, slug, category, metaDescription, publishedDate } =
              fields;

            return (
              <article>
                <p className="font-serif text-[12px] uppercase text-philippine-grey">
                  {category}
                </p>

                <h3 className="font-bold text-elba text-xl mt-[4px] -tracking-[.8px] hover:underline focus:underline">
                  <a href={`articles/${slug}`}>{title}</a>
                </h3>
                <p className="text-elba font-light -tracking-[.5px] leading-[25px] mt-[5px]">
                  {metaDescription}
                </p>
                <p className="flex items-center gap-1.5 font-[200] text-elba mt-[9px] text-sm">
                  <span>{getFormattedDate(publishedDate)}</span>
                  <span className="text-[8px]">|</span>
                  <span>
                    <a
                      className="text-sea-blue font-medium hover:underline focus:underline"
                      target="_blank"
                      href="https://www.instagram.com/adamcantrun/"
                    >
                      Adam McKenna
                    </a>
                  </span>
                </p>
              </article>
            );
          })
        ) : (
          <p>No results found</p>
        )}
      </section>
    </>
  );
};
