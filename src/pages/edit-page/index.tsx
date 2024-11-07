import { Link } from "react-router-dom";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import "./styles.css";
import { Button } from "../../ui/button";

const EditPage = () => {
  return (
    <div className="container-notas">
      <h1 className="titulo-pagina">Editar a nota</h1>

      <form action="">
        <Input label="Título" />
        <Textarea label="Descrição" />

        <Link to="/">
          <Button type={"button"} label={"CANCELAR"} />
        </Link>
        <Link to="/">
          <Button type={"submit"} label={"SALVAR"} />
        </Link>
      </form>
    </div>
  );
};

export { EditPage };
