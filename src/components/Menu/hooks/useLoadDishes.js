import { useDispatch } from "react-redux";
import { useSingleEffect } from "../../../hooks/useSingleEffect";
import { loadDishesIfNotExist } from "../../../store/dish/thunks/loadDishesIfNotExist";
import { useParams } from "react-router-dom";

export const useLoadDishes = () => {
  const { restaurantId } = useParams();
  const dispatch = useDispatch();

  useSingleEffect(() => {
    dispatch(loadDishesIfNotExist(restaurantId));
  }, [restaurantId]);
};
