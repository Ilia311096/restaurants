import styles from "./styles.module.css";
import classnames from "classnames";
import { useLoadUsers } from "./hooks/useLoadUsers";
import { useIsReviewsLoading } from "./hooks/useIsReviewsLoading";
import { ReviewWithAuthorization } from "../Review/ReviewWithAuthorization";
import { useReviewIds } from "./hooks/useReviewIds";

export const Reviews = ({ className }) => {
  const reviewIds = useReviewIds();
  useLoadUsers();

  const isLoading = useIsReviewsLoading();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.title}>Reviews</span>
      <div className={styles.content}>
        {reviewIds.map((id) => (
          <ReviewWithAuthorization
            key={id}
            reviewId={id}
            className={styles.review}
          />
        ))}
      </div>
    </div>
  );
};
