
import { useEffect, useState } from 'react';
export function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Effect component mounted');
        return () => {
            console.log('Effect component un mounted');
        }
    }, []);

    useEffect(() => {
        console.log('Dep count changed');
    }, [count]);
    return <>
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
}