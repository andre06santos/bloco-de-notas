import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h2 className="header__title">Início</h2>
      </Link>
      <Link to="/criar">
        <button className="header__button">ADICIONAR</button>
      </Link>
    </header>
  );
};

export { Header };
