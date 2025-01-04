import AboutUs from "@/components/pages/landing/AboutUs/AboutUs";
import Pricing from "@/components/pages/landing/Pricing/Pricing";
import Plans from "@/components/pages/landing/Plans/Plans";
import Finance from "@/components/pages/landing/Finance/Finance";
import Hero from "@/components/pages/landing/Hero/Hero";
export default function Home() {
  return (
    <>
        <Hero></Hero>

        <div className="container">
            <div className="wrapper">
      <AboutUs />
      <Pricing />
      <Plans />
      <Finance />
                </div>
        </div>
    </>
  );
}
