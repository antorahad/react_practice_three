import { useState } from "react"

export default function Counter() {
    const [count,setCount] = useState(0);

    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const reduceCount = count - 1;
        setCount(reduceCount);
    }
    return (
        <>
            <div style={{backgroundColor:'#EEEEEE', padding:'15px', borderRadius:'10px'}}>
                <h3>Counter: {count}</h3>
                <button onClick={handleCount}>Count</button>
                <button onClick={handleReduce}>Reduce</button>
            </div>
        </>
    )
}