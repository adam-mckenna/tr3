import { createClient, EntryFieldTypes } from "contentful";

export interface Article {
  contentTypeId: "article";
  fields: {
    slug: EntryFieldTypes.Text;
    title: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
    publishedDate: EntryFieldTypes.Text;
    category: EntryFieldTypes.Text;
    featuredImage: {
      fields: {
        file: {
          url: EntryFieldTypes.Text;
        };
        description: EntryFieldTypes.Text;
      };
    };
    body: Document;
  };
}

export const contentfulClient = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});
