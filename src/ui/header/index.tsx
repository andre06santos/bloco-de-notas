import { Link } from "react-router-dom";
import { Button } from "../button";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h2 className="header__title">Início</h2>
      </Link>
      <Link to="/criar">
        <Button typeButton="add" label={"ADICIONAR"} />
      </Link>
    </header>
  );
};

export { Header };
