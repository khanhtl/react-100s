import { useContext } from 'react';
import { CountContext } from './CountContext';
export function GrandChild() {
    const count = useContext(CountContext)
    return <div>Receive count from context: {count}</div>
}