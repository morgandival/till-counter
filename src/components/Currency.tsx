import React from 'react';

function Currency(): JSX.Element {
  return (
    <div className="currency" id="currency">
      <label>Choose a currency: </label>
      <select>
        <option value="AUD">AUD</option>
        <option value="NZD">NZD</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default Currency;
