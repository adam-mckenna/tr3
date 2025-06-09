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
      <section className="w-full max-w-128 mx-auto px-6 py-8 md:p-0 md:pt-12">
        <h1 className="font-[800] text-3xl text-elba -tracking-[.55px] uppercase hidden">
          All Things Running.
        </h1>
        <p className="text-philippine-grey text-xl leading-[25.5px] -tracking-[.5px] font-serif mt-[2px]">
          exploring the art and science of optimal training, racing and
          recovery for runners.
        </p>
      </section>

      <section className="grid w-full max-w-128 mx-auto gap-5 px-6 md:p-0 md:pt-8 ">
        <h2 className="text-elba font-[800] text-[22px] -tracking-[.55px] uppercase hidden">
          latest articles
        </h2>

        {articles.map(({ fields }) => {
          const { title, slug, category, metaDescription, publishedDate } =
            fields;

          return (
            <article>
              <p className="font-serif text-[10px] uppercase mb-[2px] text-[#c4c2c2]">
                {category}
              </p>

              <h3 className="font-bold text-elba -tracking-[.8px] hover:underline focus:underline">
                <a href={`articles/${slug}`}>{title}</a>
              </h3>
              <p className="text-xs text-philippine-grey font-[200] mb-[2px] -tracking-[.45px] leading-[18px]">
                {metaDescription}
              </p>
              <p className="flex items-center gap-1.5 font-[400] text-philippine-grey text-[10px]">
                <span>{getFormattedDate(publishedDate)}</span>
                <span className="text-[8px]">//</span>
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
