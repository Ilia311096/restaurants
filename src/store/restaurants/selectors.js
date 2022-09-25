import { selectReviewById, selectReviewEntities } from "../review/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantIdsFilteredByName = (state, { restaurantName }) =>
  Object.values(selectRestaurantModule(state).entities)
    .filter(
      ({ name }) =>
        name?.toLowerCase().indexOf((restaurantName || "")?.toLowerCase()) !==
        -1
    )
    .map(({ id }) => id);

export const selectRestaurantById = (state, { id }) =>
  selectRestaurantModule(state).entities[id];

export const selectRestaurantNameById = (state, { id }) =>
  selectRestaurantModule(state).entities[id]?.name;

export const selectRestaurantDisheIdsById = (state, { id }) =>
  selectRestaurantModule(state).entities[id]?.menu;

export const selectRestaurantReviewIdsById = (state, { restaurantId }) =>
  selectRestaurantModule(state).entities[restaurantId]?.reviews;

export const selectIsRestaurantsLoading = (state) =>
  !["success", "failed"].includes(selectRestaurantModule(state).status);

export const selectRestaurantRating = createSelector(
  [selectRestaurantReviewIdsById, selectReviewEntities],
  (restaurantReviewIds, reviews) => {
    if (!restaurantReviewIds && !reviews) {
      return 0;
    }

    return Math.floor(
      restaurantReviewIds.reduce((result, reviewId) => {
        const review = reviews[reviewId];
        return result + (review?.rating || 0);
      }, 0) / restaurantReviewIds.length
    );
  }
);

export const createSelectRestaurantRating = () =>
  createSelector(
    [selectRestaurantReviewIdsById, selectReviewEntities],
    (restaurantReviewIds, reviews) => {
      if (!restaurantReviewIds && !reviews) {
        return 0;
      }

      return Math.floor(
        restaurantReviewIds.reduce((result, reviewId) => {
          const review = reviews[reviewId];
          return result + (review?.rating || 0);
        }, 0) / restaurantReviewIds.length
      );
    }
  );

// export const selectRestaurantRating = (state, { restaurantId }) => {
//   const restaurantReviewIds = selectRestaurantReviewIdsById(state, {
//     id: restaurantId,
//   });
//   const reviews = selectReviewEntities(state);
//
//   if (!restaurantReviewIds && !reviews) {
//   }
//
//   return Math.floor(
//     restaurantReviewIds.reduce((result, reviewId) => {
//       const review = reviews[reviewId];
//       return result + (review?.rating || 0);
//     }, 0) / restaurantReviewIds.length
//   );
// };
