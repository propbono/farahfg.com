import Image from "next/image";
import { Section, Container } from "@/components";
import { IHeroImage } from "@/interfaces";

const styles = {
  section: "gradient relative bg-cover",
  fullPage: "md:h-screen",
  halfPage: "md:h-[50vh]",
  image: "hidden md:block opacity-75",
  container: "mt-24 md:mt-40 z-auto relative",
};

interface IHeroProps {
  image: IHeroImage;
  size?: "full" | "half";
  children: React.ReactNode;
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
        />
      </div>
      <Container className={styles.container}>{props.children}</Container>
    </Section>
  );
};
