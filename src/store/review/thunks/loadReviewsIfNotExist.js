import { normolizeEntities } from "../../helpers/normolizeEntities";
import { selectRestaurantReviewIdsById } from "../../restaurants/selectors";
import { selectReviewIds } from "../selectors";
import { reviewSliceActions } from "../index";

export const loadReviewsIfNotExist = (restaurantId) => (dispatch, getState) => {
  const restaurantReviews = selectRestaurantReviewIdsById(getState(), {
    restaurantId,
  });
  const dishIds = selectReviewIds(getState());

  if (
    restaurantReviews?.every(
      (restaurantReviewId) => dishIds.indexOf(restaurantReviewId) !== -1
    )
  ) {
    return;
  }

  dispatch(reviewSliceActions.startLoading());

  fetch(`http://localhost:3001/api/reviews?id=${restaurantId}`)
    .then((response) => response.json())
    .then((reviews) => {
      dispatch(reviewSliceActions.successLoading(normolizeEntities(reviews)));
    })
    .catch((error) => {
      dispatch(reviewSliceActions.failLoading());
    });
};
