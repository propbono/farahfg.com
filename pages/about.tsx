import React from "react";
import { Hero, Layout } from "@/components";
import type { NextPage } from "next";

import backgroundImage from "@/public/img/dillon-kydd.avif";
import Head from "next/head";
import { IHeroImage } from "@/interfaces";

const image: IHeroImage = {
  src: backgroundImage,
  alt: "Photo by Josiah Farrow on Unsplash",
  position: "Bottom",
};

const seo = {
  title: "About FFG",
  description:
    "Farah Freight Group website, showing services that the company provides.",
  keywords:
    "Trucks, Transportation, Trucking, Trucking Canada, Trucking Ontario",
};

const About: NextPage = () => {
  return (
    <Layout seo={seo}>
      <Hero size="half" image={image}>
        <h1>About</h1>
      </Hero>
    </Layout>
  );
};

export default About;
