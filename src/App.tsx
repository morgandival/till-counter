import React from 'react';
import './App.css';
import Header from './components/Header';
import Currency from './components/Currency';
import TillCounter from './components/TillCounter';

function App(): JSX.Element {
  // Initialise currency
  const [currency, setCurrency] = React.useState('AUD');

  // Based on currency select option, populate till counter denomiations
  function fillCurrency(currency: string): Array<number> {
    // Initialise return array
    let denominations: Array<number> = [];

    // Fill array based on currency
    switch (currency) {
      case 'AUD':
        denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05];
        break;
      case 'NZD':
        denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1];
        break;
      case 'USD':
        denominations = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
        break;
    }

    return denominations;
  }

  return (
    <div className="App">
      <Header title="Till Counter" />
      <Currency currency={currency} setCurrency={setCurrency} />
      <TillCounter denoms={fillCurrency(currency)} />
    </div>
  );
}

export default App;
