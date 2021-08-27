import React from "react";
import { IoSearch as SearchIcon } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex-1 flex items-center relative">
      <SearchIcon className="text-light-grey text-3xl absolute pl-2" />
      <input
        placeholder="Search"
        className="bg-light outline-none text-light-grey text-xl font-semibold rounded-full placeholder-light-grey px-2 py-2 pl-10"
      />
    </div>
  );
};

export default Search;
