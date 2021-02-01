import React, {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div className="container">
        <h2>Counter</h2>
            <div className="counter-container">
            <div className="countval"><h1>{counter}</h1></div>
            <div className="btns">
                <div>
                    <button className="btn" onClick={() => setCounter(counter - 1)}>-</button>
                </div>
                <div>
                    <button className="btn" onClick={() => setCounter(counter + 1)}>+</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Counter
