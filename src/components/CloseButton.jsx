import { useState } from "react";

const CloseButton = () => {
  const [close, setclose] = useState(false);

  function closeHandler() {
    setclose((prev) => {
      return (prev = !prev);
    });
  }
  function showUups() {
    return <h3>Upps👻!</h3>;
  }

  return (
    <div>
      <h2>4: Тортунчу уй тапшырма</h2>
      {close === true && showUups()}
      <button onClick={closeHandler}>
        {close === true ? "OPEN" : "CLOSE"}
      </button>
    </div>
  );
};
export default CloseButton;
