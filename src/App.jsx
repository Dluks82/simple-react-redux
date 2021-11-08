import Interval from "./components/Interval";

import "./App.css";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  return (
    <div className="App">
      <h1>React-Redux Exercise</h1>
      <div className="linha">
        <Interval></Interval>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
