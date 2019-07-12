import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'


// Above import Greet can also hae another name like Mycomponent
// import Greet from './components/Greet'

// This import is changed to below because component Greet is not defaulted export
import {Greet} from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;
