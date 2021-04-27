import React, { ChangeEventHandler, FocusEventHandler } from 'react';

type Props = {
  denomination: number;
  regex: string;
  onChange: ChangeEventHandler;
  onBlur: FocusEventHandler;
};

function Denomination(props: Props): JSX.Element {
  return (
    <div className="denomination">
      <label className="denom-label">${props.denomination.toFixed(2)}</label>
      <input
        id={'denom-' + props.denomination}
        type="text"
        className="denom-input"
        step={props.denomination}
        min="0"
        pattern={props.regex}
        defaultValue="0.00"
        onChange={props.onChange}
        onBlur={props.onBlur}
      ></input>
      <label id={'count-' + props.denomination} className="denom-count">
        0
      </label>
    </div>
  );
}

export default Denomination;
