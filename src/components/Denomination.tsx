import React from 'react';

type Props = {
  denomination: number;
  regex: string;
};

function Denomination(props: Props) {
  return (
    <div className="denomination" key={props.denomination}>
      <label className="denom-label">${props.denomination.toFixed(2)}</label>
      <input
        id={'denom-' + props.denomination}
        type="text"
        className="denom-input"
        step={props.denomination}
        min="0"
        pattern={props.regex}
        defaultValue="0.00"
        //onChange={handleChange}
        //onBlur={handleBlur  }
      ></input>
      <label id={'count-' + props.denomination} className="denom-count">
        0
      </label>
    </div>
  );
}

export default Denomination;
