import React from "react";
import Image from "next/image";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";

const Menu = () => {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Image src="/logo.svg" alt="hey-logo" width={85} height={40} />
      <ArrowDown className="text-bright text-2xl " />
    </div>
  );
};

export default Menu;
