import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../store/restaurants/selectors";

export const useRestaurant = (restaurantId) => {
  return useSelector((state) =>
    selectRestaurantById(state, { id: restaurantId })
  );
};
