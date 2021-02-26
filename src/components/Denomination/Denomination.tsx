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
    case 100:
      regex = "([0-9]*[0]{2}|0).[0]{2}";
      break;
    case 50:
      regex = "([0-9]*[05]{1}[0]|0).[0]{2}";
      break;
    case 20:
      regex = "([0-9]*[02468]{1}[0]|0).[0]{2}";
      break;
    case 10:
      regex = "[0-9]*[0].[0]{2}";
      break;
    case 5:
      regex = "[0-9]*[05].[0]{2}";
      break;
    case 2:
      regex = "[0-9]*[02468].[0]{2}";
      break;
    case 1:
      regex = "[0-9]+.[0]{2}";
      break;
    case 0.50:
      regex = "[0-9]+.[05][0]";
      break;
    case 0.20:
      regex = "[0-9]+.[02468][0]";
      break;
    case 0.10:
      regex = "[0-9]+.[0-9][0]";
      break;
    case 0.05:
      regex = "[0-9]+.[0-9][05]";
      break;
  }

  // event handler
  const [amount, setAmount] = React.useState({
    error: false,
    value: null
  });

  const handleChange = (e: any) => setAmount(e.target.value);
  
  console.log(amount);
  

  return (
    <div className="denomination">
      <label className="denom-label">{props.label}</label>
      <input
        id={inputID}
        className="denom-input"
        pattern={regex}
        defaultValue="0.00"
        onChange={handleChange}
      >
      </input>
      <label className="denom-count">0</label>
    </div>
  );
}

export default Denomination;