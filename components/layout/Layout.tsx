import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "@/components";

interface LayoutProps {
  children: ReactNode;
  seo?: ISeo;
}

export interface ISeo {
  description: string;
  keywords: string;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Head>
        <meta name="description" content={props.seo?.description} />
        <meta name="keywords" content={props.seo?.keywords} />
      </Head>
      <Header />
      <main>{props.children}</main>
    </>
  );
};
