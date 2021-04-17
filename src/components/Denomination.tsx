import React from 'react';

type Props = {
  denom: number;
};

function Denomination(props: Props) {
  return <div>{props.denom}</div>;
}

export default Denomination;
