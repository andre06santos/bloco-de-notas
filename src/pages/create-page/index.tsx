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
        <Input label="Título" typeInput="text" />
        <Textarea label="Descrição" />

        <div className="container-function-page ">
          <div className="container-button-cancel">
            <Link to="/">
              <Button type="button" typeButton="cancel" label={"CANCELAR"} />
            </Link>
          </div>
          <div className="container-button-create">
            <Link to="/">
              <Input typeInput="submit" value="CRIAR" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export { CreatePage };
