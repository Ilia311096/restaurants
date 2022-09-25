import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addDish: (state, action) => {
      const addedDishId = action.payload;

      state[addedDishId] = (state[addedDishId] ? state[addedDishId] : 0) + 1;
      return state;
    },
    removeDish: (state, action) => {
      const removedDishId = action.payload;

      state[removedDishId] =
        !state[removedDishId] || state[removedDishId] === 0
          ? 0
          : state[removedDishId] - 1;
      return state;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
