import React from "react";
import "./TillCounter.css";

// Declare Props type
type Props = {
  denoms: Array<number>;
};

// Main function
function TillCounter(props: Props) {
  // state initialisation
  const [denom01, setDenom01] = React.useState(0);
  const [denom02, setDenom02] = React.useState(0);
  const [denom03, setDenom03] = React.useState(0);
  const [denom04, setDenom04] = React.useState(0);
  const [denom05, setDenom05] = React.useState(0);
  const [denom06, setDenom06] = React.useState(0);
  const [denom07, setDenom07] = React.useState(0);
  const [denom08, setDenom08] = React.useState(0);
  const [denom09, setDenom09] = React.useState(0);
  const [denom10, setDenom10] = React.useState(0);
  const [denom11, setDenom11] = React.useState(0);

  const [total, setTotal] = React.useState(0);
  // let total: number = 0;

  // initiliase storage
  let storage: { key: string; value: number }[] = [];

  // fill storage with default values
  props.denoms.forEach((x) => storage.push({ key: "denom-" + x, value: 0 }));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // set amount to number entered

    let x: string = event.target.id;
    let y: string = event.target.value;

    // console.log('Change:', x, y);
  };

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    // set amount to number entered

    let x: string = event.target.id;
    let y: string = event.target.value;

    // console.log('Blur:', x, y);

    // get index of changed field
    let index = storage.findIndex((obj) => obj.key === x);

    // set value of index
    storage[index].value = parseFloat(y);

    let sum: number = 0;

    // add them together
    storage.forEach((obj) => (sum += obj.value));

    console.log("Sum:", sum);

    // total = sum;
    setTotal(sum);

    console.log("Total:", total);

    /*
    So here is where the system breaks down. If setTotal(sum) is uncommented
    it will break the amount that is returned for sum. Perhaps passing the 'storage' array might solve this.
    */
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
