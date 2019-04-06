import React, { Component } from "react";
import "./App.css";
import Person from "../src/Person/Person";

class App extends Component {
  state = {
    age: 28,
    name: "Nazmul"
  };
  switchNameHandler = name => {
    this.setState({
      name
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Working</h1>
        <button onClick={this.switchNameHandler.bind(this, "Hasan")}>
          Switch name
        </button>
        <Person
          name={this.state.name}
          age={this.state.age}
          click={this.switchNameHandler.bind(this, "Nazmul")}
        >
          What the fuchka
        </Person>
      </div>
    );
  }
}

export default App;
