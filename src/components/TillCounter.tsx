import React, { useState } from 'react';
import Currency from '../components/Currency';
import Denomination from '../components/Denomination';

// Declare types
type Currency = {
  symbol: string;
  value: Array<number>;
};

type Denom = {
  denom: string;
  value: number;
};

// Main function
function TillCounter(): JSX.Element {
  // State initialisation
  const [denoms, setDenoms] = useState<Denom[]>([]);
  const [total, setTotal] = useState(0);
  const [currency, setCurrency] = useState('AUD');

  // Handles what happens when the input field value is altered
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Extract input ID and value
    const denom: string = event.target.id;
    const value: number = parseFloat(event.target.value) * 100;

    // Grab index of denom if it exists in the denoms array
    const index = denoms.findIndex((x) => x.denom === denom);

    // If index does not exist...
    if (index === -1) {
      // Push new denom and value to end of denoms array
      setDenoms((oldDenoms) => [...oldDenoms, { denom, value }]);
    }

    // If index exists...
    if (index > -1) {
      // Update values of specific index
      setDenoms((oldDenoms) => [
        ...oldDenoms.slice(0, index),
        { denom, value },
        ...oldDenoms.slice(index + 1)
      ]);
    }
  };

  // Handles what happens when the input field is left
  const handleBlur = () => {
    // Check to see if there are array items to add together
    if (denoms.length > 0) {
      // Push to usestate
      setTotal(() => addDenomValues());
    }
  };

  // Handles what happens when the reset button is clicked
  const handleReset = () => {
    // Change all input fields to 0.00
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '0.00')
    );

    // Reset denominations array
    setDenoms(() => []);

    // Reset total
    setTotal(() => 0);
  };

  // Adds the values of the denoms array together and returns the total
  function addDenomValues() {
    return denoms.map((a) => a.value).reduce((a, b) => a + b);
  }

  // Based on currency select option, populate till counter denomiations
  function fillCurrency(currency: string): Currency {
    // Initialise return array
    let denominations: Currency = { symbol: '', value: [] };

    // Fill array based on currency
    switch (currency) {
      case 'AUD':
        denominations = {
          symbol: '$',
          value: [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05]
        };
        break;
      case 'NZD':
        denominations = {
          symbol: '$',
          value: [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1]
        };
        break;
      case 'EUR':
        denominations = {
          symbol: '€',
          value: [
            500,
            200,
            100,
            50,
            20,
            10,
            5,
            2,
            1,
            0.5,
            0.2,
            0.1,
            0.05,
            0.02,
            0.01
          ]
        };
        break;
      case 'JPY':
        denominations = {
          symbol: '¥',
          value: [10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1]
        };
        break;
      case 'USD':
        denominations = {
          symbol: '$',
          value: [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01]
        };
        break;
    }

    return denominations;
  }

  // Returns a regex string based on the denomination value and is used to populate the inputs pattern attribute for validation.
  function getRegexString(value: number) {
    let regex: string;

    switch (value) {
      case 10000:
        regex = '([0-9]*0000|0).00';
        break;
      case 5000:
        regex = '([0-9]*[05]000|0).00';
        break;
      case 2000:
        regex = '([0-9]*[02468]000|0).00';
        break;
      case 1000:
        regex = '([0-9]*000|0).00';
        break;
      case 500:
        regex = '([0-9]*[05]00|0).00';
        break;
      case 200:
        regex = '([0-9]*[02468]00|0).00';
        break;
      case 100:
        regex = '([0-9]*00|0).00';
        break;
      case 50:
        regex = '([0-9]*[05]0|0).00';
        break;
      case 20:
        regex = '([0-9]*[02468]0|0).00';
        break;
      case 10:
        regex = '[0-9]*0.00';
        break;
      case 5:
        regex = '[0-9]*[05].00';
        break;
      case 2:
        regex = '[0-9]*[02468].00';
        break;
      case 1:
        regex = '[0-9]+.00';
        break;
      case 0.5:
        regex = '[0-9]+.(0|5)0';
        break;
      case 0.25:
        regex = '[0-9]+.(00|25|50|75)';
        break;
      case 0.2:
        regex = '[0-9]+.[02468]0';
        break;
      case 0.1:
        regex = '[0-9]+.[0-9]0';
        break;
      case 0.05:
        regex = '[0-9]+.[0-9](0|5)';
        break;
      case 0.02:
        regex = '[0-9]+.[0-9][02468]';
        break;
      case 0.01:
        regex = '[0-9]+.[0-9]{2}';
        break;
      default:
        regex = '';
        break;
    }
    return regex;
  }

  // Returns count of specified denomination
  function getCount(index: number, value: number): number {
    // If index does not exist...
    if (index < 0) {
      return 0;
    }

    // If denomination value is not cleanly divisible...
    if ((Math.round(denoms[index].value) % (value * 100)) / 100 != 0) {
      return 0;
    }

    // Finally, return only whole number
    return Math.round(denoms[index].value) / value / 100;
  }

  // Initialise denominations output array
  const outputs: Array<JSX.Element> = [];

  // Get denominations based on selected currency
  const denominations = fillCurrency(currency);

  // Fill outputs array
  denominations.value.forEach((value) => {
    // Get denoms index
    const index = denoms.findIndex(
      (x) => x.denom === `denom-${value.toString()}`
    );

    // Add Denominations as child components
    outputs.push(
      <Denomination
        key={`denom-${value}`}
        symbol={denominations.symbol}
        denomination={value}
        count={getCount(index, value)}
        regex={getRegexString(value)}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    );
  });

  return (
    <div className="tillcounter">
      <Currency
        currency={currency}
        setCurrency={setCurrency}
        setDenoms={setDenoms}
        setTotal={setTotal}
      />
      {outputs}
      <hr />
      <div className="total">
        <p>
          <b>Total:</b>{' '}
          <span className="total-span">
            {denominations.symbol}
            {(total / 100).toFixed(2)}
          </span>
        </p>
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TillCounter;
