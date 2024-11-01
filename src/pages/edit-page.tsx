const EditPage = () => {
  return (
    <main>
      <h1>Edite a nota</h1>

      <form action="post" className="form">
        <label>
          Título
          <input type="text" name="title" id="title" className="form__title" />
        </label>

        <label>
          Descrição
          <textarea name="text" id="text" className="form__text"></textarea>
        </label>

        <div className="buttons">
          <input
            type="button"
            value="CANCELAR"
            className="form__button cancel"
          />
          <input type="button" value="CRIAR" className="form__button create" />
        </div>
      </form>
    </main>
  );
};

export { EditPage };
