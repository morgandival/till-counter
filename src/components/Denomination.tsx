import React from 'react';

type Props = {
  denomination: number;
};

function Denomination(props: Props) {
  return <div>{props.denomination}</div>;
}

export default Denomination;
