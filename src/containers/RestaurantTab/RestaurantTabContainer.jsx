import { useSelector } from "react-redux";
import { selectRestaurantNameById } from "../../store/restaurants/selectors";
import { Tab } from "../../components/Tab/Tab";

export const RestaurantTabContainer = ({ id, ...props }) => {
  const name = useSelector((state) => selectRestaurantNameById(state, { id }));
  return <Tab title={name} to={id} {...props} />;
};
