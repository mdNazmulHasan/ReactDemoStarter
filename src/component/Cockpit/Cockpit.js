import React from "react";
import styles from "./Cockpit.module.css";

const cockpit = (props) => {
  let assignedClasses = [];
  let btnClass = "";
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }
  if (props.showPersons) {
    btnClass = styles.Red;
  }
  return (
    <div className={styles.Cockpit}>
      <p className={assignedClasses.join(" ")}>Working</p>
      <button onClick={props.togglePersonHandler} className={btnClass}>
        Toggle Person
      </button>
    </div>
  );
};

export default cockpit;
