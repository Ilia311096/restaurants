import { useSelector } from "react-redux";
import { selectIsReviewsLoading } from "../../../store/review/selectors";

export const useIsReviewsLoading = () => useSelector(selectIsReviewsLoading);
