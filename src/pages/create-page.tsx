const CreatePage = () => {
  return (
    <>
      <h1>Crie uma nota</h1>

      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" />

        <label htmlFor="descricao">Descrição</label>
        <input type="text" id="descricao" />

        <input type="button" value="CANCELAR" />
        <input type="submit" value="CRIAR" />
      </form>
    </>
  );
};

export { CreatePage };
