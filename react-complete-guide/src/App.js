import React, { Component } from 'react';
import './App.css';
import KindergartenClassContainer from './containers/KindergartenClass/KindergartenClassContainer';
class App extends Component {
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
        <KindergartenClassContainer />
      </div>
    );
  }
}

export default App;
