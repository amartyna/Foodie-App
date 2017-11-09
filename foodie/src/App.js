import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    units: 1,
  }

  componentDidMount() {
    this.setState ({
      units: 2,
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.units}</h1>
      </div>
    );
  }
}

export default App;
