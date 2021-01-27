import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import './index.css';
import App from './App';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4TdwLr90p1qLHl0ttYszb7qMX_WZMtdk',
  authDomain: 'mern-membership.firebaseapp.com',
  projectId: 'mern-membership',
  storageBucket: 'mern-membership.appspot.com',
  messagingSenderId: '481179414117',
  appId: '1:481179414117:web:76166ed9a36af23bf5208c',
  measurementId: 'G-W5VFSTZN80',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
