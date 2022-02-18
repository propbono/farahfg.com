const styles = {
  card: "flex flex-col overflow-hidden rounded-lg shadow-lg md:flex-row group md:hover:scale-105 transition-long",
  cardLeft:
    "items-center justify-center md:justify-start md:flex md:w-1/3 md:bg-dark-navy",
  cardRight:
    "flex flex-col items-center justify-center w-full pb-6 md:py-0 md:w-2/3 md:border-b-8 border-dark-navy md:group-hover:border-primary transition-long",
  cardTitle:
    "text-4xl font-bold text-dark-navy md:text-gray-100 mb-5 md:mb-10 leading-tight",
  cardTitleColor: "text-navy group-hover:text-primary transition-long",
  cardText: "mt-2 text-black lg:text-gray-400",
  formWrapper: "w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] lg:py-20",
};

export interface IFormCardTitle {
  title1: string;
  title2: string;
  title3: string;
  text: string;
}
interface IFormCardProps {
  children: Array<React.ReactNode> | React.ReactNode;
  content: IFormCardTitle;
}

export const FormCard: React.FC<IFormCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className="px-12 py-6">
          <h1 className={styles.cardTitle}>
            {props.content.title1 + " "}
            <span className={styles.cardTitleColor}>
              {props.content.title2 + " "}
            </span>{" "}
            {props.content.title3}
          </h1>
          <p className={styles.cardText}>{props.content.text}</p>
        </div>
      </div>
      <div className={styles.cardRight}>
        <div className={styles.formWrapper}>{props.children}</div>
      </div>
    </div>
  );
};
