import React from 'react';
import './Person.css';

const Person = props => (
  <div className="person">
    <code>
      My name is {props.name}, i'm {props.age} years old!
      <div>{props.children}</div>
    </code>
  </div>
);

export default Person;
