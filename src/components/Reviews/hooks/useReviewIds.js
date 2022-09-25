import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectRestaurantDisheIdsById,
  selectRestaurantReviewIdsById,
} from "../../../store/restaurants/selectors";

export function useReviewIds() {
  const { restaurantId } = useParams();
  return useSelector((state) =>
    selectRestaurantReviewIdsById(state, { restaurantId })
  );
}
