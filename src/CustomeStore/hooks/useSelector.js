import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/StoreContext";
import { nanoid } from "nanoid";
import { useEffectOnMount } from "../../hooks/useEffectOnMount";

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  const [value, setValue] = useState(selector(store.state));

  useEffectOnMount(() => {
    const key = nanoid();

    return store.subscribe(key, (state) => setValue(selector(state)));
  });

  return value;
};
