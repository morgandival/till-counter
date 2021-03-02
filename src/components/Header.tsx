import './Header.css';

type Props = {
  title: string;
}

function Header (props: Props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>      
    </header>
  );
}

export default Header;