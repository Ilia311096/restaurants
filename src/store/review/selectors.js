export const selectReviewModule = (state) => state.review;

export const selectReviewEntities = (state) =>
  selectReviewModule(state).entities;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewEntities(state)[reviewId];

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectIsReviewsLoading = (state) =>
  selectReviewModule(state).status === "loading";
