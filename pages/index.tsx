import type { NextPage } from "next";
import Head from "next/head";
import { Card, Footer, HeroFullPage, Layout } from "@/components";
import { ICardContent, IHeroImage } from "@/interfaces";

import backgroundImage from "@/public/img/coming-soon/josiah-farrow.avif";

const content: ICardContent = {
  title1: "Serving",
  title2: "Canada",
  title3: " & USA!",
  text: "<strong>Farah</strong> Freight Group is a trucking company providing transportation services in Canada and U.S.A. We are a full-service trucking company with a focus on providing the best service to our customers.",
};

const image: IHeroImage = {
  src: backgroundImage,
  alt: "Photo by Josiah Farrow on Unsplash",
};

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
        <HeroFullPage image={image}>
          <Card content={content} />
        </HeroFullPage>
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
