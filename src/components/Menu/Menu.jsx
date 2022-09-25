import React from "react";
import { RestaurantDishContainer } from "../../containers/RestaunratDish/RestaurantDishContainer";
import styles from "./styles.module.css";
import classnames from "classnames";
import { useLoadDishes } from "./hooks/useLoadDishes";
import { useIsDishesLoading } from "./hooks/useIsDishesLoading";
import { useDishIds } from "./hooks/useDishIds";

export const Menu = ({ className }) => {
  const dishIds = useDishIds();
  useLoadDishes();
  const isLoading = useIsDishesLoading();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classnames(styles.root, className)}>
      <span className={styles.title}>Menu</span>
      <div className={styles.content}>
        {dishIds?.map((id) => (
          <RestaurantDishContainer
            key={id}
            dishId={id}
            className={styles.dish}
          />
        ))}
      </div>
    </div>
  );
};
