import { IMenu } from "@/interfaces";
import { ScrollLink } from "../scroll-link/scroll-link";

interface IMenuProps {
  show: boolean;
  menu: Array<IMenu>;
}

const styles = {
  wrapper: "w-full block flex-grow md:w-auto md:flex md:items-center",
  menu: "text-sm md:ml-auto",
  item: "block mt-4 md:inline-block md:mt-0 hover:text-primary font-bold lg:text-xl mr-3 lg:mr-6 transition duration-500 ease-in-out ",
  contact:
    "block mt-4 md:inline-block btn btn-primary md:leading-none md:ml-4 md:mt-0 text-sm lg:text-xl",
  active: "text-primary",
};

export const Menu: React.FC<IMenuProps> = (props) => {
  const visible = props.show ? "block" : "hidden md:block";

  return (
    <div className={`${styles.wrapper} ${visible}`}>
      <div className={styles.menu}>
        {props.menu.map(({ src, text }: IMenu, index: number) => (
          <ScrollLink
            key={src}
            activeClass={styles.active}
            to={src.replace("/#", "")}
            spy={true}
            smooth={true}
            offset={index === 0 ? 0 : -185}
            duration={1000}
            className={
              index === props.menu.length - 1 ? styles.contact : styles.item
            }
          >
            {text}
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
