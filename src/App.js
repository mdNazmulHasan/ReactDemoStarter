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
  nameChangeHandler = event => {
    this.setState({
      name: event.target.value
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
          nameChange={this.nameChangeHandler.bind(this)}
        >
          What the fuchka
        </Person>
      </div>
    );
  }
}

export default App;
