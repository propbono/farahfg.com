import Image from "next/image";
import { Section, Container } from "@/components";
import { IHeroImage } from "@/interfaces";

const styles = {
  section: "md:h-screen gradient relative bg-cover",
  image: "hidden md:block",
  container: "mt-24 md:mt-40 z-auto relative",
};

interface IHeroFullPageProps {
  image: IHeroImage;
  children: React.ReactNode;
}

export const HeroFullPage: React.FC<IHeroFullPageProps> = (props) => {
  return (
    <Section className={styles.section}>
      <div className={styles.image}>
        <Image
          src={props.image.src}
          blurDataURL=""
          alt={props.image.alt}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
      <Container className={styles.container}>{props.children}</Container>
    </Section>
  );
};
