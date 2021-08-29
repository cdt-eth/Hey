import React from "react";
import { FiPlus as Plus } from "react-icons/fi";

const Write = () => {
  return (
    <div>
      <a
        className="text-bright flex items-center border-2 px-3 text-xl pl-1 py-1 rounded-full "
        href="#"
      >
        <Plus className="text-3xl center-items font-light pr-1 ml-1" />
        Write
      </a>
    </div>
  );
};

export default Write;
