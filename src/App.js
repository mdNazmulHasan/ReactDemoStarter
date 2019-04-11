import React, { Component } from "react";
import styles from "./App.module.css";
import Persons from "./component/Persons/Persons";
import Cockpit from "./component/Cockpit/Cockpit";

class App extends Component {
  state = {
    showPersons: false,
    persons: [
      {
        id: 1,
        age: 28,
        name: "Nazmul",
      },
      {
        id: 2,
        age: 28,
        name: "Hasan",
      },
      {
        id: 3,
        age: 24,
        name: "Nazmun",
      },
      {
        id: 4,
        age: 23,
        name: "Kamrul",
      },
    ],
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons,
    });
  };
  togglePersonHandler = () => {
    console.log("toggle");
    this.setState({
      showPersons: !this.state.showPersons,
    });
  };

  render() {
    let personView = null;
    if (this.state.showPersons) {
      personView = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          persons={this.state.persons}
          togglePersonHandler={this.togglePersonHandler}
          showPersons={this.state.showPersons}
        />
        {personView}
      </div>
    );
  }
}

export default App;
