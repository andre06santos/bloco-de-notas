// PascalCase para componentes;

import { Link } from "react-router-dom";
import Input from "../ui/input";
import { Textarea } from "../ui/textarea";

const EditPage = () => {
  return (
    <>
      <h1>Edite a nota</h1>
      <form action="">
        <Input labelText={"Título"}/>
        <Textarea labelText={"Descrição"}/>

        <Link to="/">
          <input type="button" value="CANCELAR" />
        </Link>

        <Link to="/">
          <input type="submit" value="CRIAR" />
        </Link>
      </form>
    </>
  );
};

export { EditPage };
