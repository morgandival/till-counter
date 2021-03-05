import React from 'react';
import './Total.css';

type Props = {
  //total: Array<object>;
  total: number;
}

function Total (props: Props) {
  
  

  return (
    <div className="total">
      <p><b>Total:</b> <label className="total-label">${props.total.toFixed(2)}</label></p>
    </div>
  )
}

export default Total;