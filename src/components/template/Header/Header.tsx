import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Icons } from "@/assets";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Link className="logo" href="#">
          <Image src={Icons.sinumlogo} alt="sinumLogo" />
        </Link>
        <nav className={styles.header__menu}>
          <ul className={styles.header__menu_list}>
            <li
              className={`${styles.header__menu_list_item} ${styles.header__menu_list_item_primary}`}
            >
              <Link href="#">Dashboard</Link>
            </li>
            <li
              className={`${styles.header__menu_list_item} ${styles.header__menu_list_item_secondary}`}
            >
              Features
            </li>
            <li
              className={`${styles.header__menu_list_item} ${styles.header__menu_list_item_tertiary}`}
            >
              FAQ
            </li>
          </ul>
        </nav>
        <nav className={styles.header__login}>
          <button className={styles.header__login_sign_in}>
            <Link href="#">sign in</Link>
          </button>
          <button className={styles.header__login_sign_up}>
            <Link href="#">sign up</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
