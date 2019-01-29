import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD_AnS0NYzCWFb4v_TncpjR_V3liqDeVDE",
  authDomain: "conferencia-jas-registration.firebaseapp.com",
  databaseURL: "https://conferencia-jas-registration.firebaseio.com",
  projectId: "conferencia-jas-registration",
  storageBucket: "conferencia-jas-registration.appspot.com",
  messagingSenderId: "396476077474"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
