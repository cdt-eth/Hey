import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header/Header";
import { AiOutlinePaperClip as Attachment } from "react-icons/ai";
import { MdFormatColorText as Format } from "react-icons/md";
import { IoTrashOutline as Trash } from "react-icons/io5";
import Link from "next/link";

const New: NextPage = () => {
  return (
    <div className="bg-dark h-screen">
      <Head>
        <title>New Message</title>
        <meta
          name="Hey"
          content="Hey clone built by github.com/christiandavidturner"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-dark">
        <Header newEmail={true} />

        <div className="md:w-full m-auto sm:px-5 lg:x-5 xl:w-5/6 pb-10">
          <div className="xs:bg-mid sm:bg-light sm:rounded-3xl sm:pt-6 px-10 ">
            {/* DESKTOP */}
            <h4 className="xs:hidden sm:block text-off-white m-auto text-center sm:text-xl lg:text-xl font-bold pb-8 pt-8">
              New Message
            </h4>

            <div className="flex flex-col">
              <form action="">
                <div className="mb-5">
                  <div className="flex flex-row items-center mb-3 text-off-white text-lg">
                    <p className="mr-12">To</p>
                    <input
                      className="input w-full mr-3 py-1 px-2  focus:outline-none"
                      type="text"
                      name="subject"
                    />
                    <button className="ml-2 text-light-grey">CC/BCC</button>
                  </div>
                  <hr className="text-new" />
                </div>

                <div className="mb-5">
                  <div className="flex flex-row items-center mb-3 text-off-white text-lg">
                    <p className="mr-2">Subject</p>
                    <input
                      className="input w-full mr-3 py-1 px-2  focus:outline-none"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <hr className="text-new" />
                </div>

                <div className="mb-5">
                  <div className="flex flex-row items-center mb-3 text-off-white text-lg min-h-full h-58">
                    <textarea
                      placeholder="Type your message..."
                      className="input align-top overflow-y-auto	 resize-none w-full mr-3 py-1 px-2  focus:outline-none"
                      name="subject"
                      rows={7}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="flex flex-row py-10">
              <div className="flex-grow ">
                <button className="cursor-pointer mr-2 bg-bright text-dark font-bold rounded-full p-2 px-4">
                  Send Email
                </button>

                <button className="cursor-pointer mr-2 text-light-grey font-bold p-2 px-4 rounded-full border border-new">
                  Save Draft
                </button>

                <button className="cursor-pointer mr-2 text-light-grey  text-3xl align-middle">
                  <Attachment />
                </button>

                <button className="cursor-pointer mr-2 text-light-grey text-3xl align-middle">
                  <Format />
                </button>
              </div>

              <button className="cursor-pointer text-light-grey p-2 rounded-full border border-new justify-end text-3xl align-middle">
                <Trash />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default New;
