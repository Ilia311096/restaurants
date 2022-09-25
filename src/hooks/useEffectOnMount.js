import { useSingleEffect } from "./useSingleEffect";

export function useEffectOnMount(callback) {
  useSingleEffect(() => {
    callback();
  }, []);
}
