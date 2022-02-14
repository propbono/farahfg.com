import Link from "next/link";
import { useRouter } from "next/router";

interface IMenuProps {
  show: boolean;
}

interface IMenu {
  src: string;
  text: string;
}

const menu: IMenu[] = [
  { src: "/", text: "Home" },
  { src: "/about", text: "About" },
  { src: "/quote", text: "Request a Quote" },
];

const styles = {
  wrapper: "w-full block flex-grow md:w-auto md:flex md:items-center",
  menu: "text-sm lg:ml-auto",
  item: "block mt-4 lg:inline-block lg:mt-0 hover:text-primary font-bold text-xl mr-6 transition duration-500 ease-in-out",
  contact:
    "block mt-4 lg:inline-block btn btn-primary lg:leading-none lg:ml-4 lg:mt-0",
};

export const Menu = ({ show }: IMenuProps) => {
  const router = useRouter();
  const visible = show ? "block" : "hidden lg:block";

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.menu} ${visible}`}>
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
