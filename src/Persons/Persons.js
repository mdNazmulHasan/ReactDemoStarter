import React from 'react';
import Person from './Person/Person';
const persons = (props) =>
   props.persons.map((person, index) => {
      console.log(props.persons);
      console.log(person);
      return (
         <Person
            key={person.id}
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age}
            nameChange={(event) => {
               props.changed(event, person.id);
            }}
         />
      );
   });

export default persons;
