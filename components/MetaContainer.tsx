import Head from "next/head";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export default function MetaContainer({ children }: Props) {
  return (
    <>
      <Head>
        <title>Mark Jed Bibat</title>
        <meta name="description" content="Web - Jed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}
