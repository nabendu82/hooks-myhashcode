import React, { useState } from 'react'

const HookCounter2 = () => {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount(prevCount => prevCount + 1)            
        }
    }

    // this.setState(prevState => {
    //     return {
    //         count: prevState.count + 1
    //     }
    // })

    return (
        <>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count -1 )}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </>
    )
}

export default HookCounter2
