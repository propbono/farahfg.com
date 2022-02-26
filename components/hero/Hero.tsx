import Image from "next/image";
import { Section, Container } from "@/components";
import { IHeroImage } from "@/interfaces";

const styles = {
  section: "relative bg-cover bg-gray-100",
  fullPage: "md:h-screen",
  halfPage: "md:h-[50vh]",
  image: "hidden md:block shadow-lg",
  container: "mt-24 md:mt-40 z-auto relative",
};

interface IHeroProps {
  image: IHeroImage;
  size?: "full" | "half";
  shapeColor?: string;
  children?: React.ReactNode;
}

export const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <Section
      className={`${styles.section} ${
        props.size === "half" ? styles.halfPage : styles.fullPage
      }`}
    >
      <div className={styles.image}>
        <Image
          src={props.image.src}
          blurDataURL=""
          alt={props.image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition={`center ${
            props.image.position ? props.image.position : "center"
          }`}
          quality={100}
          placeholder="blur"
          className="opacity-75 "
        />
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className={
                props.shapeColor
                  ? `${props.shapeColor} fill-current`
                  : "fill-transparent"
              }
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <Container className={styles.container}>{props.children}</Container>
    </Section>
  );
};
