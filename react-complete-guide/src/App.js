import React, { useState } from 'react';
import './App.css';
import KindergartenChildContainer from './components/KindergartenChildContainer';

const App = props => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Dustin', age: 5 },
    { id: 2, name: 'Zag', age: 1 },
    { id: 3, name: 'Ziggy', age: 5 },
  ]);

  const switchNameHandler = name => {
    /**
     * this condition is for demonstrating when KindergartenChildContainer
     * does and does not update as a pure component
     * setPerson will only run when it is fox, which means KindergartenChildContainer
     * only updates with that update
     */

    if (name.toLowerCase() === 'dustin') {
      // update persons array, replace Dustin with Fox
      const updatedPersons = persons.map(person =>
        person.name.toLowerCase() === 'dustin'
          ? { ...person, name: 'Fox' }
          : person,
      );
      setPersons(updatedPersons);
    }
  };

  const nameChangeHandler = (name, index) => {
    const updatedPersons = persons.map((person, i) =>
      index === i ? { ...person, name: name } : person,
    );
    setPersons(updatedPersons);
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
      {/* <button onClick={switchNameHandler}>Switch name</button> */}
      <KindergartenChildContainer
        persons={persons}
        switchNameHandler={switchNameHandler}
        nameChangeHandler={nameChangeHandler}
      />
    </div>
  );
};

export default App;
