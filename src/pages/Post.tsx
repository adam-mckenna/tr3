import { useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="w-full max-w-128 mx-auto pt-8">
      <h1 className="font-black text-3xl text-elba">{id}</h1>
      <p className="text-philippine-grey text-lg font-serif mt-1">
        Description...
      </p>
    </section>
  );
};
