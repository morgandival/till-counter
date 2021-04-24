import React from 'react';
// import Denomination from '../components/Denomination';

// Declare Props type
type Props = {
  denoms: Array<number>;
};

interface Denom {
  denom: string;
  value: number;
}

// Main function
function TillCounter(props: Props) {
  // state initialisation
  const [denoms, setDenoms] = React.useState<Denom[]>([]);
  const [total, setTotal] = React.useState(0);

  // Handles what happens when the input field value is altered
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Extract input ID and value
    const denom: string = event.target.id;
    const value: number = parseFloat(event.target.value);

    // Grab index of denom if it exists in the denoms array
    const index = denoms.findIndex((x) => x.denom === denom);

    // If index does not exist...
    if (index === -1) {
      // Push new denom and value to end of denoms array
      setDenoms((oldDenoms) => {
        return [...oldDenoms, { denom, value }];
      });
    }

    // If index exists...
    if (index > -1) {
      // Update values of specific index
      setDenoms((oldDenoms) => {
        return [
          ...oldDenoms.slice(0, index),
          { denom, value },
          ...oldDenoms.slice(index + 1)
        ];
      });
    }
  };

  // Handles what happens when the input field is left
  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check to see if there are array items to add together
    if (denoms.length > 0) {
      // Push to usestate
      setTotal((oldTotal) => {
        return addDenomValues();
      });
    }
  };

  // This function adds the values of the denoms array together and returns the total
  function addDenomValues() {
    return denoms
      .map((a) => a.value)
      .reduce(function (a, b) {
        return a + b;
      });
  }

  // Function returns a regex string used to validate the inputs
  function getRegexString(value: number) {
    let regex: string = '';
    switch (value) {
      // $100
      case 100:
        regex = '([0-9]*[0]{2}|0).[0]{2}';
        break;
      // $50
      case 50:
        regex = '([0-9]*[05]{1}[0]|0).[0]{2}';
        break;
      // $20
      case 20:
        regex = '([0-9]*[02468]{1}[0]|0).[0]{2}';
        break;
      // $10
      case 10:
        regex = '[0-9]*[0].[0]{2}';
        break;
      // $5
      case 5:
        regex = '[0-9]*[05].[0]{2}';
        break;
      // $2
      case 2:
        regex = '[0-9]*[02468].[0]{2}';
        break;
      // $1
      case 1:
        regex = '[0-9]+.[0]{2}';
        break;
      // $0.50
      case 0.5:
        regex = '[0-9]+.[05][0]';
        break;
      // $0.20
      case 0.2:
        regex = '[0-9]+.[02468][0]';
        break;
      // $0.10
      case 0.1:
        regex = '[0-9]+.[0-9][0]';
        break;
      // $0.05
      case 0.05:
        regex = '[0-9]+.[0-9][05]';
        break;
    }

    // Return regex string
    return regex;
  }

  // initialise denominations output array
  const outputs: any = [];

  // fill outputs array
  props.denoms.forEach((value) => {
    // NEW: add Denominations as child components
    // outputs.push(
    //   <Denomination
    //     denomination={value}
    //     regex={getRegexString(value)}
    //     //onChange={handleChange}
    //   />
    // );

    // OLD: add elements to array
    outputs.push(
      <div className="denomination" key={value}>
        <label className="denom-label">${value.toFixed(2)}</label>
        <input
          id={'denom-' + value}
          type="text"
          className="denom-input"
          step={value}
          min="0"
          pattern={getRegexString(value)}
          defaultValue="0.00"
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        <label id={'count-' + value} className="denom-count">
          0
        </label>
      </div>
    );
  });

  return (
    <div className="tillcounter">
      {outputs}
      <hr />
      <div className="total">
        <p>
          <b>Total:</b> <span className="total-span">${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default TillCounter;
