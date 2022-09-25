import { MemoDish } from "../../components/Dish/Dish";
import { useDispatch, useSelector } from "react-redux";
import { selectDishNameById } from "../../store/dish/selectors";
import { selectDishCount } from "../../store/cart/selectors";
import { useCallback } from "react";
import { cartSliceActions } from "../../store/cart";

export const CartDishContainer = ({ dishId, ...props }) => {
  const dishName = useSelector((state) =>
    selectDishNameById(state, { dishId })
  );

  const dishCount = useSelector((state) => selectDishCount(state, { dishId }));

  const dispatch = useDispatch();

  const increment = useCallback(
    () => dispatch(cartSliceActions.addDish(dishId)),
    [dishId]
  );
  const decrement = useCallback(
    () => dispatch(cartSliceActions.removeDish(dishId)),
    [dishId]
  );

  if (!dishName) {
    return null;
  }

  return (
    <MemoDish
      dishName={dishName}
      count={dishCount || 0}
      increment={increment}
      decrement={decrement}
      {...props}
    />
  );
};
