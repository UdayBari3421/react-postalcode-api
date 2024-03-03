import React, { useState } from "react";
import Search from "./Components/Search";
import DisplayList from "./Components/DisplayList";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div className="app">
      <Search value={value} setValue={setValue} />
      <DisplayList value={value} />
    </div>
  );
};

export default App;
