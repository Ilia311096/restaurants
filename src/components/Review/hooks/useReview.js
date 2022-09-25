import { useSelector } from "react-redux";
import { selectReviewById } from "../../../store/review/selectors";

export const useReview = (reviewId) => {
  return useSelector((state) => selectReviewById(state, { reviewId }));
};
