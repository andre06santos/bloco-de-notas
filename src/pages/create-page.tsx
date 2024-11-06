import { Link } from "react-router-dom";
import Input from "../ui/input";
import { Textarea } from "../ui/textarea";

const CreatePage = () => {
  return (
    <>
      <h1>Crie uma nota</h1>

      <form>
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

export { CreatePage };
