import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const clickHandler = (num) => {
    setCount(count + num);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clickHandler(1)}>add</button>
      <button onClick={() => clickHandler(-1)}>Reduce</button>
    </div>
  );
}

export default Counter;
