import { CustomButton } from "@/ui-components/CustomButton";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Main. Test components here
        Buttons:
        <div>
          <CustomButton/>
        </div>
      </main>
      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  );
}