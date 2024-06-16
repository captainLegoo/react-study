import { useState } from "react";

export const useCount = (initialVal = 0) => {
  const [count, setCount] = useState(initialVal);

  const addOne = () => {
    setCount((prev) => prev + 1);
  };

  const substractOne = () => {
    setCount((prev) => prev - 1);
  };

  const resetToZero = () => {
    setCount(0);
  };

  return [count, addOne, substractOne, resetToZero];
};