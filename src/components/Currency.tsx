import React from 'react';

function Currency(): JSX.Element {
  // Initialise currency string
  const [currency, setCurrency] = React.useState('AUD');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(() => {
      return event.target.value;
    });
    console.log(currency);
  };

  return (
    <div className="currency" id="currency">
      <label>Choose a currency: </label>
      <select onChange={handleChange}>
        <option value="AUD">AUD</option>
        <option value="NZD">NZD</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default Currency;
