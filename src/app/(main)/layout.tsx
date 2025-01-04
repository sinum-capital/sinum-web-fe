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
          <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
