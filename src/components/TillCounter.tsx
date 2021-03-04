import React from 'react';
import './TillCounter.css';


type Props = {
  denoms: Array<number>;
}

function TillCounter (props: Props) {

  // state initialisation
  const [total, setTotal] = React.useState<number>(0);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // set amount to number entered
    //setAmount(parseFloat(event.target.value));
    console.log('Change');
  }

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    // set amount to number entered
    //setAmount(parseFloat(event.target.value));
    console.log('Blur');
  }

  
  const outputs: any = [];

  props.denoms.forEach(function (value) {
    //console.log(value);
    // initialise regex string
    let regex: string = "";

    // check denomination against entered value
    switch (value) {
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

    // add elements to array
    outputs.push(
      <div className="denomination">
        <label className="denom-label">${value.toFixed(2)}</label>
        <input
          id={'denom-' + value}
          type="text"
          className="denom-input"
          step={value}
          min="0"
          pattern={regex}
          defaultValue="0.00"
          onChange={handleChange}
          onBlur={handleBlur}
        >
        </input>
        <label className="denom-count">0</label>
      </div>
    )
  });


  return(
    <div className="tillcounter">
      {outputs}
      <hr />
      <div className="total">
        <p><b>Total:</b> <label className="total-label">${total.toFixed(2)}</label></p>
      </div>
    </div>
  );
}

export default TillCounter;