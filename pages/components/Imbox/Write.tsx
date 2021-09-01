import Link from "next/link";
import React from "react";
import { FiPlus as Plus } from "react-icons/fi";

const Write = () => {
  return (
    <Link href="/new" passHref>
      <a
        className="text-bright flex items-center border-2 px-3 xs:text-sm sm:text-xl pl-1 py-1 rounded-full "
        href="#"
      >
        <Plus className="xs:text-lg sm:text-3xl center-items font-light pr-1 ml-1" />
        Write
      </a>
    </Link>
  );
};

export default Write;
