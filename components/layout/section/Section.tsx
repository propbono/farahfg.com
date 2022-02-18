import React from "react";

interface ISectionProps {
  children: Array<React.ReactElement> | React.ReactElement;
  className?: string;
}

export const Section: React.FC<ISectionProps> = (props) => {
  const additionalClasses = props.className ? ` ${props.className}` : "";
  return (
    <section className={`w-full h-auto overflow-hidden${additionalClasses}`}>
      {props.children}
    </section>
  );
};

export default Section;