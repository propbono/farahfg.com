import React, { useEffect, useState } from "react";
import { Hamburger, Logo, Menu } from "@/components";
import { useDevLogger } from "@/utils/dev-loger";

const styles = {
  wrapper:
    "group fixed w-full hover:shadow-2xl transition delay-150 bg-white bg-opacity-0 hover:bg-opacity-100 duration-700 ease-in-out z-10",
  container:
    "container flex flex-wrap items-center justify-between mx-auto p-6 md:px-0",
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState("bg-opacity-0");

  const onClickHandler = () => {
    setIsOpen(!isOpen);
    console.log("Clicked");
  };

  useDevLogger("Header", { isOpen: isOpen, opacity: opacity });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setOpacity("bg-opacity-100");
      } else {
        setOpacity("bg-opacity-0");
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={`${styles.wrapper} ${opacity}`}>
      <div className={styles.container}>
        <Logo />
        <Hamburger onClick={onClickHandler} />
        <Menu show={isOpen} />
      </div>
    </div>
  );
};

export default Header;
