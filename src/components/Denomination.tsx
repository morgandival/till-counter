import React from 'react';

type Props = {
  denomination: number;
  regex: string;
};

function Denomination(props: Props) {
  return (
    <div>
      {props.denomination}: {props.regex}
    </div>
  );
}

export default Denomination;
