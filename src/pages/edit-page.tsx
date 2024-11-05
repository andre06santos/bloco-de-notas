// PascalCase para componentes;

import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <>
      <h1>Edite a nota</h1>
      <form action="">
        <label htmlFor="titulo">Titulo</label>
        <input type="text" id="titulo" />

        <label htmlFor="descricao">Descrição</label>
        <input type="text" />

        <Link to={"/"}>
          <input type="button" value="CANCELAR" />
        </Link>

        <Link to={"/"}>
          <input type="submit" value="CRIAR" />
        </Link>
      </form>
    </>
  );
};

export { EditPage };
