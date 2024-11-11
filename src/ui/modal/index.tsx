import "./styles.css";
import { Button } from "../button";

const Modal = ({ modalChange }: any) => {
  return (
    <div className="modal__bg">
      <div className="modal">
        <p className="modal__text">Tem certeza que deseja excluir esta nota?</p>

        <div className="modal__buttons">
          <Button
            type="button"
            typeButton="delete"
            label={"EXCLUIR"}
            onClick={modalChange}
          />
          <Button
            type="button"
            typeButton="cancel"
            label={"CANCELAR"}
            onClick={modalChange}
          />
        </div>
      </div>
    </div>
  );
};

export { Modal };
