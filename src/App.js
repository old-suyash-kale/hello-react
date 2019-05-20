import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    document.title = 'Hello, React!';
  };
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <p>Application is up and running.</p>
      </div>
    );
  }
}

export default App;
