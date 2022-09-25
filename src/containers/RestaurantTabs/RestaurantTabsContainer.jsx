import { Tabs } from "../../components/Tabs/Tabs";
import { useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantIdsFilteredByName,
} from "../../store/restaurants/selectors";
import { RestaurantTabContainer } from "../RestaurantTab/RestaurantTabContainer";
import { useSearchParams } from "react-router-dom";

export const RestaurantTabsContainer = () => {
  const [searchParams] = useSearchParams();
  const restaurantIds = useSelector((state) =>
    selectRestaurantIdsFilteredByName(state, {
      restaurantName: searchParams.get("restaurantName"),
    })
  );

  return (
    <Tabs
      tabIds={restaurantIds}
      renderTab={(props) => (
        <RestaurantTabContainer key={props.id} {...props} />
      )}
    />
  );
};
