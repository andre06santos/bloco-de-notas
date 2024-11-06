import { Link } from "react-router-dom";
import "./styles.css";

const EditPage = () => {
  return (
    <div className="container-notas">
      <h1 className="titulo-pagina">Editar a nota</h1>
      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" />

        <label htmlFor="descricao">Descrição</label>
        <textarea name="descricao" id="descricao" maxLength={100}></textarea>

        <Link to="/">
          <input type="button" value="CANCELAR" />
        </Link>

        <Link to="/">
          <input type="submit" value="SALVAR" />
        </Link>

      </form>
    </div>
  );
};

export { EditPage };
