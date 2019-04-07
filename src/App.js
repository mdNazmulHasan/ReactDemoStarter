import React, { Component } from "react";
import "./App.css";
import Person from "../src/Person/Person";

class App extends Component {
  state = {
    
    showPersons: false,
    persons:[
      {
        age: 28,
        name: "Nazmul",
      },
      {
        age: 28,
        name: "Hasan",
      },
      {
        age: 24,
        name: "Nazmun",
      },
      {
        age: 23,
        name: "Kamrul",
      },
    ]
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
        this.state.persons.map((person)=><Person
          name={person.name}
          age={person.age}
          nameChange={this.nameChangeHandler.bind(this)}
        >
        </Person>
      ));
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
