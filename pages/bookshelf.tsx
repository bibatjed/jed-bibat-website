import MetaContainer from "../components/MetaContainer";
import NavigationBar from "../components/NavigationBar";
import { ViewBoardsIcon } from "@heroicons/react/outline";
import BookImage from "../public/images/cover.png";
import Image from "next/image";
export default function BookShelf() {
  return (
    <MetaContainer>
      <main className="mx-auto relative max-w-3xl px-6 sm:px-8 mt-20 mb-36">
        <div className="mb-8 flex items-center space-x-4 text-gray-800 dark:text-white md:mb-10">
          <div className="h-12 w-12 rounded-xl shadow-sm border bg-white dark:border-gray-800 dark:bg-gray-800 ">
            <span className="h-full w-8 flex justify-center items-center mx-auto text-gray-400">
              <ViewBoardsIcon />
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {" "}
            Bookshelf{" "}
          </h2>
        </div>

        {/* BOOKLIST */}
        {/* TODO: make this dynamic */}
        <div className="bg-white sm:flex space-x-5 p-5 justify-around w-full sm:max-w-4xl border rounded-xl shadow-md dark:bg-gray-800/90 dark:border-gray-700 dark:shadow-black">
          <div className="w-full mb-5 sm:mb-0 sm:w-1/4 flex-shrink-0">
            <Image
              className="rounded-lg"
              src={BookImage}
              alt="Picture of the author"
              placeholder="blur"
              objectFit="cover"
              layout="responsive"
            />
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Let's Go!</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 space-x-1 mb-4">
              <span className="text-gray-800 dark:text-gray-200">
                Alex Edwards{" "}
              </span>
              <span>·</span>
              <span>2021</span>
            </p>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              "I started reading this book to improve my knowledge with the Go
              Programming Language, so far I'm loving this book and will
              definitely recommend this to someone starting out."
            </p>
          </div>
        </div>
      </main>
      <NavigationBar />
    </MetaContainer>
  );
}
