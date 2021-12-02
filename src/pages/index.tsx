import { NextPage } from "next";
import Head from "next/head";

import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import { IExploreData } from "../interfaces";

interface Props {
  exploreData: IExploreData[];
}

const Home: NextPage<Props> = ({ exploreData }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semiboldpb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((data: IExploreData, key) => (
              <SmallCard key={key} data={data} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
};
