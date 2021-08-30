import React from "react";
import Search from "./Search";
import Menu from "./Menu";
import User from "./User";

const Header = () => {
  return (
    <div
      className="
        xs:px-4
        xs:pb-px
        xs:pt-2
      xs:bg-light
      sm:bg-dark
        sm:py-2
        sm:pb-10
        lg:px-24
        md:w-full
        px-2
        m-auto
        flex
        items-stretch
        justify-between
        "
    >
      <div className="third one xs:self-center">
        <Search />
      </div>
      <div className="third">
        <Menu />
      </div>
      <div className="third">
        <User />
      </div>
    </div>
  );
};

export default Header;
