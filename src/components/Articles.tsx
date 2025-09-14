import { FC, useCallback, useEffect, useRef, useState } from "react";

import {
  Article,
  Author,
  Category,
  contentfulClient,
  Image,
} from "@utils/contentful";
import { getFormattedDate } from "@utils/helpers";

const limit = 9;

export const Articles: FC = () => {
  const [articles, setArticles] = useState<Array<Article>>([]);
  const [isLoading, setIsLoading] = useState(true);

  // The element to determine when we're at the end of the page.
  const sentinel = useRef<HTMLDivElement | null>(null);

  // Have to use ref for IntersectionObserver otherwise it wouldn't recognise state updates.
  const skipRef = useRef<number>(0);
  const hasMoreRef = useRef<boolean>(true);
  const isLoadingRef = useRef<boolean>(false);

  const fetchMore = useCallback(async () => {
    if (isLoadingRef.current || !hasMoreRef.current) return;

    isLoadingRef.current = true;
    setIsLoading(true);

    try {
      const { items } = await contentfulClient.getEntries<Article>({
        content_type: "article",
        order: ["-fields.publishedDate"],
        limit,
        skip: skipRef.current,
      });

      if (items.length > 0) {
        setArticles((prev) => [...prev, ...items] as Array<Article>);
        skipRef.current += items.length;
      }

      if (items.length < limit) {
        hasMoreRef.current = false;
      }
    } catch (err) {
      hasMoreRef.current = false;
    } finally {
      isLoadingRef.current = false;
      setIsLoading(false);
    }
  }, []);

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      fetchMore();
    }
  }, []);

  useEffect(() => {
    fetchMore();

    const el = sentinel.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleObserver);

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchMore]);

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map(({ fields }) => {
        const {
          title,
          slug,
          category: categoryFields,
          publishedDate,
          metaDescription,
          article_author,
          featuredImage,
        } = fields;

        const category = (categoryFields as Category).fields.name;
        const author = (article_author[0] as Author).fields;

        return (
          <article className="grid gap-0.5 content-start">
            <div
              className="h-[200px] bg-cover bg-center p-4 md:h-[300px] mb-3"
              style={{
                backgroundImage: `url('${(featuredImage as Image).fields.file.url}')`,
              }}
            >
              <p className="bg-white py-1 uppercase text-xs font-extrabold text-elba px-2 w-fit">
                {category}
              </p>
            </div>

            <h3 className="font-bold text-elba text-xl -tracking-[.6px] leading-[26px] hover:underline focus:underline">
              <a
                className="transition-all focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
                href={`/articles/${slug}`}
              >
                {title}
              </a>
            </h3>
            <p className="text-philippine-grey font-light -tracking-[.125px] leading-[23px] mt-[5px] mb-2">
              {metaDescription}
            </p>

            <div className="flex items-center mt-1 gap-1 md:gap-1.5 text-elba font-serif w-max">
              <span
                className="rounded-full inline-block bg-cover bg-center w-6 h-6 border-2 border-elba mr-1"
                style={{
                  backgroundImage: `url('${author.avatar.fields.file.url}')`,
                }}
              />
              <p className="text-sm font-semibold">
                <a
                  className="transition-all hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
                  href={`/authors/${author.slug}`}
                >
                  {author.name}
                </a>
              </p>
              <span className="bg-elba/50 w-0.5 h-0.5 rounded-full" />
              <p className="text-sm">
                {getFormattedDate(publishedDate.toString())}
              </p>
            </div>
          </article>
        );
      })}

      {isLoading &&
        Array.from({ length: skipRef.current === 0 ? 9 : 3 }).map((_, i) => (
          <article key={i} className="grid gap-0.5 content-start">
            <div className="h-[200px] bg-cover bg-center p-4 md:h-[300px] mb-3 bg-neutral-300  animate-pulse" />

            <div className="font-bold text-elba text-xl -tracking-[.6px] leading-[26px] hover:underline focus:underline h-[53px] bg-neutral-300 animate-pulse" />
            <div className="text-philippine-grey font-light -tracking-[.125px] leading-[23px] mt-[5px] mb-2 h-[46px] bg-neutral-300 animate-pulse" />
            <div className="font-bold text-elba text-xl -tracking-[.6px] leading-[26px] hover:underline focus:underline h-[24px] bg-neutral-300  animate-pulse" />
          </article>
        ))}

      <div ref={sentinel} />
    </div>
  );
};
