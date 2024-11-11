import { Link } from "react-router-dom";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import "./styles.css";
import { Button } from "../../ui/button";
import { useNotes } from "../../modules/hooks/use-notes";
import { useState } from "react";

const CreatePage = () => {
  const { createNote } = useNotes();
  
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleSubmit = async () => {
    const note = {titulo, descricao}
      try {
        const response = await createNote(note);
      } catch (e) {}
  }

  return (
    <div className="container-notas">
      <h1 className="titulo-pagina">Crie uma nota</h1>

      <form className="form">
        <Input label="Título" type="text" value={titulo} setValue={setTitulo}/>
        <Textarea label="Descrição" value={descricao} setValue={setDescricao}/>

        <div className="container-function-page ">
          <div className="container-button-cancel">
            <Link to="/">
              <Button type="button" typeButton="cancel" label={"CANCELAR"} />
            </Link>
          </div>
          <div className="container-button-create">
            <Link to="/">
              <Input type="submit" value="CRIAR" onClick={handleSubmit}/>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export { CreatePage };
