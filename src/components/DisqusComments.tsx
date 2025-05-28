import { DiscussionEmbed } from "disqus-react";

interface DisqusCommentsProps {
  url: string;
  id: string;
  title: string;
}

export const DisqusComments = ({ url, id, title }: DisqusCommentsProps) => (
  <DiscussionEmbed
    shortname="adamcantrun"
    config={{
      url,
      identifier: id,
      title,
      language: "en_GB",
    }}
  />
);
