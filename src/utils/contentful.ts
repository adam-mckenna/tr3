import { createClient, EntryFields, EntryFieldTypes } from "contentful";

export interface Image {
  fields: {
    file: {
      url: EntryFields.Text;
    };
    title: EntryFields.Text;
    description: EntryFields.Text;
  };
}

export interface Author {
  contentTypeId: "author";
  fields: {
    slug: EntryFields.Text;
    name: EntryFields.Text;
    role: EntryFields.Text;
    bio: EntryFields.Text;
    avatar: Image;
  };
}

export interface Article {
  contentTypeId: "article";
  fields: {
    slug: EntryFields.Text;
    title: EntryFields.Text;
    metaDescription: EntryFields.Text;
    publishedDate: EntryFieldTypes.Date;
    createdBy: EntryFields.Text;
    category: Category;
    article_author: Array<Author>;
    featuredImage: Image;
    body: Document;
    backgroundPosition: string;
  };
}

export interface Category {
  contentTypeId: "category";
  fields: {
    slug: EntryFields.Text;
    name: EntryFields.Text;
    description: EntryFields.Text;
    featuredImage: Image;
    backgroundPosition: string;
  };
}

export const contentfulClient = createClient({
  space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});
