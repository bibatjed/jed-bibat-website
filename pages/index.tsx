import type { NextPage } from "next";
import Head from "next/head";
import profilePic from "../public/images/me.jpg";
import Image from "next/image";
import technologies from "../constants/techonologies";
import Technologies from "../components/Technologies";
import NavigationBar from "../components/NavigationBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mark Jed Bibat</title>
        <meta name="description" content="Web - Jed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-3xl px-6 sm:px-8 mt-20 mb-36">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="order-2 sm:order-1 mt-6 max-w-lg sm:my-0">
            <h1 className="mb-2 text-3xl text-gray-900 font-bold dark:text-white sm:text-4xl">
              Mark Jed Bibat
            </h1>
            <h2 className="mb-4 font-semibold dark:text-gray-100">
              Backend/Full Stack Developer
            </h2>
            <p className="w-full font-normal leading-7 text-gray-800 dark:text-gray-300 sm:max-w-sm md:max-w-lg">
              Welcome to my portfolio. I&#39;m a web developer wherein I
              specialize in backend development but can work on frontend as
              well. In my free time I enjoy exploring web technologies and also
              a big fan of Esports!
            </p>
          </div>
          <div className="order-1 sm:order-2 block w-40">
            <Image
              className="rounded-full"
              src={profilePic}
              alt="Picture of the author"
              placeholder="blur"
              objectFit="cover"
              layout="responsive"
            />
          </div>
        </div>
        {/* TECHONOLOGIES */}
        <div>
          <h2 className="mb-6 text-2xl font-bold dark:text-white">
            Technologies I use:
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {" "}
            {technologies.map(({ id, ...rest }) => (
              <Technologies key={id} {...rest} />
            ))}
          </div>
        </div>
      </main>
      <NavigationBar />
    </div>
  );
};

export default Home;
