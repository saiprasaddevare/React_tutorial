import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import My_Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet />
      <My_Welcome />
    </div>
  );
}

export default App;
