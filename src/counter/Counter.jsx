import React, { useState } from "react";

export const Counter = () => {
  const [counterPlus, setCounterPlus] = useState(0);

  const PlusCounter = () => {
    setCounterPlus((prev) => prev + 1);
  };

  const minusCounter = () => {
    setCounterPlus((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <div>
      <button onClick={PlusCounter}>+</button>
      <button onClick={minusCounter}>-</button>
      <h4>{counterPlus}</h4>
    </div>
  );
};
