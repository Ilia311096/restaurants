import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { useReview } from "./hooks/useReview";
import classnames from "classnames";
import { User } from "../User/User";
import { useState } from "react";
const VerySlowComponent = () => {
  console.log("render");
  return <div>VerySlow</div>;
};

export const ReviewWithoutUser = ({ reviewId, className }) => {
  const review = useReview(reviewId);

  if (!review) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.header}>
        <Rating value={review.rating} size="small" />
      </div>
      <div>{review.text}</div>
      <VerySlowComponent />
    </div>
  );
};
