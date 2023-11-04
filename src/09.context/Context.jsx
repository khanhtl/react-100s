import { Child } from "./Child";
import { CountContext } from "./CountContext";
import { useState } from "react";
export function Context() {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={count}>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child />
    </CountContext.Provider>
  );
}
