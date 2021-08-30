import React from "react";
import { IoSearch as SearchIcon } from "react-icons/io5";

const Search = () => {
  return (
    <div className="sm:flex-1 flex xs:flex-grow items-center relative">
      <SearchIcon className="xs:text-light-grey sm:text-off-white xs:text-2xl sm:text-3xl absolute pl-2" />
      <input
        placeholder="Search"
        className="xs:bg-dark sm:bg-light outline-none text-off-white xs:text-sm sm:text-xl font-semibold rounded-full xs:placeholder-light-grey sm:placeholder-off-white xs:flex-grow xs:mr-2 px-2 py-2 xs:pl-8 sm:pl-10"
      />
    </div>
  );
};

export default Search;
