import { useState } from "react";
import OpenButton from "./components/Openbutton";
import Counter from "./components/Counter";
import CloseButton from "./components/CloseButton";
import Start from "./components/Start";
import Select from "./components/Select";
import Checked from "./components/Checked";
import Items from "./components/Items";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="fullPage">
      <OpenButton />
      <Counter />
      <Checked />
      <CloseButton />
      <Start />
      <Select />
      <Items />
      <Tasks />
    </div>
  );
}

export default App;
