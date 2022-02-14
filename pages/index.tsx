import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/layout/Layout";
import backgroundImage from "../public/img/coming-soon/josiah-farrow.avif";
import logo from "../public/img/logo.svg";

const Home: NextPage = () => {
  const seo = {
    description:
      "Farah Freight Group website, showing services that the company provides.",
    keywords:
      "Trucks, Transportation, Trucking, Trucking Canada, Trucking Ontario",
  };
  return (
    <>
      <Head>
        <title>Farah Freight Group</title>
      </Head>
      <Layout seo={seo}>
        <div className="flex items-center justify-center w-screen h-screen gradient z-[-1]">
          <div className="fixed w-full h-full overflow-hidden opacity-75">
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
          <div
            id="card"
            className="opacity-75 hover:opacity-100 absolute flex flex-col items-center justify-center w-screen p-10 bg-white rounded-md shadow-lg md:max-w-4xl md:p-20"
          >
            <div id="logo" className="relative flex gap-2 mr-3 uppercase">
              <div className="w-[72px] h-[36px] md:w-[144px] md:h-[72px] relative">
                <Image
                  src={logo}
                  alt="Farah Freight Group"
                  quality={100}
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className="self-end text-xl md:text-4xl">
                <h2>
                  <span className="font-bold">Farah</span> Freight Group
                </h2>
              </div>
            </div>
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
      </Layout>
    </>
  );
};

export default Home;
