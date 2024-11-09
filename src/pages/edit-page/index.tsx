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
        <Input label="Título" typeInput="text" />
        <Textarea label="Descrição" />

        <div className="container-function-page ">
          <div className="container-button-cancel">
            <Link to="/">
              <Button type="button" typeButton="cancel" label={"CANCELAR"} />
            </Link>
          </div>
          <div className="container-button-save">
            <Link to="/">
              <Input typeInput="submit" value="SALVAR" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export { EditPage };
