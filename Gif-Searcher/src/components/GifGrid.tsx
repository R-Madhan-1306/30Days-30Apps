import React from "react";
import { fetchGifs } from "@/lib/giphy";

interface Props {
  query: string;
}

const GifGrid: React.FC<Props> = ({ query }) => {
  const [gifs, setGifs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const getGifs = async () => {
      setLoading(true);
      try {
        const res = await fetchGifs(query);
        setGifs(res);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getGifs();
  }, [query]);

  if (loading) {
    return (
      <div className="text-center text-gray-500 text-lg font-semibold mt-6 animate-pulse">
        Loading Gifs...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {gifs.map((gif: any) => (
        <img
          key={gif.id}
          src={gif.images.downsized.url}
          alt={gif.title}
          className="w-full h-48 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  );
};

export default GifGrid;
