import { ICompoundTitle } from "@/interfaces";

const styles = {
  card: "flex flex-col overflow-hidden rounded-lg shadow-lg md:flex-row group md:hover:scale-105 transition-long bg-white mb-6",
  cardLeftContainer:
    "items-start flex flex-col justify-center md:w-1/3 md:bg-secondary px-12 py-6",
  cardRightContainer:
    "items-center flex w-full  px-12 py-6 md:w-2/3 md:border-b-8 border-secondary md:group-hover:border-primary transition-long md:p-6",
  cardRightContent: "w-full lg:max-w-3xl mx-auto",
  title:
    "text-2xl md:text-3xl xl:text-4xl font-bold text-secondary md:text-gray-100 mb-5 md:mb-10 leading-tight",
  subtitle: "text-2xl font-bold md:text-gray-100",
  helperText: "mt-2 text-black md:text-gray-400",
};

type IFormCardProps = {
  children: Array<React.ReactNode> | React.ReactNode;
  title?: React.ReactNode | string;
  subtitle?: string;
  helperText?: string;
};

export const FormCard: React.FC<IFormCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeftContainer}>
        {!!props.title ? (
          <div className={styles.title}>{props.title}</div>
        ) : !!props.subtitle ? (
          <h2 className={styles.subtitle}>{props.subtitle}</h2>
        ) : null}

        <p className={styles.helperText}>{props.helperText}</p>
      </div>
      <div className={styles.cardRightContainer}>
        <div className={styles.cardRightContent}>{props.children}</div>
      </div>
    </div>
  );
};

export default FormCard;
