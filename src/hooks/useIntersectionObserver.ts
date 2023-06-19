import { useCallback, useRef } from 'react';

function useIntersectionObserver(callback: () => void) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const bottomItemRef = useCallback(
    (node: HTMLDivElement) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // fetch를 하기위한 callback
            callback();
          }
        },
        { rootMargin: '400px 0px' }
      );

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [callback]
  );

  return {
    bottomItemRef,
  };
}

export default useIntersectionObserver;
