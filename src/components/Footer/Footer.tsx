import Link from "next/link";
import styles from "./styles.module.scss";
import { Icons } from "@/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className={styles.footer__content}>
        <span className={styles.footer__content_copyright}>
          © SINUM CAPITAL 2024 ALL RIGHTS RESERVED
        </span>
        <div className={styles.footer__content_media}>
          <Link href="#">
            <Image src={Icons.telegramLogo} alt="telegramlogo" />
          </Link>
          <Link href="#">
            <Image src={Icons.twitterLogo} alt="telegramlogo" />
          </Link>
          <Link href="#">
            <span>Terms of Service</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
