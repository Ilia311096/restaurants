export const selectDishModule = (state) => state.dish;

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishById = (state, { dishId }) =>
  selectDishModule(state).entities[dishId];

export const selectDishNameById = (state, { dishId }) =>
  selectDishById(state, { dishId })?.name;

export const selectIsDishesLoading = (state) =>
  !["success", "failed"].includes(selectDishModule(state).status);
