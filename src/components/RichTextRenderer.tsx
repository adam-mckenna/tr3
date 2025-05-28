import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { Document } from "@contentful/rich-text-types";
import React from "react";

type Props = {
  body: Document;
};

export const RichTextRenderer: React.FC<Props> = ({ body }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: React.ReactNode) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-elba leading-[1.6] tracking-[-.25px]">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-elba font-[600] text-[22px] -tracking-[1px]">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-elba font-[600] text-[18px] -tracking-[.75px]">
          {children}
        </h3>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="grid gap-1.5 list-disc ml-5">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="grid gap-1.5 list-decimal ml-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  return <>{documentToReactComponents(body, options)}</>;
};
