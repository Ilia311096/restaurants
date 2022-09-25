import { normolizeEntities } from "../../helpers/normolizeEntities";
import { selectRestaurantIds } from "../selectors";
import { restaurantSliceActions } from "../index";

export const loadRestaurantsIfNotExist = (dispatch, getState) => {
  if (selectRestaurantIds(getState())?.length > 0) {
    return;
  }

  dispatch(restaurantSliceActions.startLoading());

  fetch("http://localhost:3001/api/restaurants")
    .then((response) => response.json())
    .then((restaurants) => {
      dispatch(
        restaurantSliceActions.successLoading(normolizeEntities(restaurants))
      );
    })
    .catch((error) => {
      dispatch(restaurantSliceActions.failLoading());
    });
};
