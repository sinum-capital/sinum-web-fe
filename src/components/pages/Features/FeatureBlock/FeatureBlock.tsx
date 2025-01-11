import Review from "@/components/common/Review/Review";
import styles from "./styles.module.scss";
import {ComponentPropsWithoutRef, FC} from "react";
import Image from "next/image";

interface FeatureBlockProps extends ComponentPropsWithoutRef<"div"> {
    descriptionText: string;
    descriptionTitle: string;
    imageSrc: string;
    totalfilledStars: number;
    userFirstName: string;
    userLastName: string;
    userJob: string;
    reviewText: string;
    imageFirst?: boolean;
}

const FeatureBlock: FC<FeatureBlockProps> = ({
                                                 totalfilledStars,
                                                 userFirstName,
                                                 userJob,
                                                 userLastName,
                                                 reviewText,
                                                 descriptionText,
                                                 descriptionTitle,
                                                 imageSrc,
                                                 imageFirst = false,
                                             }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {imageFirst ? (
                    <>
                        <div className={styles.walpaper}>
                            <Image
                                className={styles.walpaper__item}
                                src={imageSrc}
                                alt="walpaper"
                            />
                        </div>
                        <div className={styles.description}>
                            <h4 className={styles.description__title}>{descriptionTitle}</h4>
                            <p className={styles.description__text}>{descriptionText}</p>
                            {/* Review */}
                            <Review
                                totalfilledStars={totalfilledStars}
                                userFirstName={userFirstName}
                                userJob={userJob}
                                userLastName={userLastName}
                                reviewText={reviewText}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.description}>
                            <h4 className={styles.description__title}>{descriptionTitle}</h4>
                            <p className={styles.description__text}>{descriptionText}</p>
                            {/* Review */}
                            <Review
                                totalfilledStars={totalfilledStars}
                                userFirstName={userFirstName}
                                userJob={userJob}
                                userLastName={userLastName}
                                reviewText={reviewText}
                            />
                        </div>
                        <div className={styles.walpaper}>
                            <Image
                                className={styles.walpaper__item}
                                src={imageSrc}
                                alt="walpaper"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FeatureBlock;
