import { useSelector } from "react-redux";
import { selectUserById } from "../../../store/user/selectors";

export const useUser = (userId) => {
  return useSelector((state) => selectUserById(state, { userId }));
};
