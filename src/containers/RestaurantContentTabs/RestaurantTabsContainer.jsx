import { Tabs } from "../../components/Tabs/Tabs";
import { Tab } from "../../components/Tab/Tab";

const RESTAURANT_CONTENT_TABS = ["menu", "reviews"];

export const RestaurantContentTabsContainer = () => {
  return (
    <Tabs
      tabIds={RESTAURANT_CONTENT_TABS}
      renderTab={({ id, ...props }) => (
        <Tab key={id} title={id} to={id} {...props} />
      )}
    />
  );
};
