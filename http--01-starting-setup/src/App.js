import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Blog />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
