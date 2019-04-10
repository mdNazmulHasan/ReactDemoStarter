import React, { Component } from "react";
import styles from "./Person.module.css";

class Person extends Component {
  render() {
    return (
      <div className={styles.Person}>
        <p onClick={this.props.click}>
          i am {this.props.name} and i am {this.props.age} years old
        </p>
        <input
          type="text"
          onChange={this.props.nameChange}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default Person;
