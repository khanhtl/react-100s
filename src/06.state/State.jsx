import {useState} from 'react'
export function State() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count  + 1)}>Increment</button>
        </>
    )
}