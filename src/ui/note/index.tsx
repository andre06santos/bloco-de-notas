import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import { Modal } from "../modal";

const Note = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    setShowModal((prevState) => !prevState);
    console.log(showModal);
  };

  return (
    <>
      {showModal && <Modal modalChange={handleDelete} />}
      <div className="container-nota">
        <div className="dados-nota">
          <h2>Numero de série do antivírus</h2>
          <p>12345678</p>
        </div>

        <div className="container-botoes">
          <div>
            <Link to="/editar">
              <button>Editar</button>
            </Link>

            <Link to="/">
              <button onClick={handleDelete}>Excluir</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export { Note };
