import { useReducer } from "react";

const initialState = { count: 0, name: "Tom" };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

export function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
    </>
  );
}
