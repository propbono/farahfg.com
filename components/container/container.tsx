import React from "react";

interface IContainerProps {
  children: Array<React.ReactNode> | React.ReactNode;
  className?: string;
  id?: string;
}
export const Container: React.FC<IContainerProps> = (props) => {
  const additionalClasses = props.className ? ` ${props.className}` : "";
  return (
    <div
      id={props.id}
      className={`container mx-auto p-6 md:px-0${additionalClasses}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
