import type { NextPage } from "next";
import Link from "next/link";

const Err404: NextPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900">
      <main className="bg-gray-900">
        <span className="flex justify-center items-center w-screen x1:inline text-white">
          <h1 className="text-red-400 text-8xl x1:inline font-extrabold">
            404
          </h1>
          <p className="text-8xl">{" | "}</p>
          <h2 className="text-left">
            <span className="font-bold text-5xl">Page Not Found</span>
            <br />
            <span className="text-3xl text-gray-400">
              The Page you were looking for was not found.{" "}
            </span>
          </h2>
        </span>
        <div className="mt-5 mx-auto sm:flex sm:justify-center md:mt-8 p-5 m-5">
          <div className="rounded-md shadow flex items-center justify-center py-3 border border-transparent text-base font-medium text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
            <Link href="/">Go Home</Link>
          </div>
          <div className="rounded-md shadow flex items-center justify-center py-3 border border-transparent text-base font-medium text-blue-600 bg-white hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
            <Link href="/support">Get Support</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Err404;
