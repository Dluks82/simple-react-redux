import Interval from "./components/Interval";
import Card from "./components/Card";

import "./App.css";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";
import { useState } from "react";

function App() {
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(20);

  return (
    <div className="App">
      <h1>React-Redux Exercise</h1>
      <div className="linha">
        <Interval
          min={min}
          max={max}
          onMinChange={setMin}
          onMaxChange={setMax}
        ></Interval>
      </div>
      <div className="linha">
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  );
}

export default App;
