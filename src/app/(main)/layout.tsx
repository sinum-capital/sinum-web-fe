import React from "react";
import Header from "@/components/template/Header/Header";
import Footer from "@/components/template/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container">
        <div className="wrapper">
          <main className="main">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
