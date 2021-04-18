import React from 'react';
import './App.css';
import Header from './components/Header';
import TillCounter from './components/TillCounter';

function App() {
  return (
    <div className="App">
      <Header title="Till Counter" />
      <TillCounter denoms={[100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05]} />
    </div>
  );
}

export default App;
