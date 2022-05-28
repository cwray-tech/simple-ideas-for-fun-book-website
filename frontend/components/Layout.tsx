import React, { ReactNode } from "react";
import Head from "next/head";
import HeroSection from "./Sections/Hero";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Simple Ideas for Fun" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HeroSection title={title} />
    {children}
    <footer>
      <hr />
      <span>Copyright 2022, Areli Robles Flores</span>
    </footer>
  </div>
);

export default Layout;
