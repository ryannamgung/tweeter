import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header"
import Tweets from "./tweets"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header message="Tweeter"/>
        <Tweets/>
      </div>
    );
  }
}

export default App;
