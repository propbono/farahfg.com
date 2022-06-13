import React from "react";
import { Container } from "../container/container";
import { Section } from "../section/section";

export const FooterSection: React.FC = () => {
  return (
    <Section className="z-10 text-lg text-gray-100 bg-secondary">
      <Container>
        <footer className="flex flex-col-reverse w-full text-center md:text-left md:w-auto md:justify-between md:flex-row">
          <div>
            <p>© 2022 Farah Freight Group</p>
          </div>
          {/* <div>
            <ul className="flex flex-col items-center mb-3 md:flex-row md:justify-end md:mb-0">
              <li className="hover:text-primary md:before:content-['/'] md:before:opacity-40 md:before:mr-4 text-decoration-none my-2 md:my-0 md:ml-4">
                <a href="https://www.facebook.com/#">Facebook</a>
              </li>
              <li className="hover:text-primary md:before:content-['/'] md:before:opacity-40 md:before:mr-4 text-decoration-none my-2 md:my-0 md:ml-4">
                <a href="https://www.instagram.com/#">Instagram</a>
              </li>
              <li className="hover:text-primary md:before:content-['/'] md:before:opacity-40 md:before:mr-4 text-decoration-none my-2 md:my-0 md:ml-4">
                <a href="https://twitter.com/#">Twitter</a>
              </li>
              <li className="hover:text-primary md:before:content-['/'] md:before:opacity-40 md:before:mr-4 text-decoration-none my-2 md:my-0 md:ml-4">
                <a href="https://linkedin.com/#">LinkedIn</a>
              </li>
            </ul>
          </div> */}
        </footer>
      </Container>
    </Section>
  );
};

export default FooterSection;
