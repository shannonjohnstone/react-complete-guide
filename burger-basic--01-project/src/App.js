import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Layout>
        <h1>Welcome to Burger Time</h1>
        <BurgerBuilder />
      </Layout>
    </>
  );
}

export default App;
