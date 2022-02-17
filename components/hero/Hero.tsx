import Image from "next/image";
import backgroundImage from "@/public/img/coming-soon/josiah-farrow.avif";

const styles = {
  wrapper:
    "w-full h-auto md:h-screen gradient relative bg-cover overflow-hidden",
  image: "hidden md:block",
  container: "container mx-auto  p-6 md:px-0 mt-24 md:mt-40 z-auto relative",
  card: "text-center md:text-left group w-full md:opacity-50 hover:opacity-100 p-10 bg-white rounded-md shadow-lg max-w-lg md:max-w-4xl  transition-long",
};

export const Hero: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={backgroundImage}
          blurDataURL=""
          alt="Photo by Josiah Farrow on Unsplash"
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className={styles.container}>
        <div id="card" className={styles.card}>
          <h2 className="text-4xl text-black font-bold uppercase md:text-6xl">
            Serving <span className="text-primary">Canada</span> & USA!
          </h2>
          <p className="mt-5 text-xl leading-normal md:mt-10 md:text-2xl md:leading-loose">
            <span className="font-bold">Farah</span> Freight Group is a trucking
            company providing transportation services in Canada and U.S.A. We
            are a full-service trucking company with a focus on providing the
            best service to our customers.
          </p>
        </div>
      </div>
    </section>
  );
};
