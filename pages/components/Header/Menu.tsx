import React from "react";
import Image from "next/image";
import { IoIosArrowDown as ArrowDown } from "react-icons/io";
import Link from "next/link";

const Menu = () => {
  return (
    <Link href="#" passHref>
      <div className="cursor-pointer xs:hidden sm:flex flex-1 justify-center items-center">
        <Image src="/logo.svg" alt="hey-logo" width={85} height={40} />
        <ArrowDown className="text-bright text-2xl " />
      </div>
    </Link>
  );
};

export default Menu;
