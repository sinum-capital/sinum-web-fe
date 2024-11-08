"use client";
import { CustomButton } from "@/ui-components/CustomButton";
import styles from "./page.module.scss";
import icon from "@/images/backArrowWhite.svg";

// className={`theme-green ${styles.page}`} - so we use green theme for app
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Main. Test components here Buttons:
        <div>
          <CustomButton
            borderRadius="r3"
            gradientBorder="b1"
            text="Custom Button"
            textStyle={{
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "14.46px",
              colorSet: "clr3"
            }}
            imageProps={{ height: 10, width: 10, iconSrc: icon }}
            onClick={() => console.log("Button clicked!")}
            disabled={false}
          />
          <CustomButton
            colorSet="c12"
            disabled={false}
            borderRadius="r1"
            text="Custom Button"
            textStyle={{
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "14.46px",
              colorSet: "clr2"
            }}
          />
          <CustomButton
            colorSet="c7"
            imageProps={{ height: 10, width: 10, iconSrc: icon }}
          />
        </div>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
