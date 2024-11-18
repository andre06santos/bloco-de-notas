import { useState, FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useNotes } from "../../modules/hooks/use-notes";
import { toast } from "react-toastify";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import "./styles.css";
import { Spinner } from "../../ui/spinner";

type Note = {
  id: string;
  title: string;
  description: string;
};

const EditPage = () => {
  const { editNote, getNotes } = useNotes();
  const { state } = useLocation();
  const navigate = useNavigate();

  const { id, titulo: initialTitulo, descricao: initialDescricao } = state;

  const [titulo, setTitulo] = useState<string>(initialTitulo);
  const [descricao, setDescricao] = useState<string>(initialDescricao);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const note: Note = {
      id: id,
      title: titulo,
      description: descricao,
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

      getNotes();
      setIsLoading(false);

      navigate("/");
    } catch (error) {
      setIsLoading(false);
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

      <form onSubmit={handleSubmit}>
        <Input
          label="Título"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <Textarea
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <div className="container-function-page">
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
