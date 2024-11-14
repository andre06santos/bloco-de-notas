import "./styles.css";
import { Button } from "../button";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteNote } from "../../infrastructure/delete-note";
import { useNotes } from "../../modules/hooks/use-notes";
import { toast } from "react-toastify";

const Modal = ({ modalChange }: any) => {
  const { state:nota } = useLocation();
  const { getNotes } = useNotes();
  const navigate = useNavigate();

  const handledeleteNote = async () => {
    try {
      const response = await deleteNote(nota);
      if (!response) {
        throw new Error("Invalid response when trying to delete note")
      }
      getNotes()
      navigate("/");
      
      toast("Nota deletada com sucesso!!!",{
        position: "top-center",
        type: "success"
      })
    } catch (error) {
      toast("Não foi possivel deletar a nota!!!",{
        position:"top-center",
        type:"error"
      })
    }
  };
  return (
    <div className="modal__bg">
      <div className="modal">
        <p className="modal__text">Tem certeza que deseja excluir esta nota?</p>

        <div className="modal__buttons">
          <Button
            type="button"
            typeButton="delete"
            label={"EXCLUIR"}
            onClick={handledeleteNote}
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
