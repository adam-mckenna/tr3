import React from "react";

import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

type Props = {
  body: Document;
};

export const RichTextRenderer: React.FC<Props> = ({ body }) => {
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p className="text-elba leading-[1.6] tracking-[-.25px]">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <h2 className="text-elba font-[600] text-[22px] -tracking-[1px]">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <h3 className="text-elba font-[600] text-[18px] -tracking-[.75px]">
          {children}
        </h3>
      ),
      [BLOCKS.QUOTE]: (_node, children) => (
        <blockquote className="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="grid gap-1.5 list-disc ml-5">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <ol className="grid gap-1.5 list-decimal ml-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => <li>{children}</li>,
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),
    },
  };

  return <>{documentToReactComponents(body, options)}</>;
};
