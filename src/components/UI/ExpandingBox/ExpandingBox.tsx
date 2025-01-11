"use client";

import styles from "./styles.module.scss";
import { FC } from "react";
interface ExpandingBoxProps {
  question: string;
  answer: string;
  id: number;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const ExpandingBox: FC<ExpandingBoxProps> = ({
  question,
  answer,
  id,
  isOpen,
  onToggle,
}) => {
  const handleToggle = () => {
    onToggle(id);
  };
  return (
    <div className={`${styles.box} ${isOpen ? styles.box_active : ""}`}>
      <div onClick={handleToggle} className={styles.box__header}>
        <h3 className={styles.box__title}>{question}</h3>
        <svg
          className={styles.box__img}
          width="31"
          height="13"
          viewBox="0 0 31 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.9584 0.621075C27.2496 0.42721 27.7303 0.431826 28.0282 0.630306L30.1 2.01044C30.3979 2.20892 30.4047 2.53202 30.1136 2.72589L15.7123 12.1514C15.5634 12.2529 15.3602 12.2991 15.1639 12.2899C14.9608 12.2945 14.7644 12.2483 14.6155 12.1514L0.214189 2.72589C-0.076951 2.53202 -0.0701803 2.20892 0.22773 2.01044L2.29956 0.630306C2.59747 0.431826 3.07819 0.42721 3.36933 0.621075L15.1639 8.33872L26.9584 0.621075Z"
            fill="#B5B5B5"
          />
        </svg>
      </div>

      <div
        className={`${styles.box__answer} ${
          isOpen ? styles.box__answer_active : ""
        }`}
      >
        <p className={styles.box__answer_text}>{answer}</p>
      </div>
    </div>
  );
};

export default ExpandingBox;
