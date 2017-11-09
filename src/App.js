import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  state = {
    speed: 1,
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
    this.setState({
      speed: snap.val(),
    });
  });
  console.log(speedRef);
}

  render() {
    return (
      <div>
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
