import React from "react";

type IProductCardSimpleProps = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  icon: React.ReactElement | string;
};

export const ProductCardIcon: React.FC<IProductCardSimpleProps> = (props) => {
  return (
    <div className="grid grid-cols-1 transition duration-500 ease-linear group lg:hover:scale-105">
      <div className="relative flex justify-center align-center top-6">
        {props.icon}
      </div>
      <div className="px-6 py-6 bg-white rounded shadow-lg min-h-[400px]">
        <h2 className="mt-6 mb-4 text-xl font-bold text-primary">
          {props.title}
        </h2>
        <p className="text-lg leading-relaxed text-secondary">
          {props.content}
        </p>
      </div>
    </div>
  );
};
