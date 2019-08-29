import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <Layout>
      <h1>Welcome to Burger Time</h1>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
