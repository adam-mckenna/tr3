import { FC, useRef } from "react";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

import { Image } from "@utils/contentful";
import { AdUnit } from "@components/AdUnit";

type RichTextRendererProps = {
  body: Document;
};

export const RichTextRenderer: FC<RichTextRendererProps> = ({ body }) => {
  const paragraphCounter = useRef(0);

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => {
        paragraphCounter.current += 1;
        const count = paragraphCounter.current;

        return (
          <>
            <p className="text-elba leading-[1.6] tracking-[-.25px]">
              {children}
            </p>

            {(count === 2) && (
             <AdUnit slot="6496606373" />
            )}
            {(count === 14) && (
             <AdUnit slot="9090980120" />
            )}
            {(count == 22) && (
             <AdUnit slot="4659058324" />
            )}
          </>
        );
      },
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
        <blockquote className="p-4 border-s-4 border-gray-300 bg-gray-50 italic">
          {children}
        </blockquote>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="grid gap-1.5 list-disc ml-5">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <ol className="grid gap-1.5 list-decimal ml-4">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => (
        <li className="pl-0.5 text-elba">{children}</li>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          target="_blank"
          className="text-sea-blue hover:text-sea-blue-dark focus:text-sea-blue-dark underline transition-all focus:outline-none focus:ring-2 focus:ring-elba focus:ring-offset-2"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
      [BLOCKS.TABLE]: (_node, children) => (
        <div className="overflow-x-scroll overflow-y-hidden max-w-full border border-neutral-200">
          <table>{children}</table>
        </div>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (_node, children) => (
        <th className="px-4 py-2.5 bg-neutral-100 text-left border-b border-neutral-200">
          {children}
        </th>
      ),
      [BLOCKS.TABLE_ROW]: (_node, children) => (
        <tr className="odd:bg-neutral-50">{children}</tr>
      ),
      [BLOCKS.TABLE_CELL]: (_node, children) => (
        <td className="px-4 py-2.5">{children}</td>
      ),
      [BLOCKS.HR]: (_node) => (
        <hr className="border-b border-t-0 my-2 border-neutral-200" />
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = node.data.target as Image;

        if (!asset.fields.file?.url) return null;

        return (
          <>
            <img
              src={
                asset.fields.file.url.startsWith("//")
                  ? `https:${asset.fields.file.url}`
                  : asset.fields.file.url
              }
              alt={asset.fields.description || asset.fields.title || "Image"}
              className="mt-2 max-w-full h-auto"
            />
            <p className="text-philippine-grey text-xs font-light -mt-2">
              {asset.fields.description || asset.fields.title}
            </p>
          </>
        );
      },
    },
  };

  return documentToReactComponents(body, options);
};
