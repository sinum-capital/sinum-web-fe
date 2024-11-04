"use client";
import { CustomButton } from "@/ui-components/CustomButton";
import styles from "./page.module.scss";
import icon from "@/images/backArrowWhite.svg";

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
            imageProps={{ height: 10, width: 10, iconSrc: icon }}
            onClick={() => console.log("Button clicked!")}
            className="my-custom-style"
            disabled={false}
          />
          <CustomButton
          colorSet="c1"
          disabled={false}
          borderRadius="r1"
            text="Custom Button"
          />
          <CustomButton 
            imageProps={{ height: 10, width: 10, iconSrc: icon }}
            />
        </div>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
