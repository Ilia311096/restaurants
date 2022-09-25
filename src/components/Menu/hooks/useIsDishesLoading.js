import { useSelector } from "react-redux";
import { selectIsDishesLoading } from "../../../store/dish/selectors";

export const useIsDishesLoading = () => useSelector(selectIsDishesLoading);
