import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import client from "../contentfulClient";

import { getFormattedDate } from "../utils/helpers";
import { RichTextRenderer } from "../components/RichTextRenderer";
import { DisqusComments } from "../components/Disqus";

export const Article = () => {
  const [article, setArticle] = useState<object>();

  const { slug } = useParams<{ slug: string }>();

  const getEntryBySlug = async (slug: string) => {
    const response = await client.getEntries({
      content_type: "article",
      "fields.slug": slug,
      limit: 1,
    });

    if (response.items.length > 0) {
      return response.items[0];
    } else {
      return null;
    }
  };

  useEffect(() => {
    getEntryBySlug(slug as string).then((entry) => {
      if (entry) {
        setArticle(entry);
      } else {
        // todo: redirect
      }
    });
  }, []);

  return article ? (
    <>
      <section className="w-full max-w-128 mx-auto pt-12">
        <h1 className="font-[700] text-3xl text-elba -tracking-[1.25px]">
          {article?.fields?.title}
        </h1>
        <p className="text-philippine-grey text-xl leading-[25.5px] -tracking-[.5px] font-serif mt-1">
          {article.fields.metaDescription}
        </p>
        <p className="flex items-center gap-1.5 mt-3 font-[300] text-philippine-grey text-[10px]">
          <span>{getFormattedDate(article.fields.publishedDate)}</span>
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

        <div
          className="w-full h-[300px] bg-philippine-grey z-20 relative rounded mt-4 bg-cover bg-center"
          style={{
            backgroundImage: `url('${article.fields.featuredImage.fields.file.url}')`,
          }}
        />
        <p className="text-philippine-grey text-xs font-light mt-2">
          {article.fields.featuredImage.fields.description}
        </p>
      </section>

      <section className="bg-white w-full min-h-[400px] -mt-[150px]">
        <div className="grid gap-4 w-full max-w-128 mx-auto pt-[172px] pb-8">
          <RichTextRenderer body={article.fields.body} />

          <hr className="border-t opacity-10 mt-4 border-philippine-grey" />

          <DisqusComments
            className="mt-6"
            title={article.fields.title}
            url={`${window.location.origin}${location.pathname}`}
            id={article.sys.id}
          />
        </div>
      </section>
    </>
  ) : (
    <></>
  );
};
