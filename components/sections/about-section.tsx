import React from "react";
import Image from "next/image";
import aboutImage from "../../public/img/frank-mckenna.avif";
import Section from "../section/section";
import Container from "../container/container";
import Heading, { HeadingType } from "../heading/heading";
import { ScrollLink } from "../scroll-link/scroll-link";

export const AboutSection = () => {
  return (
    <Section>
      <Container className="md:my-48">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div id="about" className="w-full bg-cover">
            <Image
              className="rounded-tl-[8rem] rounded-br-[12rem] shadow-lg"
              src={aboutImage}
              alt="About section image"
            />
          </div>
          <div className="w-full">
            <Heading type={HeadingType.h2}>Farah Freight Group</Heading>
            <div className="space-y-4 text-xl leading-relaxed text-secondary">
              <p>
                Farah Freight Group is engaged in container shipping services
                worldwide with competitive prices for all cross-country
                destinations.
              </p>
              <p>
                Collaborate with many logistics companies to expand our shipping
                range, supported by many transportation fleets, competent and
                experienced workers and highly dedicated experts related to
                legality, customs and applicable regulations.
              </p>
              <p>
                Our freight forwarding services network connected to every
                remote area in various countries in the northern, eastern,
                southern and western continents.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4 justify-items-center">
              <ScrollLink to="services" offset={-185} className="w-full">
                <button className="w-full btn btn-secondary">Services</button>
              </ScrollLink>
              <ScrollLink to="contact" offset={-185} className="w-full">
                <button className="w-full btn btn-primary">Contact Us</button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
