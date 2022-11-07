import Router from "next/router";
import React, { FC, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen w-full bg-slate-50">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
