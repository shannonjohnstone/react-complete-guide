import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import KindergartenClassContainer from './components/kindergarten-class/KindergartenClassContainer';
import ClassLevelNotification from './components/ClassLevelNotification';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Dustin', age: 5 },
      { id: 2, name: 'Zag', age: 1 },
      { id: 3, name: 'Ziggy', age: 5 },
    ],
  };

  switchNameHandler = name => {
    /**
     * this condition is for demonstrating when KindergartenChildContainer
     * does and does not update as a pure component
     * setPerson will only run when it is fox, which means KindergartenChildContainer
     * only updates with that update
     */

    if (name.toLowerCase() === 'dustin') {
      // update persons array, replace Dustin with Fox
      const updatedPersons = this.state.persons.map(person =>
        person.name.toLowerCase() === 'dustin'
          ? { ...person, name: 'Fox' }
          : person,
      );
      this.setState({ persons: updatedPersons });
    }
  };

  nameChangeHandler = (name, id) => {
    const persons = this.state.persons.map(person =>
      person.id === id ? { ...person, name: name } : person,
    );
    this.setState({ persons });
  };

  deletePerson = id => {
    const persons = this.state.persons.filter(person => person.id !== id);
    this.setState({ persons });
  };

  render() {
    return (
      <StyleRoot>
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
          <ClassLevelNotification persons={this.state.persons} />
          <KindergartenClassContainer
            persons={this.state.persons}
            switchNameHandler={this.switchNameHandler}
            nameChangeHandler={this.nameChangeHandler}
            deletePerson={this.deletePerson}
          />
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
