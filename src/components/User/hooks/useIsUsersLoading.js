import { useSelector } from "react-redux";
import { selectIsUsersLoading } from "../../../store/user/selectors";

export const useIsUsersLoading = () => useSelector(selectIsUsersLoading);
