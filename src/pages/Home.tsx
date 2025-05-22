import { useEffect, useState } from "react";

import client from "../contentfulClient";
import { getFormattedDate } from "../utils/helpers";

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

        {articles.map(({ fields }) => {
          const { title, slug, category, metaDescription, publishedDate } =
            fields;
            
          return (
            <article className="mb-4">
              <p className="font-serif text-philippine-grey text-xs mb-[2px]">
                {category}
              </p>

              <h3 className="font-semibold text-elba -tracking-[.8px]">
                <a href={`articles/${slug}`}>{title}</a>
              </h3>
              <p className="text-sm text-philippine-grey font-[300] mb-[6px] -tracking-[.45px] leading-[22px] mt-[2px]">
                {metaDescription}
              </p>
              <p className="flex items-center gap-1.5 font-[300] text-philippine-grey text-[10px]">
                <span>{getFormattedDate(publishedDate)}</span>
                <span className="text-[8px]">//</span>
                <span>
                  <a
                    className="text-sea-blue underline font-medium"
                    target="_blank"
                    href="https://www.instagram.com/adamcantrun"
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
