import StarRating from "@/components/UI/StarRating/StarRating";
import UserAvatar from "@/components/UI/UserAvatar/UserAvatar";
import styles from "./styles.module.scss";
import {ComponentPropsWithoutRef, FC} from "react";

interface ReviewProps extends ComponentPropsWithoutRef<"div"> {
    totalfilledStars: number;
    userFirstName: string;
    userLastName: string;
    userJob: string;
    reviewText: string;
}

const Review: FC<ReviewProps> = ({
                                     totalfilledStars,
                                     userFirstName,
                                     userJob,
                                     userLastName,
                                     reviewText,
                                 }) => {
    return (
        <div className={styles.review}>
            <StarRating filledStars={totalfilledStars}/>
            <span className={styles.review__text}>{reviewText}</span>
            <UserAvatar
                firstName={userFirstName}
                lastName={userLastName}
                job={userJob}
            />
        </div>
    );
};

export default Review;
