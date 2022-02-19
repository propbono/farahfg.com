import { IMenu } from "@/interfaces";
import Link from "next/link";
import { useRouter } from "next/router";

interface IMenuProps {
  show: boolean;
}

const menu: Array<IMenu> = [
  { src: "/", text: "Home" },
  { src: "/about", text: "About" },
  { src: "/quote", text: "Request a Quote" },
];

const styles = {
  wrapper: "w-full block flex-grow md:w-auto md:flex md:items-center",
  menu: "text-sm md:ml-auto",
  item: "block mt-4 md:inline-block md:mt-0 hover:text-primary font-bold text-lg lg:text-xl mr-3 lg:mr-6 transition duration-500 ease-in-out",
  contact:
    "block mt-4 md:inline-block btn btn-primary md:leading-none md:ml-4 md:mt-0",
};

export const Menu: React.FC<IMenuProps> = (props) => {
  const router = useRouter();
  const visible = props.show ? "block" : "hidden md:block";

  return (
    <div className={`${styles.wrapper} ${visible}`}>
      <div className={styles.menu}>
        {menu.map(({ src, text }: IMenu) => {
          const active = router.asPath === src ? "text-primary" : "";
          return (
            <Link key={text} href={src}>
              <a className={`${styles.item} ${active}`}>{text}</a>
            </Link>
          );
        })}
        <Link href="/contact">
          <a className={styles.contact}>Contact Us</a>
        </Link>
      </div>
    </div>
  );
};
