import React from "react";

import styles from "./styles.module.css";
import { Rating } from "../Rating/Rating";
import { useRestaurantRating } from "./hooks/useRestaurantRating";
import { useRestaurant } from "./hooks/useRestaurant";
import { useLoadReviews } from "./hooks/useLoadReviews";
import { Outlet, useParams } from "react-router-dom";
import { RestaurantContentTabsContainer } from "../../containers/RestaurantContentTabs/RestaurantTabsContainer";

export const Restaurant = () => {
  const { restaurantId } = useParams();
  const rating = useRestaurantRating(restaurantId);
  const restaurant = useRestaurant(restaurantId);
  useLoadReviews(restaurantId);

  if (!restaurant) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.restaurantInfo}>
        <div className={styles.title}>{restaurant.name}</div>
        <Rating value={rating} />
      </div>
      <RestaurantContentTabsContainer />
      <Outlet />
    </div>
  );
};
