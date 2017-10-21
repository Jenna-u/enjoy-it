import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route } from 'react-router-dom'
import './App.css';

import Test from './test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to='/test'>Test</Link>
        <p className="App-intro">
          react-router v4
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Route path="/test" component={Test} />
      </div>
    );
  }
}

export default App;
