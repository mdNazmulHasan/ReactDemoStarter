import React, { Component } from "react";
import "./App.css";
import Person from "../src/Person/Person";

class App extends Component {
  state = {
    showPersons: false,
    persons: [
      {
        id: 1,
        age: 28,
        name: "Nazmul"
      },
      {
        id: 2,
        age: 28,
        name: "Hasan"
      },
      {
        id: 3,
        age: 24,
        name: "Nazmun"
      },
      {
        id: 4,
        age: 23,
        name: "Kamrul"
      }
    ]
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
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
      personView = this.state.persons.map((person, index) => (
        <Person
          click={this.deletePersonHandler.bind(this, index)}
          name={person.name}
          age={person.age}
          nameChange={this.nameChangeHandler.bind(this)}
          key={person.id}
        />
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
