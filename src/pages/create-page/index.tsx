import { Link } from "react-router-dom";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import "./styles.css";
import { Button } from "../../ui/button";

const CreatePage = () => {
  return (
    <div className="container-notas">
      <h1 className="titulo-pagina">Crie uma nota</h1>

      <form className="form">
        <Input labelText="Título" />
        <Textarea labelText="Descrição" />

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
