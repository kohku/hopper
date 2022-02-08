import { useCallback, useEffect, useRef } from 'react'

const useThrottle = (function_, interval = 500) => {
  const lastExecuted = useRef(Date.now());

  const throttled = useCallback(
    (...args) => {
      if (Date.now() < lastExecuted.current + interval) {
        return;
      }
      lastExecuted.current = Date.now();
      return function_(...args);
    },
    [function_, interval],
  );

  useEffect(() => {
    const timerId = setTimeout(() => {
      lastExecuted.current = Date.now();
    }, interval);

    return () => clearTimeout(timerId)
  }, [interval]);

  return throttled;
}

export default useThrottle;
