import { createSelector } from "@reduxjs/toolkit";

export const selectCartModule = (state) => state.cart;

export const selectDishCount = (state, { dishId }) =>
  selectCartModule(state)[dishId];

export const selectCartDishIds = createSelector([selectCartModule], (cart) =>
  Object.keys(cart)
);
