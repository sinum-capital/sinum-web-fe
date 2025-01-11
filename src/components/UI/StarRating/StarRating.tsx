import Image from "next/image";
import { ComponentPropsWithoutRef, FC } from "react";
import { Icons } from "@/assets";
import styles from "./styles.module.scss";

interface StarRatingProps extends ComponentPropsWithoutRef<"div"> {
  filledStars: number;
}

const StarRating: FC<StarRatingProps> = ({
  filledStars,
  className = "",
  ...rest
}) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const isFilled = i < filledStars;
    stars.push(
      <Image
        src={isFilled ? Icons.filledStar : Icons.emptyStar}
        key={i}
        alt="star"
      />
    );
  }

  return (
    <div className={`${className} ${styles.star_rating}`} {...rest}>
      {stars}
    </div>
  );
};

export default StarRating;
