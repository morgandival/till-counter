import React from 'react';

function Currency(): JSX.Element {
  // Initialise currency
  const [currency, setCurrency] = React.useState('AUD');

  console.log(currency);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(() => {
      return event.target.value;
    });
  };

  return (
    <div className="currency">
      <label>Choose a currency: </label>
      <select id="currency" onChange={handleChange}>
        <option value="AUD">AUD</option>
        <option value="NZD">NZD</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default Currency;
