import React from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button>add</button>
      <button>Reduce</button>
    </div>
  );
}

export default Counter;
