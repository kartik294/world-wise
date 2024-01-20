import { useEffect, useRef } from "react";

/**
 * A custom hook to handle clicks outside a specified ref.
 * @param {Function} handler - The function to call when a click outside occurs.
 * @param {boolean} listenCapturing - Whether to listen during the capturing phase.
 * @returns {Object} ref - A React ref to attach to the element you want to detect clicks outside of.
 */
export function useOutSideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
