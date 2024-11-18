import "./styles.css";
import { Button } from "../button";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteNote } from "../../infrastructure/delete-note";
import { useNotes } from "../../modules/hooks/use-notes";
import { toast } from "react-toastify";
import { useState } from "react";
import { Spinner } from "../spinner";

type ModalProps = {
  modalChange: () => void;
};

const Modal = ({ modalChange }: ModalProps) => {
  const { state: nota } = useLocation();
  const { getNotes } = useNotes();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handledeleteNote = async () => {
    try {
      setIsLoading(true);

      await deleteNote(nota);

      getNotes();
      navigate("/");
      setIsLoading(false);

      toast("Nota deletada com sucesso!!!", {
        position: "top-center",
        type: "success",
      });
    } catch (error) {
      setIsLoading(false);
      toast("Não foi possível deletar a nota!!!", {
        position: "top-center",
        type: "error",
      });
    }
  };

  return (
    <div className="modal__bg">
      {isLoading && <Spinner />}
      <div className="modal">
        <p className="modal__text">Tem certeza que deseja excluir esta nota?</p>

        <div className="modal__buttons">
          <Button
            typeButton="delete"
            label={"EXCLUIR"}
            onClick={handledeleteNote}
          />
          <Button
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
