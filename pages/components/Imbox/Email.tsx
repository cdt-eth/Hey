import React from "react";
import Image from "next/image";

interface Email {
  subject: string;
  body: string;
  url: string;
  read: boolean;
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

const Email = ({ subject, body, url, read }: Email) => {
  return (
    <div className="flex mb-5">
      <p
        className={`text-unread self-center xs:text-xl sm:text-4xl md:text-5xl ${
          read ? "xs:hidden" : ""
        }`}
      >
        •
      </p>

      <Image
        className="rounded-full self-center flex-1 w-12 h-12"
        src={`/${url}`}
        alt="me"
        width={50}
        height={50}
      />

      <div className="self-center px-2 max-w-full	w-5/6">
        <p className="sm:text-lg xs:text-sm xs:font-medium sm:font-bold text-off-white truncate w-auto">
          {subject}
        </p>
        <p className="text-light-grey xs:text-xs sm:text-sm w-auto truncate">
          {body}
        </p>
      </div>

      <p className="text-light-grey xs:text-xs sm:text-md flex flex-1 items-center justify-end ">
        {now}
      </p>
    </div>
  );
};

export default Email;
