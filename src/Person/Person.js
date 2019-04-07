import React from "react";
import "./Person.css";
import Radium from "radium";

const Person = props => {
  const styles = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person" style={styles}>
      <p onClick={props.click}>
        i am {props.name} and i am {props.age} years old
      </p>
      <input type="text" onChange={props.nameChange} value={props.name} />
    </div>
  );
};
export default Radium(Person);
