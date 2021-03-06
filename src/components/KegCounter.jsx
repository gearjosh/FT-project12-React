import React, {useState, useEffect} from 'react'

function KegCounter() {
    const [count, setCount] = useState(124)
    const [color, setColor] = useState("green")
    useEffect(() => {
            if (count <= 124 && count >= 63) {
                 setColor("green")
            } else if (count <= 62 && count >= 32) {
                 setColor("yellow")
            } else if (count <= 31 && count >= 1) {
                 setColor("red")
            } else {
                setCount(0)
            }
    }, [count]);

    const levelChangeColor = {
        color: color
    }
    return(
        <div>
            <p style={levelChangeColor}>{count}</p>
            <button onClick={() => setCount(count - 1)}>Buy a Pint</button>
            <button onClick={() => setCount(count - 4)}>Buy a Growler</button>
        </div>
    )
}

export default KegCounter