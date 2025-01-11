import styles from "./styles.module.scss";
import Image from "next/image";
import { FC, ComponentPropsWithoutRef } from "react";

interface InfoTableProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  iconSrc: string;
  text: string;
}

const InfoTable: FC<InfoTableProps> = ({ title, text, iconSrc }) => {
  return (
    <div className={styles.infotable}>
      <div className={styles.infotable__wrapper}>
        <Image width={24} height={24} src={iconSrc} alt="dollar" />
        <h4 className={styles.infotable__title}>{title}</h4>
        <p className={styles.infotable__text}>{text}</p>
      </div>
    </div>
  );
};

export default InfoTable;
