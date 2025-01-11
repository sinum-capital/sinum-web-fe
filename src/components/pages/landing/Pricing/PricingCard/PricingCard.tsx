import {FC} from "react";
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
                    <li className={styles.card__features_content} key={feature}>
                        <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.6339 1.47718L7.13392 12.9772C7.06716 13.044 6.98789 13.097 6.90064 13.1332C6.81338 13.1694 6.71985 13.188 6.6254 13.188C6.53094 13.188 6.43742 13.1694 6.35016 13.1332C6.26291 13.097 6.18364 13.044 6.11688 12.9772L1.08563 7.94593C0.950767 7.81106 0.875 7.62814 0.875 7.43741C0.875 7.24668 0.950767 7.06376 1.08563 6.92889C1.2205 6.79403 1.40342 6.71826 1.59415 6.71826C1.78488 6.71826 1.9678 6.79403 2.10267 6.92889L6.6254 11.4525L17.6169 0.460145C17.7518 0.325279 17.9347 0.249512 18.1254 0.249512C18.3161 0.249512 18.4991 0.325279 18.6339 0.460145C18.7688 0.595012 18.8446 0.777931 18.8446 0.968661C18.8446 1.15939 18.7688 1.34231 18.6339 1.47718Z"
                                fill="#4881E7"
                            />
                        </svg>
                        <span className={styles.card__features_item}>{feature}</span>
                    </li>
                ))}
            </ul>
            <button className={styles.card__btn}>{buttonText}</button>
        </div>
    );
};

export default PricingCard;
