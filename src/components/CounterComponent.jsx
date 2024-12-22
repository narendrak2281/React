import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(15);
    const [value, setValue] = useState("Narendra");


    return (
        <div>
            <p>Count component -  {count}</p>

            <h6>Number is {count % 2 === 0 ? "Even" : "Odd"}</h6>

            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} >Decrement</button>
        </div>
    );
};

export default CounterComponent;