import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Layout = {
  children: ReactNode;
};

const Layout = ({ children }: Layout) => {
  return (
    <div className='content'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
