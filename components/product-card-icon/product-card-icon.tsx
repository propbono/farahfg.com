import React from "react";

type IProductCardSimpleProps = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  icon: React.ReactElement;
};

export const ProductCardIcon: React.FC<IProductCardSimpleProps> = (props) => {
  return (
    <div className="grid grid-cols-1 transition duration-500 ease-linear group lg:hover:scale-105">
      <div className="relative flex justify-center top-6">
        <div className="w-20 h-20 p-4 text-white transition duration-1000 ease-linear bg-primary group-hover:bg-secondary rounded-2xl">
          {props.icon}
        </div>
      </div>
      <div className="h-full px-6 py-6 bg-white rounded shadow-lg">
        <h2 className="mb-2 text-xl font-bold text-primary">{props.title}</h2>
        <p className="text-lg leading-relaxed text-secondary">
          {props.content}
        </p>
      </div>
    </div>
  );
};
