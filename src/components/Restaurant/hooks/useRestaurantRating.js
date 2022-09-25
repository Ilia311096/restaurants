import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { createSelectRestaurantRating } from "../../../store/restaurants/selectors";

export const useRestaurantRating = (restaurantId) => {
  const selectRestaurantRating = useCallback(
    createSelectRestaurantRating(),
    []
  );

  return useSelector((state) =>
    selectRestaurantRating(state, { restaurantId })
  );
};
