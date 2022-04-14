import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </Head>
      <body
        className="antialiased 
        dark:bg-gray-900/95 dark:selection:bg-indigo-300 dark:selection:text-indigo-900"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
