import React from "react";
import Search from "./Search";
import Menu from "./Menu";
import User from "./User";

const Header = () => {
  return (
    <div className="lg:px-24 xs:px-4 md:w-full xs:pb-px xs:pt-2 sm:py-2 px-2 sm:pb-10 m-auto flex items-stretch xs:bg-light sm:bg-dark">
      <Search />
      <Menu />
      <User />
    </div>
  );
};

export default Header;
