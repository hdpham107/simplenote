import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { firebaseConnection } from "./firebaseConnection";
import Home from './containers/Home';

function App() {
  console.log(firebaseConnection);
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
