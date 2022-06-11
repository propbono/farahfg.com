import React from "react";

interface ISectionProps {
  children: Array<React.ReactNode> | React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<ISectionProps> = (props) => {
  const additionalClasses = props.className ? ` ${props.className}` : "";
  return (
    <section
      id={props.id}
      className={`w-full h-auto overflow-hidden${additionalClasses}`}
    >
      {props.children}
    </section>
  );
};

export default Section;
