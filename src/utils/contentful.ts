import { createClient } from "contentful";

export interface Article {
  contentTypeId: "article";
  fields: {
    slug: string;
    title: string;
    metaDescription: string;
    publishedDate: string;
    category: string;
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
}

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});
