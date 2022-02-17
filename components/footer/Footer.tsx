import React from "react";

const styles = {
  wrapper: "w-full bg-black text-gray-100 text-lg z-10",
  container: "container  items-center justify-between mx-auto p-6 md:px-0",
  footer:
    "flex text-center md:text-left flex-col-reverse w-full md:w-auto md:justify-between md:flex-row",
  menu: "flex flex-col md:flex-row items-center md:justify-end mb-3 md:mb-0",
  link: "hover:text-primary md:before:content-['/'] md:before:opacity-40 md:before:mr-4 text-decoration-none my-2 md:my-0 md:ml-4",
};

export const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.footer}>
          <div>
            <p>© 2022 Farah Freight Group</p>
          </div>
          <div>
            <ul className={styles.menu}>
              <li className={styles.link}>
                <a href="https://www.facebook.com/#">Facebook</a>
              </li>
              <li className={styles.link}>
                <a href="https://www.instagram.com/#">Instagram</a>
              </li>
              <li className={styles.link}>
                <a href="https://twitter.com/#">Twitter</a>
              </li>
              <li className={styles.link}>
                <a href="https://linkedin.com/#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
