import { useDispatch } from "react-redux";
import { useEffectOnMount } from "../../../hooks/useEffectOnMount";
import { loadUsersIfNotExist } from "../../../store/user/thunk/loadUsersIfNotExist";

export const useLoadUsers = () => {
  const dispatch = useDispatch();

  useEffectOnMount(() => {
    dispatch(loadUsersIfNotExist);
  });
};
