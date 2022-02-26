import React from "react";
import { Container, Hero, Layout, Section } from "@/components";
import type { NextPage } from "next";

import backgroundImage from "@/public/img/dillon-kydd.avif";
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
      <Hero size="half" image={image} shapeColor="text-navy">
        <h1 className="mt-10 text-center text-6xl font-bold text-white shadow-sm">
          About
        </h1>
      </Hero>
      <Section className="bg-navy">
        <Container>
          <h2 className="text-center text-white">About</h2>
        </Container>
      </Section>
    </Layout>
  );
};

export default About;
