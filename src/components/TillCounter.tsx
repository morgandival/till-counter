import React from "react";
import "./TillCounter.css";

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
    // set amount to number entered
    //let x: string = event.target.id;
    //let y: number = parseFloat(event.target.value);
    //console.log("Change:", x, y);
  };

  // Handles what happens when the input field is left
  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Extract input ID and value
    let denom: string = event.target.id;
    let value: number = parseFloat(event.target.value);

    // Grab index of denom if it exists in the denoms array
    const index = denoms.findIndex((x) => x.denom === denom);

    // If index does not exist
    if (index === -1) {
      // Push new denom and value to end of denoms array
      setDenoms([...denoms, { denom, value }]);
    }

    // If index exists...
    if (index > -1) {
      // Update values of specific index
      setDenoms([
        ...denoms.slice(0, index),
        { denom, value },
        ...denoms.slice(index + 1),
      ]);
    }

    // console.log(denoms);

    // Check to see if there are array items to add together
    if (denoms.length > 0) {
      // Set total
      const sum: number = denoms
        .map((a) => a.value)
        .reduce(function (a, b) {
          return a + b;
        });
      setTotal(sum);
    }
  };

  // initialise denominations output array
  const outputs: any = [];

  // fill outputs array
  props.denoms.forEach(function (value) {
    // initialise regex string
    let regex: string = "";

    // check denomination against entered value to assign regex pattern for validation
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
      case 0.5:
        regex = "[0-9]+.[05][0]";
        break;
      // $0.20
      case 0.2:
        regex = "[0-9]+.[02468][0]";
        break;
      // $0.10
      case 0.1:
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
          id={"denom-" + value}
          type="text"
          className="denom-input"
          step={value}
          min="0"
          pattern={regex}
          defaultValue="0.00"
          onChange={handleChange}
          onBlur={handleBlur}
        ></input>
        <label className="denom-count">0</label>
      </div>,
    );
  });

  return (
    <div className="tillcounter">
      {outputs}
      <hr />
      <div className="total">
        <p>
          <b>Total:</b>{" "}
          <label className="total-label">${total.toFixed(2)}</label>
        </p>
      </div>
    </div>
  );
}

export default TillCounter;
