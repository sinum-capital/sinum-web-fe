import Footer from "@/components/Footer/Footer";
import Header from "../../components/Header/Header";
import AboutUs from "@/components/AboutUs/AboutUs";
import Pricing from "@/components/Pricing/Pricing";
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <Header />
      </div>
      <div className="container">
        <div className="wrapper">
          <main className="main">
            <AboutUs />
            <Pricing />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
