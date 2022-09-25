import { selectRestaurantModule } from "../restaurants/selectors";

export const selectUserModule = (state) => state.user;

export const selectUserIds = (state) => selectUserModule(state).ids;
export const selectUserById = (state, { userId }) =>
  selectUserModule(state).entities[userId];

export const selectIsUsersLoading = (state) =>
  selectRestaurantModule(state).status === "loading";
