import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../modal";
import editIcons from "/icons/editar.png";
import deleteIcons from "/icons/excluir.png";
import "./styles.css";

type NoteProps = {
  id: string;
  titulo: string;
  descricao: string;
};

const Note = ({ id, titulo, descricao }: NoteProps) => {
  const [showModal, setShowModal] = useState(false);

  const note = {
    id,
    titulo,
    descricao,
  };

  const handleDelete = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      {showModal && <Modal modalChange={handleDelete} />}
      <div className="container-nota">
        <div className="dados-nota">
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>

        <div className="container-botoes">
          <div>
            <Link to="/editar" state={note}>
              <button>
                <img src={editIcons} alt="Editar" />
              </button>
            </Link>

            <Link to="/" state={note}>
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
