import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "@/components";
import { ISeo } from "@/interfaces";

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
      <Header />
      <main className="flex flex-col min-h-screen">{props.children}</main>
    </>
  );
};
