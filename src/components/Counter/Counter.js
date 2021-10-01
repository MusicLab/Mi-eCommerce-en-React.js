import React from 'react'
import { useState } from "react"
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    
    function decrementCount() {
        setCount(prevCount => prevCount -1)
    }
    function incrementCount() {
        setCount(prevCount => prevCount +1)
    }
    return (
        <div className= "Counter">
            <button onClick= {decrementCount}>-</button>
            <span>{count}</span>
            <button onClick= {incrementCount}>+</button>
            
        </div>
    )
}

export default Counter
