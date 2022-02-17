import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Hero, Layout } from "@/components";

const Home: NextPage = () => {
  const seo = {
    description:
      "Farah Freight Group website, showing services that the company provides.",
    keywords:
      "Trucks, Transportation, Trucking, Trucking Canada, Trucking Ontario",
  };
  return (
    <>
      <Head>
        <title>Farah Freight Group</title>
      </Head>
      <Layout seo={seo}>
        <Hero />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
