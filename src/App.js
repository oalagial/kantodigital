import logo from './logo.svg';
import './App.css';
import Box from './components/Projects/Projects'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Box></Box>
      </header>
    </div>
  );
}

export default App;
