import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRestaurantsLoading } from "../store/restaurants/selectors";
import { RestaurantTabsContainer } from "../containers/RestaurantTabs/RestaurantTabsContainer";
import { loadRestaurantsIfNotExist } from "../store/restaurants/thunks/loadRestaurantsIfNotExist";
import { Outlet, useSearchParams } from "react-router-dom";
import { useEffectOnMount } from "../hooks/useEffectOnMount";
import { Select } from "../components/Select/Select";
import { Option } from "../components/Option/Option";
import { NewOption } from "../components/NewOption/NewOption";

// React.createElement('div',  {
//     children: restaurants.map(({name}) => React.createElement('div', {children: name})),
// });

export const Restaurants = () => {
  console.log("render Restaurants");
  const ref = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsRestaurantsLoading);

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current.focus();
  //   }
  // }, []);

  useLayoutEffect(() => {}, []);

  const setFocus = useCallback((element) => {
    element?.focus();
  }, []);

  useEffectOnMount(() => {
    dispatch(loadRestaurantsIfNotExist);
  });

  useEffectOnMount(() => {
    console.log("mount");
    return () => console.log("destroy");
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <input
        ref={setFocus}
        value={searchParams.get("restaurantName") || ""}
        onChange={(event) =>
          setSearchParams({ restaurantName: event.target.value })
        }
      />
      {/*       <Select>
        {["1", "2", "3", "4"].map((option) => (
          <Option key={option} value={option} />
        ))}
      </Select>
      <Select>
        {["1", "2", "3", "4"].map((option) => (
          <NewOption key={option} value={option} />
        ))}
      </Select> */}
      <RestaurantTabsContainer />
      <Outlet />
    </>
  );
};
