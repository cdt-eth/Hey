import React from "react";
import { IoSearch as SearchIcon } from "react-icons/io5";

const Search = () => {
  return (
    <div className="flex items-center relative test sm:w-48">
      <SearchIcon
        className="
        xs:text-light-grey
          xs:text-2xl
        sm:text-off-white
          sm:text-3xl
          absolute
          pl-2"
      />
      <input
        placeholder="Search"
        className="
        xs:bg-dark
          xs:text-sm
        xs:placeholder-light-grey
          xs:flex-grow
          xs:mr-2
          xs:pl-8
        sm:bg-light
          sm:text-xl
          sm:pl-10
        sm:placeholder-off-white
          font-semibold
          outline-none
        text-off-white
          rounded-full
          px-2
          py-2
        "
      />
    </div>
  );
};

export default Search;
