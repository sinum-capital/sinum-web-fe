import styles from "./page.module.scss";
import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterComponent from "@/components/Footer/FooterComponent"
import AboutUsComponent from "@/components/AboutUs/AboutUsComponent"
import PricingComponent from "@/components/Pricing/PricingComponent"
import ComparisonComponent from "@/components/Comparison/ComparisonComponent"
import OverviewComponent from "@/components/Overview/OverviewComponent"
import HeroComponent from "@/components/Pohuiyaknazvu/HeroComponent"
export default function Home() {
  return (
      <div>
          <div><HeaderComponent/></div>
          <div><HeroComponent/></div>
          <div><AboutUsComponent/></div>
          <div><PricingComponent/></div>
          <div><ComparisonComponent/></div>
          <div><OverviewComponent/></div>
          <div className={styles.footer}><FooterComponent/></div>
      </div>
  );
}
