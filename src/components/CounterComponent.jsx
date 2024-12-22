import React, {useState} from "react";

const CounterComponent = () => {
    const [count, setCount] = useState(15);
    const [value, setValue] = useState("Narendra");

    console.log("Hello", count)


    return (
        <div>
            <p>Count component -  {count}</p>
            <h6>Value is {value}</h6>
            <button onClick={() => setValue("React")} >Change</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} >Decrement</button>
        </div>
    );
};

export default CounterComponent;