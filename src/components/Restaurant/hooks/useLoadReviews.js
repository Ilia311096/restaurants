import { useDispatch } from "react-redux";
import { useSingleEffect } from "../../../hooks/useSingleEffect";
import { loadReviewsIfNotExist } from "../../../store/review/thunks/loadReviewsIfNotExist";

export const useLoadReviews = (restaurantId) => {
  const dispatch = useDispatch();

  useSingleEffect(() => {
    dispatch(loadReviewsIfNotExist(restaurantId));
  }, [restaurantId]);
};
