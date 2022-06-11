import { IImage } from "@/interfaces";
import React from "react";

import { Parallax } from "react-parallax";
import { Section } from "../section/section";

interface IParallaxProps {
  children?: React.ReactNode;
}

const parallax: IImage = {
  src: "/img/frank-mckenna.avif",
  alt: "Photo by frank mckenna on Unsplash",
  position: "Center",
};

export const ParallaxSection: React.FC<IParallaxProps> = (props) => {
  return (
    <Section className="hidden z-5 md:block">
      <Parallax
        blur={5}
        bgImage={parallax.src}
        bgImageAlt={parallax.alt}
        strength={200}
      >
        <div className="min-h-[40vh] flex align-middle">{props.children}</div>
      </Parallax>
    </Section>
  );
};
