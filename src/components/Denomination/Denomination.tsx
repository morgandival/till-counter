import React from 'react';
import './Denomination.css';

type Props = {
  label: string;
  denom: number;
}

function Denomination (props: Props) {
  
  // set the id of the input element for later selection
  const inputID: string = 'denom-' + props.denom.toString();
  let regex: string = "";

  switch (props.denom) {
    case 100:
      regex = "[0-9]*[0]{2}.[0]{2}";
      break;
    case 50:
      regex = "[0-9]*[0]{2}.[0]{2}";
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