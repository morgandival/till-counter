import React, { Dispatch, SetStateAction } from 'react';

type Denom = {
  denom: string;
  value: number;
};

type Props = {
  currency: string;
  setCurrency: Dispatch<SetStateAction<string>>;
  setDenoms: Dispatch<SetStateAction<Denom[]>>;
};

function Currency(props: Props): JSX.Element {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '0.00')
    );

    props.setDenoms(() => []);
    props.setCurrency(() => event.target.value);
  };

  return (
    <div className="currency">
      <label>Choose a currency: </label>
      <select id="currency" onChange={handleChange}>
        <option value="AUD">AUD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="NZD">NZD</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default Currency;
