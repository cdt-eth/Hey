import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <Link href="#" passHref>
      <div className="flex mb-5 w-full cursor-pointer">
        <div className="text-center">
          <p
            className={`text-unread xs:text-3xl xs:pt-1 sm:pt-0 pr-2 sm:text-4xl md:text-5xl ${
              read ? "xs:hidden" : ""
            }`}
          >
            •
          </p>
        </div>

        <div className="self-center flex-img flex ">
          <Image
            className="rounded-full"
            src={`/${url}`}
            alt="me"
            width={50}
            height={50}
          />
        </div>

        <div className="self-center px-2 	w-4/6   flex-grow">
          <p className="sm:text-lg xs:text-sm xs:font-medium sm:font-bold text-off-white truncate w-auto">
            {subject}
          </p>
          <p className="text-light-grey xs:text-xs sm:text-base w-auto truncate">
            {body}
          </p>
        </div>

        <p className="text-light-grey xs:text-xs sm:text-md flex items-center justify-end ">
          {now}
        </p>
      </div>
    </Link>
  );
};

export default Email;
