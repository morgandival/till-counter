import React, { useState } from 'react';
import Currency from '../components/Currency';
import Denomination from '../components/Denomination';

type Currency = {
  code: string;
  symbol: string;
  values: Array<number>;
};

type Denom = {
  denom: string;
  value: number;
};

function TillCounter(): JSX.Element {
  const [denoms, setDenoms] = useState<Denom[]>([]);
  const [currency, setCurrency] = useState('AUD');
  const [reverse, setReverse] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const denom: string = event.target.id;
    const value: number = parseFloat(event.target.value) * 100;
    const index = denoms.findIndex((x) => x.denom === denom);

    if (index === -1) {
      setDenoms((oldDenoms) => [...oldDenoms, { denom, value }]);
    }

    if (index > -1) {
      setDenoms((oldDenoms) => [
        ...oldDenoms.slice(0, index),
        { denom, value },
        ...oldDenoms.slice(index + 1)
      ]);
    }
  };

  const handleBlur = () => {
    if (denoms.length > 0) {
      addDenomValues();
    }
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '0.00')
    );
    setDenoms(() => []);
    setReverse(() => false);
    addDenomValues();
  };

  const handleReverse = () => {
    reverse ? setReverse(() => false) : setReverse(() => true);
  };

  function addDenomValues() {
    if (denoms.length > 0) {
      return denoms.map((a) => a.value).reduce((a, b) => a + b);
    }

    return 0;
  }

  function fillCurrency(currency: string): Currency {
    const currencies: Array<Currency> = [
      {
        code: 'AUD',
        symbol: '$',
        values: [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05]
      },
      {
        code: 'EUR',
        symbol: '€',
        // prettier-ignore
        values: [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
      },
      {
        code: 'JPY',
        symbol: '¥',
        values: [10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1]
      },
      {
        code: 'NZD',
        symbol: '$',
        values: [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05]
      },
      {
        code: 'USD',
        symbol: '$',
        values: [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.01]
      }
    ];

    const denominations =
      currencies.find((object) => object.code === currency) || currencies[0];

    if (reverse === true) {
      denominations.values.reverse();
    }

    return denominations;
  }

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

  function getCount(index: number, value: number): number {
    if (index < 0) {
      return 0;
    }

    if ((Math.round(denoms[index].value) % (value * 100)) / 100 != 0) {
      return 0;
    }

    return Math.round(denoms[index].value) / value / 100;
  }

  const outputs: Array<JSX.Element> = [];
  const denominations = fillCurrency(currency);

  denominations.values.forEach((value) => {
    const index = denoms.findIndex(
      (x) => x.denom === `denom-${value.toString()}`
    );

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
      />
      <div className="reverse">
        <label>Reverse: </label>
        <input type="checkbox" checked={reverse} onChange={handleReverse} />
      </div>
      {outputs}
      <hr />
      <div className="total">
        <p>
          <b>Total:</b>{' '}
          <span className="total-span">
            {denominations.symbol}
            {(addDenomValues() / 100).toFixed(2)}
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
