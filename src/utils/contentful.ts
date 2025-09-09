import { createClient, EntryFieldTypes } from "contentful";

export interface Image {
  fields: {
    file: {
      url: string;
    };
    description: string;
  };
}

export interface Author {
  contentTypeId: "author";
  fields: {
    slug: string;
    name: string;
    role: string;
    bio: string;
    avatar: Image;
  };
}

export interface Article {
  contentTypeId: "article";
  fields: {
    slug: string;
    title: string;
    metaDescription: string;
    publishedDate: EntryFieldTypes.Date;
    createdBy: string;
    category: Category;
    article_author: Array<Author>;
    featuredImage: Image;
    body: Document;
  };
}

export interface Category {
  contentTypeId: "category";
  fields: {
    slug: string;
    name: string;
    description: string;
    featuredImage: Image;
  };
}

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});
