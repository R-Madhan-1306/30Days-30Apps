import React from "react";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <input
      className="w-full px-6 py-3 border border-gray-300 rounded-lg text-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search Gifs..."
    />
  );
};

export default SearchBar;
