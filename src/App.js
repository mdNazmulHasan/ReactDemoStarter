import React, { Component } from "react";
import "./App.css";
import Person from "../src/Person/Person";

class App extends Component {
  state = {
    age: 28,
    name: "Nazmul",
    showPersons: false
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
  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
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
    let personView = null;
    if (this.state.showPersons) {
      personView = (
        <Person
          name={this.state.name}
          age={this.state.age}
          click={this.switchNameHandler.bind(this, "Nazmul")}
          nameChange={this.nameChangeHandler.bind(this)}
        >
          What the fuchka
        </Person>
      );
    }
    return (
      <div className="App">
        <h1>Working</h1>
        <button onClick={this.togglePersonHandler.bind(this)} style={style}>
          Switch name
        </button>
        {personView}
      </div>
    );
  }
}

export default App;
