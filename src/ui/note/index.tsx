import "./styles.css";
import { Link } from "react-router-dom";
import editarIcon from "./icons/editar.png";
import excluirIcon from "./icons/excluir.png";

const Note = () => {
  return (
    <div className="container-nota">
      <div className="dados-nota">
        <h2>Numero de série do antivírus</h2>
        <p>12345678</p>
      </div>

      <div className="container-botoes">
        <div>s
          <Link to='/edit'><button><img src={editarIcon} /></button></Link>
          <button><img src={excluirIcon} /></button>
        </div>
      </div>
    </div>
  );
};

export { Note };
