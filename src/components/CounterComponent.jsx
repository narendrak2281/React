import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(15);

    console.log("Hello", count)

    return (
        <div>
            <p>Count component -  {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} >Decrement</button>
        </div>
    );
};

export default CounterComponent;