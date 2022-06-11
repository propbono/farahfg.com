import { IImage } from "../../interfaces";
import Image from "next/image";
export interface ICardProps {
  pretitle?: string | React.ReactNode;
  title: string | React.ReactNode;
  separator?: IImage;
  text: string | React.ReactNode;
  button?: React.ReactNode;
}

export const Card: React.FC<ICardProps> = (props) => {
  return (
    <div className="w-full px-8 pt-6 pb-10 bg-white rounded-md shadow-md group lg:opacity-60 lg:w-3/5 hover:opacity-100 transition-long">
      {props?.pretitle && <div>{props.pretitle}</div>}
      <div>{props.title}</div>
      {props?.separator && (
        <Image
          src={props.separator.src}
          className="mb-4"
          alt={props.separator.alt}
          width={100}
          height={20}
        />
      )}
      <div>{props.text}</div>
      {props?.button && <div>{props.button}</div>}
    </div>
  );
};

export default Card;
