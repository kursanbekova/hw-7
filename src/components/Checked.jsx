import { useState } from "react";
const body = document.getElementById("body");
const item = document.getElementsByClassName("item");
const Checked = () => {
  const [checked, setChecked] = useState(false);
  const checkedHandler = () => {
    setChecked((prev) => {
      return (prev = !prev);
    });
  };

  body.style.backgroundColor = checked ? "black" : "white";
  body.style.color = checked ? "white" : "black";

  return (
    <div>
      <h2>3: Учинчу уй тапшырма</h2>
      <input className="checkbox" type="checkbox" onChange={checkedHandler} />
    </div>
  );
};
export default Checked;
