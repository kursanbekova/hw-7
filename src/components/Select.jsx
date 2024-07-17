import { useState } from "react";
const h2 = <h2>HOME</h2>;
const Select = () => {
  const [word, setWord] = useState(h2);

  const changeHandlerForHome = () => {
    setWord(h2);
  };

  const changeHandlerForAbout = () => {
    const el = <h2>ABOUT</h2>;
    setWord(el);
  };
  const changeHandlerForAContact = () => {
    const el2 = <h2>CONTACT</h2>;
    setWord(el2);
  };

  return (
    <div className="selectButtons">
      <h2>6: Алтынчы уй тапшырма</h2>
      <button onClick={changeHandlerForHome}>HOME</button>
      <button onClick={changeHandlerForAbout}>ABOUT</button>
      <button onClick={changeHandlerForAContact}>CONTACT</button>
      {word}
    </div>
  );
};
export default Select;
