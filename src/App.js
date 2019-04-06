import React, { Component } from "react";
import "./App.css";
import Person from "../src/Person/Person";

class App extends Component {
  state = {
    age: 28,
    name: "Nazmul"
  };
  switchNameHandler = () => {
    this.setState({
      name: "Hasan"
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Working</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.name} age={this.state.age}>
          What the fuchka
        </Person>
      </div>
    );
  }
}

export default App;
