import { Link } from "react-router-dom";
import {Input} from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import "./styles.css";
import { Button } from "../../ui/button";


const EditPage = () => {
  return (
    <div className="container-notas">
      <h1 className="titulo-pagina">Editar a nota</h1>

      <form action="">
        <Input labelText="Título" />
        <Textarea labelText="Descrição" />

        <Link to="/">
          <Button typeButtom={"button"} text={"CANCELAR"} />
        </Link>
        <Button typeButtom={"submit"} text={"SALVAR"} />
        <Link to="/">
        </Link>
      </form>

    </div>
  );
};

export { EditPage };
