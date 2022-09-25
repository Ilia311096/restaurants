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

const CountComponent = () => {
  const [state, setState] = useState(0);

  return <button onClick={() => setState(state + 1)}>{state}</button>;
};

export const Review = ({ reviewId, className }) => {
  const review = useReview(reviewId);

  if (!review) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <CountComponent />
      <div className={styles.header}>
        <User userId={review.userId} />
        <Rating value={review.rating} size="small" />
      </div>
      <div>{review.text}</div>
      <VerySlowComponent />
    </div>
  );
};
