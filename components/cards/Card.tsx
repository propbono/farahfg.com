import { ICardContent } from "@/interfaces";

export interface ICardProps {
  content: ICardContent;
}

const styles = {
  card: "text-center md:text-left group w-full md:opacity-50 hover:opacity-100 p-10 bg-white rounded-md shadow-lg max-w-lg md:max-w-4xl  transition-long",
};

export const Card = (props: ICardProps) => {
  return (
    <div id="card" className={styles.card}>
      <h2 className="text-4xl text-black font-bold uppercase md:text-6xl">
        {props.content.title1}{" "}
        <span className="text-primary">{props.content.title2}</span>
        {props.content.title3}
      </h2>
      <p
        className="mt-5 text-xl leading-normal md:mt-10 md:text-2xl md:leading-loose"
        dangerouslySetInnerHTML={{ __html: props.content.text }}
      />
    </div>
  );
};
