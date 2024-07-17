import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    return setCounter(counter + 1);
  };

  const decrement = () => {
    return setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <h2>2: Эккинчи уй тапшырма</h2>
      <div className="buttons">
        <button onClick={increment}>Increment +1</button>
        <h1> {counter}</h1>

        <button onClick={decrement}>Decrement -1</button>
      </div>
    </div>
  );
};
export default Counter;
