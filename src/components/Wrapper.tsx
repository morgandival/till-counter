import React from 'react';
import Denomination from './Denomination';
import Total from './Total';
import './Wrapper.css';


type Props = {
  // sum: number;
}

function Wrapper (props: Props) {

  const [sum, setSum] = React.useState(0);

  localStorage.setItem('denom-100', '0.00');
  localStorage.setItem('denom-50', '0.00');
  localStorage.setItem('denom-20', '0.00');
  localStorage.setItem('denom-10', '0.00');
  localStorage.setItem('denom-5', '0.00');
  localStorage.setItem('denom-2', '0.00');
  localStorage.setItem('denom-1', '0.00');
  localStorage.setItem('denom-0.5', '0.00');
  localStorage.setItem('denom-0.2', '0.00');
  localStorage.setItem('denom-0.1', '0.00');
  localStorage.setItem('denom-0.05', '0.00');  

  let x: any = localStorage.getItem('denom-100');

  let y: number = parseFloat(x);
  console.log(y);

  

  /* console.log(localStorage.getItem('denom-100'));
  console.log(localStorage.getItem('denom-50'));
  console.log(localStorage.getItem('denom-20'));
  console.log(localStorage.getItem('denom-10'));
  console.log(localStorage.getItem('denom-5'));
  console.log(localStorage.getItem('denom-2'));
  console.log(localStorage.getItem('denom-1'));
  console.log(localStorage.getItem('denom-0.5'));
  console.log(localStorage.getItem('denom-0.2'));
  console.log(localStorage.getItem('denom-0.1'));
  console.log(localStorage.getItem('denom-0.05')); */



  return (
    <div className="wrapper">
      <Denomination label="$100" denom={100} />
      <Denomination label="$50" denom={50} />
      <Denomination label="$20" denom={20} />
      <Denomination label="$10" denom={10} />
      <Denomination label="$5" denom={5} />
      <Denomination label="$2" denom={2} />
      <Denomination label="$1" denom={1} />
      <Denomination label="50c" denom={0.50} />
      <Denomination label="20c" denom={0.20} />
      <Denomination label="10c" denom={0.10} />
      <Denomination label="5c" denom={0.05} />
      <hr />
      <Total total={sum}/>
    </div>
  )
}

export default Wrapper;