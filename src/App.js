import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header"
import Tweets from "./tweets"
import Forms from "./forms"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header message="Tweeter"/>
        <Tweets />
        <Forms />
      </div>
    );
  }
}

export default App;
