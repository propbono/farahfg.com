import { IImage } from "@/interfaces";
import { Card } from "../card/card";
import Heading, { HeadingType } from "../heading/heading";
import { Hero } from "../hero/hero";
import { ScrollLink } from "../scroll-link/scroll-link";

const image: IImage = {
  src: "/img/josiah-farrow.avif",
  alt: "Photo by Josiah Farrow on Unsplash",
};

export const HeroSection = () => {
  return (
    <Hero image={image} size="full">
      <Card
        title={<Heading type={HeadingType.h3}> Serving Canada & USA</Heading>}
        text={
          <p className="mb-10 text-2xl leading-relaxed transition lg:opacity-60 group-hover:opacity-100 duration-1500 ease">
            <span className="font-bold">Farah Freight Group</span> is a company
            engaged in freight forwarding services for export and import to all
            countries. We assist and facilitate clients to access worldwide
            logistics transportation at competitive prices and on schedule.
          </p>
        }
        button={
          <ScrollLink to="about" offset={-185}>
            <button className="btn btn-primary">Read more</button>
          </ScrollLink>
        }
      />
    </Hero>
  );
};
