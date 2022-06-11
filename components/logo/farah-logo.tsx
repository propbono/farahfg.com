import Image from "next/image";

import logo from "../../public/img/logo.svg";
import { ScrollLink } from "../scroll-link/scroll-link";

export const Logo: React.FC = () => {
  return (
    <div
      id="logo"
      className="relative flex items-center gap-2 px-4 py-3 mr-3 uppercase bg-white"
    >
      <ScrollLink
        to="hero"
        spy={true}
        smooth={true}
        duration={1000}
        className="w-[72px] h-[36px] lg:w-[104px] lg:h-[52px] relative"
      >
        <Image
          src={logo}
          alt="Farah Freight Group"
          quality={100}
          objectFit="cover"
          layout="fill"
        />
      </ScrollLink>

      <div className="text-sm lg:text-xl ">
        <h2>
          <span className="font-bold">Farah</span> Freight <br /> Group
        </h2>
      </div>
      <div className="p-4 text-sm font-bold border-l-2 lg:text-lg border-primary">
        +1 647-702-3267
      </div>
    </div>
  );
};

export default Logo;
