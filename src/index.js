

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyAp11O2Aqte7QdByE8No22GZaW02Jl7Elo",
  authDomain: "aplikacja-16900.firebaseapp.com",
  databaseURL: "https://aplikacja-16900.firebaseio.com",
  projectId: "aplikacja-16900",
  storageBucket: "aplikacja-16900.appspot.com",
  messagingSenderId: "466966465941"
};
firebase.initializeApp(config);


// const preObject = document.getElementById('object');
// const dbRefObject = firebase.database().ref().child('object');
// dbRefObject.on('value', snap => {
//   preObject.innerText = JSON.stringify(snap.val());
// });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
