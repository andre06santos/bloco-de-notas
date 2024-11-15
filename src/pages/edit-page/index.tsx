import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useNotes } from "../../modules/hooks/use-notes";
import { toast } from "react-toastify";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import "./styles.css";
import { Spinner } from "../../ui/spinner";

const EditPage = () => {
  const { editNote, getNotes } = useNotes();

  const { state } = useLocation();
  const navigate = useNavigate();
  const id = state.id;

  const [titulo, setTitulo] = useState(state.titulo);
  const [descricao, setDescricao] = useState(state.descricao);

  const [isLoading, setIsLoading] = useState(false);

  const handleSumbit = async (e: any) => {
    e.preventDefault();
    const note = {
      id,
      titulo,
      descricao,
    };
    try {
      setIsLoading(true);
      const response = await editNote(note);

      if (!response) {
        throw new Error("Invalid response when trying to edit note");
      }

      toast("Nota editada com sucesso!", {
        position: "top-center",
        type: "success",
      });
      await getNotes();

      setIsLoading(false)

      navigate("/");

      return response;
    } catch (error) {
      console.error(error);

      toast("Ocorreu um erro ao tentar editar a nota", {
        position: "top-center",
        type: "error",
      });
    }
  };

  return (
    <div className="container-notas">
      {isLoading && <Spinner />}

      <h1 className="titulo-pagina">Editar a nota</h1>

      <form action="" onSubmit={handleSumbit}>
        <Input
          label="Título"
          type="text"
          value={titulo}
          onChange={(e: any) => setTitulo(e.target.value)}
        />
        <Textarea
          label="Descrição"
          value={descricao}
          onChange={(e: any) => setDescricao(e.target.value)}
        />

        <div className="container-function-page ">
          <div className="container-button-cancel">
            <Link to="/">
              <Button typeButton="cancel" label="CANCELAR" />
            </Link>
          </div>
          <div className="container-button-save">
            <Input type="submit" value="SALVAR" />
          </div>
        </div>
      </form>
    </div>
  );
};

export { EditPage };
