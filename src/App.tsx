import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Denomination from './components/Denomination/Denomination';
import Total from './components/Total/Total';

function App() {
  return (
    <div className="App">
      <Header title="Till Counter" />
      <Denomination label="$100" denom={100} />
      <Denomination label="$50" denom={50} />
      <Denomination label="$20" denom={20} />
      <Denomination label="$10" denom={10} />
      <Denomination label="$5" denom={5} />
      <Denomination label="$2" denom={2} />
      <Denomination label="$1" denom={1} />
      <Denomination label="50c" denom={0.50} />
      <Denomination label="20c" denom={0.20} />
      <Denomination label="10c" denom={0.10} />
      <Denomination label="5c" denom={0.05} />
      <hr />
      <Total />
    </div>
  );
}

export default App;
