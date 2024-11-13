import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../modal";
import editIcons from "/icons/editar.png";
import deleteIcons from "/icons/excluir.png";
import "./styles.css";

const Note = ({ note }: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      {showModal && <Modal modalChange={handleDelete} />}
      <div className="container-nota">
        <div className="dados-nota">
          <h2>{note.titulo}</h2>
          <p>{note.descricao}</p>
        </div>

        <div className="container-botoes">
          <div>
            <Link to="/editar" state={note}>
              <button>
                <img src={editIcons} alt="Editar" />
              </button>
            </Link>

            <Link to="/">
              <button onClick={handleDelete}>
                <img src={deleteIcons} alt="Excluir" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Note };
