import GIfGrid from "@/components/GifGrid";
import SearchBar from "@/components/SearchBar";
import React from "react";

const Home = () => {
  const [query, setQuery] = React.useState("happy");

  return (
    <div className="w-full max-w-4xl mx-auto text-center space-y-8 p-6 bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-4xl font-extrabold text-orange-500">🔥 Gif Searcher</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <GIfGrid query={query} />
    </div>
  );
};

export default Home;
