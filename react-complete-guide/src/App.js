import React, { Component } from 'react';
import './App.css';
import KindergartenClassContainer from './containers/KindergartenClass/KindergartenClassContainer';
import KindergartenClassContainerRenderPropsHook from './containers/KindergartenClass/KindergartenClassContainerRenderPropsHook';
import MemoExample from './memo-example/MemoExample';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App: constructor');
  }
  // static getDerivedStateFromProps(props, state) {
  //   console.log('App: getDerivedStateFromProps', props);
  //   return state;
  // }
  componentDidMount() {
    console.log('App: componentDidMount');
  }
  render() {
    console.log('App: render');
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
        {/* <KindergartenClassContainer /> */}
        <KindergartenClassContainerRenderPropsHook />
        <MemoExample />
      </div>
    );
  }
}

export default App;
