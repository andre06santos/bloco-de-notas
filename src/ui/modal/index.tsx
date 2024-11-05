import "./styles.css"

const Modal = () => {
  return (
    <div className="modal">
        <p className="modal__text">Tem certeza que deseja excluir esta nota?</p>

        <div className="modal__buttons">
            <button className="modal__buttons__excluir">Excluir</button>
            <button className="modal__buttons__cancelar">Cancelar</button>
        </div>
    </div>
  )
}

export {Modal}