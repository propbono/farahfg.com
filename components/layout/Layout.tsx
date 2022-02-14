import Head from "next/head";
import React, { ReactNode } from "react";
import { Header } from "@/components";

interface LayoutProps {
  children: ReactNode;
  seo: ISeo;
}

export interface ISeo {
  description: string;
  keywords: string;
}

export const Layout = ({ children, seo }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};
