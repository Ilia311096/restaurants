import { combineReducers } from "redux";
import { actionLogger } from "./middlewares/Logger";
import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./restaurants";
import { cartSlice } from "./cart";
import { dishSlice } from "./dish";
import { userSlice } from "./user";
import { reviewSlice } from "./review";

const rootReducer = combineReducers({
  restaurant: restaurantSlice.reducer,
  dish: dishSlice.reducer,
  cart: cartSlice.reducer,
  review: reviewSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    actionLogger,
  ],
});
