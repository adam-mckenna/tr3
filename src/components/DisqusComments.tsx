import { DiscussionEmbed } from "disqus-react";

export const DisqusComments = ({ className, url, id, title }) => (
  <DiscussionEmbed
    className={className}
    shortname="adamcantrun"
    config={{
      url,
      identifier: id,
      title,
      language: "en_GB",
    }}
  />
);
