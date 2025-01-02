import styles from "./styles.module.scss";
import { FC } from "react";

interface InfoBoxProps {
  title: string;
  text: string;
}

const InfoBox: FC<InfoBoxProps> = ({ title, text }) => {
  return (
    <div className={styles.infobox}>
      <h5 className={styles.infobox_title}>{title}</h5>
      <p className={styles.infobox_text}>{text}</p>
    </div>
  );
};

export default InfoBox;
