import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Entry, EntrySkeletonType } from "contentful";

import client from "../contentfulClient";

import { DisqusComments, RichTextRenderer } from "../components";
import { getFormattedDate } from "../utils/helpers";
import { Document } from "@contentful/rich-text-types";

type ArticleSkeleton = EntrySkeletonType & {
  contentTypeId: "article";
  fields: {
    slug: string;
    title: string;
    metaDescription: string;
    publishedDate: string;
    featuredImage: {
      fields: {
        file: {
          url: string;
        };
        description: string;
      };
    };
    body: Document;
  };
};

type Article = Entry<ArticleSkeleton>;

export const Article = () => {
  const { slug } = useParams<{ slug: string }>();

  const [article, setArticle] = useState<Article | null>(null);

  const getEntryBySlug = async (slug: string): Promise<Article | null> => {
    const response = await client.getEntries<ArticleSkeleton>({
      content_type: "article",
      limit: 1,
      "fields.slug": slug,
    });
    return response.items.length > 0 ? response.items[0] : null;
  };

  useEffect(() => {
    getEntryBySlug(slug as string).then((entry) => {
      if (entry) {
        setArticle(entry);
      } else {
        // todo: redirect
      }
    });
  }, [slug]);

  return article ? (
    <>
      <section className="w-full max-w-128 mx-auto px-6 py-8 md:p-0 md:pt-12">
        <h1 className="font-[700] text-3xl text-elba -tracking-[1.25px]">
          {article.fields.title as unknown as string}
        </h1>
        <p className="text-philippine-grey text-xl leading-[25.5px] -tracking-[.5px] font-serif mt-1">
          {article.fields.metaDescription as unknown as string}
        </p>
        <p className="flex items-center gap-1.5 mt-3 font-[300] text-philippine-grey text-[10px]">
          <span>
            {getFormattedDate(
              article.fields.publishedDate as unknown as string,
            )}
          </span>
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
            backgroundImage: `url('${(article.fields.featuredImage.fields as unknown as { file: { url: string } }).file.url}')`,
          }}
        />
        <p className="text-philippine-grey text-xs font-light mt-2">
          {
            (
              article.fields.featuredImage.fields as unknown as {
                description: string;
              }
            ).description
          }
        </p>
      </section>

      <section className="bg-white w-full min-h-[400px] -mt-[150px] px-6 pt-8 pb-4 md:p-0">
        <div className="grid gap-4 w-full max-w-128 mx-auto pt-32 md:pt-[172px] md:pb-8">
          <RichTextRenderer body={article.fields.body as unknown as Document} />

          <hr className="border-t opacity-10 mt-4 border-philippine-grey" />

          <DisqusComments
            title={article.fields.title as unknown as string}
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
