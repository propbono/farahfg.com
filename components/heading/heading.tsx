const styles = {
  h1: "mt-10 text-4xl md:text-6xl font-bold text-center text-white leading-loose",
  h2: "mb-4 text-4xl md:text-6xl font-bold text-primary leading-relaxed",
  h3: "mb-4 text-2xl md:text-4xl font-bold leading-snug text-secondary",
  shadow: { textShadow: "2px 2px 4px #212121" },
};

import React from "react";

export enum HeadingType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
}

type IHeading = HeadingType.h1 | HeadingType.h2 | HeadingType.h3;

interface IHeadingProps {
  children: string;
  className?: string;
  type: IHeading;
}

export const Heading: React.FC<IHeadingProps> = (props) => {
  switch (props.type) {
    case HeadingType.h2:
      return (
        <h2
          className={`${styles.h2} ${props.className ? props.className : ""}`}
        >
          {props.children}
        </h2>
      );
    case HeadingType.h3:
      return (
        <h3
          className={`${styles.h3} ${props.className ? props.className : ""}`}
        >
          {props.children}
        </h3>
      );
    default:
      return (
        <h1
          style={styles.shadow}
          className={`${styles.h1} ${props.className ? props.className : ""}`}
        >
          {props.children}
        </h1>
      );
  }
};

export default Heading;
