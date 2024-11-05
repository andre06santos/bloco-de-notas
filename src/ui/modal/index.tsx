import "./styles.css";

const Modal = ({modalChange}:any) => {
  
  return (
    <div className="modal__bg">
      <div className="modal">
        <p className="modal__text">Tem certeza que deseja excluir esta nota?</p>

        <div className="modal__buttons">
          <button className="modal__buttons__excluir" onClick={modalChange}>Excluir</button>
          <button className="modal__buttons__cancelar" onClick={modalChange}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
