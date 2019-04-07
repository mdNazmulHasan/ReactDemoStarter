import React from "react";
import "./Person.css";
const Person = props => {
  return (
    <div className="Person">
      <p >
        i am {props.name} and i am {props.age} years old
      </p>
      <input type="text" onChange={props.nameChange} value={props.name} />
    </div>
  );
};
export default Person;
