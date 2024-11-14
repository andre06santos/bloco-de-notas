import "./styles.css";
import { Note } from "../../ui/note";
import { useNotes } from "../../modules/hooks/use-notes";

const NotesPage = () => {
  const { notes } = useNotes();

  return (
    <div className="container-notes-page">
      {notes.map((note: any) => (
        <Note key={note.id} id={note.id} titulo={note.titulo} descricao={note.descricao}/>
      ))}
    </div>
  );
};

export { NotesPage };
