import React from "react";
import Image from "next/image";

const User = () => {
  return (
    <div className="flex items-center justify-end sm:flex-1 sm:pr-5">
      <p className="text-off-white font-md text-xl px-2 xs:hidden sm:flex">
        Me
      </p>
      <Image
        className="rounded-full"
        src="/user.jpg"
        alt="me"
        width={43}
        height={43}
      />
    </div>
  );
};

export default User;
