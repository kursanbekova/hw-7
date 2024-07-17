import { useState } from "react";

const OpenButton = () => {
  const [open, setOpen] = useState(false);

  const openFnHandler = () => {
    setOpen((prev) => {
      return (prev = !prev);
    });
  };

  return (
    <div>
  
      <button onClick={openFnHandler} className="openButton">
        {!open === true ? "OPEN" : "CLOSE"}
      </button>
    </div>
  );
};
export default OpenButton;
