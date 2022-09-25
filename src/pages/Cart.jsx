import React from "react";
import { useSelector } from "react-redux";
import { selectCartDishIds } from "../store/cart/selectors";
import { CartDishContainer } from "../containers/CartDish/RestaurantDishContainer";

export const Cart = () => {
  const dishIds = useSelector(selectCartDishIds);

  if (!dishIds?.length) {
    return <span>корзина пуста</span>;
  }
  return (
    <div>
      {dishIds.map((dishId) => (
        <CartDishContainer key={dishId} dishId={dishId} />
      ))}
    </div>
  );
};
