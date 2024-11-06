import { Link } from "react-router-dom";

const CreatePage = () => {
  return (
    <>
      <h1>Crie uma nota</h1>

      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" />

        <label htmlFor="descricao">Descrição</label>
        <input type="text" id="descricao" />

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
