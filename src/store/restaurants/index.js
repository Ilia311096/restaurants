import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  status: "idle", // 'success' 'error' 'loading'
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    startLoading: () => {
      return {
        entities: {},
        ids: [],
        status: "loading",
      };
    },
    successLoading: (state, action) => {
      const { entities, ids } = action.payload;

      state.entities = entities;
      state.ids = ids;
      state.status = "success";

      return state;
    },
    failLoading: () => {
      return {
        entities: {},
        ids: [],
        status: "fail",
      };
    },
  },
});

export const restaurantSliceActions = restaurantSlice.actions;
