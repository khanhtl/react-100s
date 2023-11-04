import "./App.css";
import { useState } from 'react';
import { Component } from "./01.component/Component";
import { Condition } from "./02.condition/Condition";
import { SingleCondition } from "./02.condition/SingleCondition";
import { Loop } from "./03.loop/Loop";
import { Prop } from "./04.props/Prop";
import { PropChildren } from "./04.props/PropChildren";
import { Event } from "./05.events/Event";
import { State } from "./06.state/State";
import { StateObject } from "./06.state/StateObject";
import { Reducer } from "./07.reducer/Reducer";
import { Effect } from "./08.effect/Effect";
import { Context } from "./09.context/Context";
function App() {
  const [showEffect, setShowEffect] = useState(true);

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
      <h3>06.State</h3>
      <State /> <br />
      <h5>State object</h5>
      <StateObject />
      <hr />
      <h3>07.Reducer</h3>
      <Reducer />
      <hr />
      <h3>08.Effect</h3>
      {showEffect && <Effect />}
      <br />
      <button onClick={() => setShowEffect(!showEffect)}>Toggle Effect</button>
      <hr />
      <h3>09.Context</h3>
      <Context />
      <hr />
    </div>
  );
}

export default App;
