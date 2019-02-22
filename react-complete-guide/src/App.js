import React, { Component } from 'react';
import './App.css';
import KindergartenChildContainer from './components/KindergartenChildContainer';

class App extends Component {
  state = {
    persons: [
      { name: 'Dustin', age: 5 },
      { name: 'Zag', age: 1 },
      { name: 'Ziggy', age: 5 },
    ],
  };
  switchNameHandler = () => {
    console.log('switchNameHandler');
    this.setState({
      persons: [
        { name: 'Fox', age: 5 },
        { name: 'Zag', age: 1 },
        { name: 'Ziggy', age: 5 },
      ],
    });
  };
  render() {
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
        <button onClick={this.switchNameHandler}>Switch name</button>
        <KindergartenChildContainer children={this.state.persons} />
      </div>
    );
  }
}

export default App;
