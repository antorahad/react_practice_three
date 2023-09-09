import { useState } from "react"

export default function Team () {
    const [count, setCount] = useState(0);



    const handlePlayerCount = () => {
        const newPlayer = count + 1;
        setCount(newPlayer);
    }
    const playerCard = {
        border: '1px solid black',
        margin: '15px 0',
        borderRadius: '10px'
    }
    return(
        <>
            <div style={playerCard}>
                <h3>Player: {count}</h3>
                <button onClick={handlePlayerCount}>Add Player</button>
            </div>
        </>
    )
}