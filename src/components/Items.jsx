import { useState } from "react";

const Items = () => {
  const [item, setItem] = useState("");

  const p = <h1> Item 1</h1>;
  const itemHandlerOne = () => {
    setItem("You selected: item 1");
  };
  const itemHandlertwo = () => {
    setItem("You selected: Item 2");
  };
  const itemHandlerThree = () => {
    setItem("You selected: Item 3");
  };
  const itemHandlerFour = () => {
    setItem("You selected: Item 4");
  };
  const itemHandlerFive = () => {
    setItem("You selected: Item 5");
  };

  return (
    <div className="items">
      <h2>7: Жетинчи уй тапшырма</h2>
      <button onClick={itemHandlerOne} className="item">
        item 1
      </button>
      <button onClick={itemHandlertwo} className="item">
        item 2
      </button>
      <button onClick={itemHandlerThree} className="item">
        item 3
      </button>
      <button onClick={itemHandlerFour} className="item">
        item 4
      </button>
      <button onClick={itemHandlerFive} className="item">
        item 5
      </button>
      <p>{item}</p>
    </div>
  );
};
export default Items;
