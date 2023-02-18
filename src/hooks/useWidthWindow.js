import { useEffect, useState } from "react";

export function useWidthWindow() {
  const [width] = useState(window.innerWidth);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (width >= 1440) {
      setCount(5);
    } else if (width >= 1024) {
      setCount(4);
    } else if (width >= 426) {
      setCount(3);
    } else {
      setCount(1.5);
    }
  }, [width]);

  console.log(width);

  return{count}
}
