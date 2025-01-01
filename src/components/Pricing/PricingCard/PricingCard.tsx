import { FC } from "react";
import styles from "./styles.module.scss";

interface PricingCardProps {
  title: string;
  text: string;
  price: string;
  features: string[];
  buttonText: string;
  isFeatured?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  text,
  price,
  features,
  buttonText,
  isFeatured,
}) => {
  return (
    <div className={`${styles.card} ${isFeatured ? styles.featured : ""}`}>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_text}>{text}</p>
      {/* ціну треба відреагувати так щоб стилі примінялись лише до ціни конкретно,а /month був спаном */}
      <span className={styles.card_price}>{price} </span>
      <ul className={styles.card__features}>
        {features.map((feature) => (
          <li key={feature}>
            <span className={styles.card__features_item}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={styles.card__btn}>{buttonText}</button>
    </div>
  );
};

export default PricingCard;
