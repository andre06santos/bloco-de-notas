import "./styles.css";

const Note = () => {
  return (
    <div className="container-nota">
      <div className="dados-nota">
        <h2>Numero de série do antivírus</h2>
        <p>12345678</p>
      </div>

      <div className="container-botoes">
        <div>
          <button>Editar</button>
          <button>Excluir</button>
        </div>
      </div>
    </div>
  );
};

export { Note };
