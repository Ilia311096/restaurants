import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRestaurantDisheIdsById } from "../../../store/restaurants/selectors";

export function useDishIds() {
  const { restaurantId } = useParams();
  return useSelector((state) =>
    selectRestaurantDisheIdsById(state, { id: restaurantId })
  );
}
