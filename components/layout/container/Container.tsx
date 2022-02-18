import React from "react";

interface IContainerProps {
  children: Array<React.ReactNode> | React.ReactNode;
  className?: string;
}

export const Container: React.FC<IContainerProps> = (props) => {
  const additionalClasses = props.className ? ` ${props.className}` : "";
  return (
    <div className={`container mx-auto p-6 md:px-0${additionalClasses}`}>
      {props.children}
    </div>
  );
};

export default Container;
