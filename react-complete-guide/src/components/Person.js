import React from 'react';

const Person = props => (
  <div>
    <code>
      My name is {props.name}, i'm {Math.floor(Math.random() * 30)} years old!
    </code>
  </div>
);

export default Person;
