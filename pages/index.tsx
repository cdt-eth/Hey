import type { NextPage } from "next";
import Head from "next/head";
import Imbox from "./components/Imbox/Imbox";
import Header from "./components/Header/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-dark h-screen">
      <Head>
        <title>Imbox</title>
        <meta
          name="Hey"
          content="Hey clone built by github.com/christiandavidturner"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-dark">
        <Header newEmail={false} />
        <Imbox />
      </main>
    </div>
  );
};

export default Home;
