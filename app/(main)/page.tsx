import styles from "./page.module.scss";
import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterComponent from "@/components/Footer/FooterComponent"
import MainComponent from "@/components/Main/MainComponent"
import FeaturesComponent from "@/components/Features/FeaturesComponent"
export default function Home() {
  return (
      <div>
          <HeaderComponent/>
          <div className={styles.main}><MainComponent/></div>
          <div className={styles.features}><FeaturesComponent/></div>
          <div></div>
          <div className={styles.footer}><FooterComponent/></div>
      </div>
  );
}