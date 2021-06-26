import React from 'react';

type Props = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
};

function Currency(props: Props): JSX.Element {
  // Handles what happens when currency is changed...
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setCurrency(() => {
      return event.target.value;
    });
  };

  return (
    <div className="currency">
      <label>Choose a currency: </label>
      <select id="currency" onChange={handleChange}>
        <option value="AUD">AUD</option>
        <option value="NZD">NZD</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
}

export default Currency;
