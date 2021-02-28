import React from 'react';
import './Denomination.css';

type Props = {
  label: string;
  denom: number;
}

function Denomination (props: Props) {
  
  // set the id of the input element for later selection
  const inputID: string = 'denom-' + props.denom.toString();
  
  // initialise regex string
  let regex: string = "";

  // check denomination against entered value
  switch (props.denom) {
    // $100
    case 100:
      regex = "([0-9]*[0]{2}|0).[0]{2}";
      break;
    // $50
    case 50:
      regex = "([0-9]*[05]{1}[0]|0).[0]{2}";
      break;
    // $20
    case 20:
      regex = "([0-9]*[02468]{1}[0]|0).[0]{2}";
      break;
    // $10
    case 10:
      regex = "[0-9]*[0].[0]{2}";
      break;
    // $5
    case 5:
      regex = "[0-9]*[05].[0]{2}";
      break;
    // $2
    case 2:
      regex = "[0-9]*[02468].[0]{2}";
      break;
    // $1
    case 1:
      regex = "[0-9]+.[0]{2}";
      break;
    // $0.50
    case 0.50:
      regex = "[0-9]+.[05][0]";
      break;
    // $0.20
    case 0.20:
      regex = "[0-9]+.[02468][0]";
      break;
    // $0.10
    case 0.10:
      regex = "[0-9]+.[0-9][0]";
      break;
    // $0.05
    case 0.05:
      regex = "[0-9]+.[0-9][05]";
      break;
  }

  // state handlers
  const [amount, setAmount] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0); // count = 0 initialises displayed value

  // when input value changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  }

  // when input loses focus...
  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));

    // format output to 2 decimal places
    console.log(amount?.toFixed(2));


    // check for empty value 
    if (amount != null) {

      // calculate the count
      const x: number = amount / props.denom;

      // if the count is/is not a whole number...
      if (Number.isInteger(x)) {
        // change the count
        setCount(x);
      }
      // set count to zero
      else {
        setCount(0);
      }
    }
  }


  return (
    <div className="denomination">
      <label className="denom-label">{props.label}</label>
      <input
        id={inputID}
        type="text"
        className="denom-input"
        step={props.denom}
        min="0"
        pattern={regex}
        defaultValue="0.00"
        onChange={handleChange}
        onBlur={handleBlur}
      >
      </input>
      <label className="denom-count">{count}</label>
    </div>
  );
}

export default Denomination;