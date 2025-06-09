import { useEffect, useState } from "react";

import client from "../contentfulClient";

import { getFormattedDate } from "@utils/helpers";

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "article" })
      .then(({ items }) => {
        setArticles(items as []);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="w-full max-w-128 mx-auto px-6 py-8 md:p-0 md:pt-8">
        <h1 className="hidden">All Things Running.</h1>
        <p className="text-philippine-grey text-2xl leading-[30.5px] -tracking-[.5px] font-serif mb-[8px]">
          exploring the art and science of optimal training, racing and recovery
          for runners.
        </p>
      </section>

      <section className="grid w-full max-w-128 mx-auto gap-6 px-6 md:p-0 md:pt-6">
        <h2 className="hidden">latest articles</h2>

        {articles.map(({ fields }) => {
          const { title, slug, category, metaDescription, publishedDate } =
            fields;

          return (
            <article key={slug}>
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
        })}
      </section>
    </>
  );
};
