import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
  image?: string;
}

export const StructuredData = ({
  title,
  description,
  datePublished,
  author,
  url,
  image,
}: StructuredDataProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: author,
    },
    datePublished: datePublished,
    image: image || "https://adamcantrun.com/default-image.jpg",
    url: url,
    publisher: {
      "@type": "Organization",
      name: "adamcantrun",
      logo: {
        "@type": "ImageObject",
        url: "https://adamcantrun.com/logo.png"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}; 