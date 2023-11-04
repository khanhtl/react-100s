import {useState} from 'react'
export function StateObject() {
    const [state, setState] = useState({ count: 0, name: "Jerry" });
    const onClick = (count) => {
        setState({
            ...state,
            count
        })
    }
    return (
        <>
            <div>Count: {state.count}</div>
            <button onClick={() => onClick(state.count  + 1)}>Increment</button>
        </>
    )
}