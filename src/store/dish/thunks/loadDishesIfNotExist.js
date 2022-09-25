import { normolizeEntities } from "../../helpers/normolizeEntities";
import { selectRestaurantDisheIdsById } from "../../restaurants/selectors";
import { selectDishIds } from "../selectors";
import { dishSliceActions } from "../index";

export const loadDishesIfNotExist = (restaurantId) => (dispatch, getState) => {
  const restaurantDishes = selectRestaurantDisheIdsById(getState(), {
    id: restaurantId,
  });
  const dishIds = selectDishIds(getState());

  if (
    restaurantDishes?.every(
      (restaurantDishId) => dishIds.indexOf(restaurantDishId) !== -1
    )
  ) {
    return;
  }

  dispatch(dishSliceActions.startLoading());

  fetch(`http://localhost:3001/api/products?id=${restaurantId}`)
    .then((response) => response.json())
    .then((dishes) => {
      dispatch(dishSliceActions.successLoading(normolizeEntities(dishes)));
    })
    .catch((error) => {
      dispatch(dishSliceActions.failLoading());
    });
};
