import './App.css';
import {Component} from './01.component/Component'
import { Condition } from './02.condition/Condition';
import { SingleCondition } from './02.condition/SingleCondition';
import { Loop } from './03.loop/Loop';
function App() {
  return (
    <div className="App">
      <h3>01.Component</h3>
      <Component />
      <hr />
      <h3>01.Condition</h3>
      <Condition />
      <SingleCondition />
      <hr />
      <h3>03.Loop</h3>
      <Loop />
    </div>
  );
}

export default App;
