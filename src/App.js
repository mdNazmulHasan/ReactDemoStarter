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
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
      <div className="App">
        <h1>Working</h1>
        <button
          onClick={this.switchNameHandler.bind(this, "Hasan")}
          style={style}
        >
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
