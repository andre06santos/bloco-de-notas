import { Link } from "react-router-dom";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import "./styles.css";
import { Button } from "../../ui/button";

const CreatePage = () => {
  // const { createNote } = useNotes();

  //   try {
  //     const response = await createNote();
  //   } catch (e) {}
  // };

  return (
    <div className="container-notas">
      <h1 className="titulo-pagina">Crie uma nota</h1>

      <form className="form">
        <Input label="Título" />
        <Textarea label="Descrição" />

        <Link to="/">
          <Button type={"button"} label={"CANCELAR"} />
        </Link>

        <Link to="/">
          <Button type={"submit"} label={"CRIAR"} />
        </Link>
      </form>
    </div>
  );
};

export { CreatePage };
