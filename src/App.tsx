import React from 'react';
import './App.css';
import Header from './components/Header';
import TillCounter from './components/TillCounter';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header title="Till Counter" />
      <TillCounter />
    </div>
  );
}

export default App;
