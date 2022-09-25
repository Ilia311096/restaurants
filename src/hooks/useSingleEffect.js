import { useEffect, useRef } from "react";

export function useSingleEffect(callback, dependencies = []) {
  const dependenciesRef = useRef(null);

  useEffect(() => {
    if (
      !dependenciesRef.current ||
      dependenciesRef.current?.some(
        (dependency, index) => dependency !== dependencies[index]
      )
    ) {
      dependenciesRef.current = dependencies;
      callback();
    }
  }, dependencies);
}
