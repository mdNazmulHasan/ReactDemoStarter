import React from "react";
import styles from "./Person.module.css";

const Person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        i am {props.name} and i am {props.age} years old
      </p>
      <input type="text" onChange={props.nameChange} value={props.name} />
    </div>
  );
};
export default Person;
