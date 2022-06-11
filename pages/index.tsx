import {
  AboutSection,
  ContactSection,
  FooterSection,
  HeroSection,
  ParallaxSection,
  Layout,
  ServicesSection,
} from "@/components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const seo = {
    title: "Farah Freight Group",
    description:
      "Farah Freight Group website, showing services that the company provides.",
    keywords:
      "Trucks, Transportation, Trucking, Trucking Canada, Trucking Ontario",
  };

  return (
    <Layout seo={seo}>
      <HeroSection />
      <AboutSection />
      <ParallaxSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </Layout>
  );
};

export default Home;
