import Image from "next/image";
import SmoothScrollButton from "../SmoothScrollButton/SmoothScrollButton";
import styles from "./styles.module.scss";
import { Icons } from "@/assets";

const AboutUs = () => {
  return (
    <div id="aboutUs" className={styles.aboutUs}>
      {/* ця кнопка повинна бути в секції з тими графіка,а не тут */}
      <div>
        <SmoothScrollButton className={styles.aboutUs_btn} targetId="aboutUs">
          About
        </SmoothScrollButton>
      </div>
      <h2 className={styles.aboutUs_title}>About us</h2>
      <p className={styles.aboutUs_text}>
        We are Sinum Capital, an innovative fintech startup that combines
        answers to all your financial questions. A convenient portfolio manager,
        an accessible educational segment, a news screener, individualized
        investment and financial plans, advice on managing your capital, risk
        analysis based on a custom AI model, a unique sentimental market
        analysis, the possibility of personal consultations with experts - these
        are all opportunities that offers Sinum Capital for its clients.
      </p>
      <div className={styles.aboutUs_image}>
        <Image src={Icons.aboutUsBanner} alt="About us Banner" />
      </div>
    </div>
  );
};

export default AboutUs;
