import React from "react";

interface IContainerProps {
  children: Array<React.ReactElement> | React.ReactElement;
}

export const Container: React.FC<IContainerProps> = (props) => {
  return <div className="container mx-auto p-6 md:px-0">{props.children}</div>;
};

export default Container;
