import React, { Component } from "react";
import "./App.css";
import Person from "../src/Person/Person";
import Radium, { StyleRoot } from "radium";

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
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    });
  };
  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };
    let personView = null;
    if (this.state.showPersons) {
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "lightred",
        color: "black"
      };

      personView = this.state.persons.map((person, index) => (
        <Person
          click={this.deletePersonHandler.bind(this, index)}
          name={person.name}
          age={person.age}
          nameChange={event => {
            this.nameChangeHandler(event, person.id);
          }}
          key={person.id}
        />
      ));
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(" ")}>Working</p>
          <button onClick={this.togglePersonHandler.bind(this)} style={style}>
            Toggle Person
          </button>
          {personView}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
