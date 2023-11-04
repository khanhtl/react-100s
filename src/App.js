import "./App.css";
import { Component } from "./01.component/Component";
import { Condition } from "./02.condition/Condition";
import { SingleCondition } from "./02.condition/SingleCondition";
import { Loop } from "./03.loop/Loop";
import { Prop } from "./04.props/Prop";
import { PropChildren } from "./04.props/PropChildren";
import { Event } from "./05.events/Event";
function App() {
  return (
    <div className="App">
      <h3>01.Component</h3>
      <Component />
      <hr />
      <h3>02.Condition</h3>
      <Condition />
      <SingleCondition />
      <hr />
      <h3>03.Loop</h3>
      <Loop />
      <hr />
      <h3>04.Props</h3>
      <Prop name="Kitty" />
      <PropChildren>
        <div>This is content props children</div>
      </PropChildren>
      <hr />
      <h3>05.Events</h3>
      <Event />
    </div>
  );
}

export default App;
