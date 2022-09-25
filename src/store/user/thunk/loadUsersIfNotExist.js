import { normolizeEntities } from "../../helpers/normolizeEntities";
import { selectUserIds } from "../selectors";
import { userSliceActions } from "../index";

export const loadUsersIfNotExist = (dispatch, getState) => {
  if (selectUserIds(getState())?.length > 0) {
    return;
  }

  dispatch(userSliceActions.startLoading());

  fetch("http://localhost:3001/api/users")
    .then((response) => response.json())
    .then((users) => {
      dispatch(userSliceActions.successLoading(normolizeEntities(users)));
    })
    .catch((error) => {
      dispatch(userSliceActions.failLoading());
    });
};
