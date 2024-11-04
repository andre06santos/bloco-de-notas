// PascalCase para componentes;

const EditPage = () => {
  return (
    <>
      <h1>Edite a nota</h1>
      <form action="">
        <label htmlFor="titulo">Titulo</label>
        <input type="text" id="titulo" />

        <label htmlFor="descricao">Descrição</label>
        <input type="text" />

        <input type="button" value="CANCELAR" />
        <input type="submit" value="SALVAR" />
      </form>
    </>
  );
};

export { EditPage };
