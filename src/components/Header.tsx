import React from 'react';

type Props = {
  title: string;
};

function Header(props: Props): JSX.Element {
  return (
    <header className="header">
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
