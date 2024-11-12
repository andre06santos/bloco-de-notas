import { Link } from "react-router-dom";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import "./styles.css";
import { Button } from "../../ui/button";
import { useNotes } from "../../modules/hooks/use-notes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const { createNote } = useNotes();
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const note = { titulo, descricao };    
    try {
      const response = await createNote(note);
      if (!response) {
        throw new Error("Invalid response when trying to create note");
      }
      console.log("Nota criada com sucesso");

      navigate("/")
      
    } catch (error) {
      console.error(error);
      console.log("Ocorreu um erro ao tentar criar a nota");
    }
  };

  return (
    <div className="container-notas">
      <h1 className="titulo-pagina">Crie uma nota</h1>

      <form className="form" onSubmit={handleSubmit}>
        <Input label="Título" type="text" value={titulo} onChange={(e:any) => setTitulo(e.target.value)} />
        <Textarea label="Descrição" value={descricao} onChange={(e:any) => setDescricao(e.target.value)} />

        <div className="container-function-page ">
          <div className="container-button-cancel">
            <Link to="/">
              <Button type="button" typeButton="cancel" label={"CANCELAR"} />
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
