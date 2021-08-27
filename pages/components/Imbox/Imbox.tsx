import React from "react";
import Email from "./Email";
import { FiPlus as Plus } from "react-icons/fi";

const Imbox = () => {
  return (
    <div className="lg:w-5/6  md:w-full m-auto px-16">
      <div className="bg-light rounded-t-3xl h-screen px-10 pt-6">
        <div className="flex justify-end items-center ">
          <a
            className="text-bright flex items-center border-2 px-3 text-xl pl-1 py-1 rounded-full"
            href="#"
          >
            <Plus className="text-3xl center-items font-light pr-1 ml-1 " />
            Write
          </a>
        </div>
        <h2 className="text-off-white m-auto text-center text-5xl font-bold">
          Imbox
        </h2>
        <div className="px-4">
          <Email
            subject={"CS 6035 - Project 1 - Part 1 Released!"}
            body={
              "CS 6035 via Ed - Your instructor Christian Turner posted an announcement on Ed. Simply click t..."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Imbox;
