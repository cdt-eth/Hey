import React from "react";
import Link from "next/link";
import { IoIosArrowBack as LeftArrow } from "react-icons/io";

const ImboxBtn = () => {
  return (
    <Link href="/" passHref>
      <div className="flex justify-center items-center cursor-pointer bg-off-white text-dark px-5 mr-2 font-semibold text-lg pl-3 rounded-full">
        <LeftArrow className="text-3xl " />

        <button className="">Imbox</button>
      </div>
    </Link>
  );
};

export default ImboxBtn;
