import Image from "next/image";
import backgroundImage from "@/public/img/coming-soon/josiah-farrow.avif";

const styles = {
  wrapper: "flex w-screen h-screen gradient relative bg-cover",
  image: "w-full h-full overflow-hidden hidden md:fixed md:block",
  container: "container mx-auto p-6 md:px-0 mt-24 md:mt-28 z-auto relative",
  card: "group w-full md:opacity-50 hover:opacity-100 p-10 bg-white rounded-md shadow-lg max-w-lg md:max-w-4xl md:p-20 transition-long",
};

export const Hero = () => {
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
          <div className="flex-1 mt-5 text-center md:mt-10">
            <h3 className="text-xl font-bold uppercase md:text-5xl text-navy">
              Coming Soon!
            </h3>
            <p className="mt-5 text-xl md:mt-10 md:text-2xl">
              <span className="font-bold">Farah</span> Freight Group is a
              trucking company providing transportation services in Canada and
              U.S.A.
            </p>
            <p className="mt-5 text-xl md:mt-10 md:text-3xl">Contact us:</p>
            <p className="mt-2 text-2xl font-bold md:mt-4 md:text-5xl">
              416-702-3267
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
