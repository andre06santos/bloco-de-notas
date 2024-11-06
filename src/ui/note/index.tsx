import "./styles.css";
import { Link } from "react-router-dom";
import editarIcon from "./icons/editar.png";
import excluirIcon from "./icons/excluir.png";
import { useState } from "react";
import { Modal } from "../modal";

const Note = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal((prevState) => !prevState);
    console.log(showModal);
  };


  return (
    <div className="container-nota">
      <div className="dados-nota">
        <h2>Numero de série do antivírus</h2>
        <p>12345678</p>
      </div>

      <div className="container-botoes">
        <div>s
          <Link to="/editar">
            <Link to='/edit'><button><img src={editarIcon} /></button></Link>
          </Link>

          <Link to="/">
            <button onClick={handleDelete}><img src={excluirIcon} /></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Note };
