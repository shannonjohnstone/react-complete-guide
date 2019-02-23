import React, { useState } from 'react';
import './App.css';
import KindergartenChildContainer from './components/KindergartenChildContainer';

const personsArray = [
  { name: 'Dustin', age: 5 },
  { name: 'Zag', age: 1 },
  { name: 'Ziggy', age: 5 },
];

const App = props => {
  const [persons, setPersons] = useState(personsArray);

  const switchNameHandler = () => {
    const nameArray = ['fox', 'zag', 'ziggy'];
    const val = nameArray[Math.floor(Math.random() * nameArray.length)];

    /**
     * this condition is for demonstrating when KindergartenChildContainer
     * does and does not update as a pure component
     * setPerson will only run when it is fox, which means KindergartenChildContainer
     * only updates with that update
     */
    if (val === 'fox') {
      // update persons array, replace Dustin with Fox
      const persons = personsArray.map(person =>
        person.name.toLowerCase() === 'dustin'
          ? { ...person, name: 'Fox' }
          : person,
      );
      setPersons(persons);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Docs
        </a>
      </header>
      <button onClick={switchNameHandler}>Switch name</button>
      <KindergartenChildContainer children={persons} />
    </div>
  );
};

export default App;
