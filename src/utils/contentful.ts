import { createClient } from "contentful";

export interface Author {
  contentTypeId: "author";
  fields: {
    slug: string;
    name: string;
    bio: string;
    avatar?: {
      fields: {
        file: {
          url: string;
        };
        description: string;
      };
    };
  };
}

export interface Article {
  contentTypeId: "article";
  fields: {
    slug: string;
    title: string;
    metaDescription: string;
    publishedDate: string;
    createdBy: string;
    category: string;
    article_author?: {
      fields: Author["fields"];
    };
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
