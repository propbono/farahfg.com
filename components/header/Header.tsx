import React, { useEffect, useState } from "react";
import { Container, Hamburger, Logo, Menu, Section } from "@/components";
import { useDevLogger } from "@/utils/dev-loger";

const styles = {
  section:
    "fixed hover:shadow-2xl transition delay-150 bg-white hover:bg-opacity-100 transition-long z-10",
  header: "flex flex-wrap items-center justify-between",
};

export const Header: React.FC = () => {
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
    <Section className={`${styles.section} ${opacity}`}>
      <Container>
        <header className={styles.header}>
          <Logo />
          <Hamburger onClick={onClickHandler} />
          <Menu show={isOpen} />
        </header>
      </Container>
    </Section>
  );
};

export default Header;
