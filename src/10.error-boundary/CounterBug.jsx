import { useState, useEffect } from "react";
export function CounterBug() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count < 0) {
      throw new Error("Count < 0");
    }
  }, [count]);
  const onClick = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={onClick}>Decrement</button>
    </>
  );
}
