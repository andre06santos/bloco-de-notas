import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNotes } from "../../modules/hooks/use-notes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import "./styles.css";
import { Spinner } from "../../ui/spinner";

const CreatePage = () => {
  const { createNote } = useNotes();
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const note = { titulo, descricao };
    try {
      setIsLoading(true);
      const response = await createNote(note);
      if (!response) {
        throw new Error("Invalid response when trying to create note");
      }

      setIsLoading(false);

      navigate("/");

      toast("Nota criada com sucesso!", {
        position: "top-center",
        type: "success",
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast("Ocorreu um erro ao tentar criar a nota", {
        position: "top-center",
        type: "error",
      });
    }
  };

  return (
    <div className="container-notas">
      <h1 className="titulo-pagina">Crie uma nota</h1>
      {isLoading && <Spinner />}

      <form className="form" onSubmit={handleSubmit}>
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
              <Button typeButton="cancel" label={"CANCELAR"} />
            </Link>
          </div>
          <div className="container-button-create">
            <Input type="submit" value="CRIAR" />
          </div>
        </div>
      </form>
    </div>
  );
};

export { CreatePage };
