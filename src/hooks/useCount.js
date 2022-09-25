import { useCallback, useState } from "react";

export function useCount(initialState = 0) {
  const [count, setCount] = useState(initialState);

  const increment = useCallback(
    () => setCount((currentCount) => currentCount + 1),
    []
  );

  const decrement = useCallback(
    () => setCount((currentCount) => currentCount - 1),
    []
  );

  return { count, increment, decrement };
}
