import { ISeo } from "@/interfaces";
import Head from "next/head";
import React, { ReactNode } from "react";
import { HeaderSection } from "../sections/header-section";

interface LayoutProps {
  children: ReactNode;
  seo?: ISeo;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Head>
        <meta name="description" content={props.seo?.description} />
        <meta name="keywords" content={props.seo?.keywords} />
        <title>
          {props.seo?.title ? props.seo.title : "Farah Freight Group"}
        </title>
      </Head>
      <HeaderSection />
      <main className="flex flex-col min-h-screen">{props.children}</main>
    </>
  );
};

export default Layout;
