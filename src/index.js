

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyDKqEXJxjJIYvpqpTWXOPJ0kLoR2QosbZs",
  authDomain: "foodie-63d9f.firebaseapp.com",
  databaseURL: "https://foodie-63d9f.firebaseio.com",
  projectId: "foodie-63d9f",
  storageBucket: "foodie-63d9f.appspot.com",
  messagingSenderId: "917649119836"
};
firebase.initializeApp(config);

// eslint-disable-next-line
const preObject = document.getElementById('object');

const dbRefObject = firebase.database().ref().child('object');

console.log(dbRefObject);
dbRefObject.on('value', snap => console.log(snap.val()));



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
