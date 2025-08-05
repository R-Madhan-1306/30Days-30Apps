import React from "react";
import { fetchGifs } from "@/lib/giphy";
import toast from "react-hot-toast"; // ✅ Using react-hot-toast

interface Props {
  query: string;
}

const GifGrid: React.FC<Props> = ({ query }) => {
  const [gifs, setGifs] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  const LIMIT = 20;

  const getGifs = async (append = false) => {
    if (!query.trim()) {
      setGifs([]);
      return;
    }

    setLoading(true);
    try {
      const res = await fetchGifs(query, offset);
      if (res.length === 0 && offset === 0) {
        toast("No GIFs found"); // ✅ Toast message
      }
      setGifs(prev => (append ? [...prev, ...res] : res));
    } catch (e) {
      console.error(e);
      toast.error("Failed to fetch GIFs"); // ✅ Error toast
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    setOffset(0);
    getGifs(false);
  }, [query]);

  React.useEffect(() => {
    if (offset === 0) return;
    getGifs(true);
  }, [offset]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight &&
      !loading
    ) {
      setOffset(prev => prev + LIMIT);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (!loading && gifs.length === 0 && query.trim()) {
    return (
      <div className="text-center text-gray-500 text-lg font-semibold mt-6">
        No GIFs found
      </div>
    );
  }

  return (
    <>
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
      {loading && (
        <div className="text-center text-gray-500 text-lg font-semibold mt-6 animate-pulse">
          Loading more GIFs...
        </div>
      )}
    </>
  );
};

export default GifGrid;
