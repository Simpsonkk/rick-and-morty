import { debounce } from 'lodash-es';
import { useEffect, useMemo } from 'react';

import { useLatest } from './useLatest';

export function makeDebouncedHook(debounceFn: Function) {
  return function useDebounce(cb: Function, ms: number) {
    const latestCb = useLatest(cb);

    const debouncedFn = useMemo(
      () =>
        debounceFn((...args: any[]) => {
          latestCb.current(...args);
        }, ms),
      [ms, latestCb]
    );

    useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

    return debouncedFn;
  };
}

export const useDebounce = makeDebouncedHook(debounce);
