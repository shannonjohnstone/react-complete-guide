import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={BurgerBuilder} path="/" exact />
          <Route component={Checkout} path="/checkout" exact />
          <Route render={() => <h1>Not Found!</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
