import Image from "next/image";
import logo from "@/public/img/logo.svg";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <div id="logo" className="relative flex gap-2 mr-3 uppercase items-center">
      <Link href="/">
        <a className="w-[72px] h-[36px] md:w-[104px] md:h-[52px] relative">
          <Image
            src={logo}
            alt="Farah Freight Group"
            quality={100}
            objectFit="cover"
            layout="fill"
          />
        </a>
      </Link>

      <div className="self-end md:text-xl max-w-[175px]">
        <h2>
          <span className="font-bold">Farah</span> Freight Group
        </h2>
      </div>
    </div>
  );
};
