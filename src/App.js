import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// import My_Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Saiprasad" heroName="Ironman"/>
      <Greet name="Amit" heroName="Batman"/>
      <Greet name="Sai" heroName="Superman"/>
      {/* <My_Welcome /> */}
    </div>
  );
}

export default App;
