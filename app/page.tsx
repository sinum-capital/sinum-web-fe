import styles from "./page.module.scss";
import Switch from "@/ui-components/Switch/Switch";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>switch</h2>
          <Switch/>
      </main>
      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  );
}