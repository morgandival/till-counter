import React from 'react';

type Denom = {
  denom: string;
  value: number;
};

type Props = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  setDenoms: React.Dispatch<React.SetStateAction<Denom[]>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

function Currency(props: Props): JSX.Element {
  // Handles what happens when currency is changed...
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Reset all input fields to 0.00
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '0.00')
    );

    // Reset denominations array
    props.setDenoms(() => {
      return [];
    });

    // Reset total
    props.setTotal(() => {
      return 0;
    });

    // Return new currency value
    props.setCurrency(() => {
      return event.target.value;
    });
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
