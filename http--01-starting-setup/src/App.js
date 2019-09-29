import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header/Header';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <div className="App">
            <Blog />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
