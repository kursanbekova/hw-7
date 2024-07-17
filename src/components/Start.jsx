import { useState } from "react";

const Start = () => {
  const [start, setclose] = useState(false);

  const reverse = () => {
    setclose((prev) => !prev);
  };

  const spiner = () => {
    return <div className="spiner"> </div>;
  };

  return (
    <div>
      <h2>5: Бешинчи уй тапшырма</h2>
      <button onClick={reverse}>START</button>
      {start === true && spiner()}
    </div>
  );
};
export default Start;
