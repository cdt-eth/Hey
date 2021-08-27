import React from "react";
import Image from "next/image";

interface Email {
  subject: string;
  body: string;
}

const today = new Date();
const now = today
  .toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
  .replace("AM", "am")
  .replace("PM", "pm")
  .replace(" ", "");

const Email = ({ subject, body }: Email) => {
  return (
    <div className="flex">
      <p className="text-unread self-center text-5xl">•</p>
      <Image
        className="rounded-full self-center"
        src="/user.jpg"
        alt="me"
        width={50}
        height={50}
      />
      <div className="self-center px-2">
        <p className="text-xl font-bold text-off-white">{subject}</p>
        <p className="text-light-grey">{body}</p>
      </div>

      <p className="text-light-grey text-lg flex flex-1 items-center justify-end ">
        {now}
      </p>
    </div>
  );
};

export default Email;
