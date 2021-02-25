import './Denomination.css';

type Props = {
  label: string;
  denom: number;
}

function Denomination (props: Props) {
  
  // set the id of the input element for later selection
  const inputID: string = 'denom-' + props.denom.toString();

  return (
    <div className="denomination">
      <label className="denom-label">{props.label}</label>
      <input
        id={inputID}
        className="denom-input"
        defaultValue="0.00"
        onBlur={(e) => {
          console.log('Focused away from ' + inputID);
          
          // insert validation here
          
          //const inputText = document.getElementById(inputID)?.textContent;

          //console.log(inputText);
        }}>
      </input>
      <label className="denom-subtotal">$0.00</label>
    </div>
  );
}

export default Denomination;