import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {},
  ids: [],
  status: "idle", // 'success' 'error' 'loading'
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = "loading";
      return state;
    },
    successLoading: (state, action) => {
      const { entities, ids } = action.payload;

      state.entities = {
        ...state.entities,
        ...entities,
      };
      state.ids = Array.from(new Set([...state.ids, ...ids]));
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

export const reviewSliceActions = reviewSlice.actions;
