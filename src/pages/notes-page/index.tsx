import "./styles.css";
import { Note } from "../../ui/note";
import { useNotes } from "../../modules/hooks/use-notes";

type NoteType = {
  id: string;
  title: string;
  description: string;
};

const NotesPage = () => {
  const { notes } = useNotes();

  return (
    <div className="container-notes-page">
      {notes.map((note: NoteType) => (
        <Note
          key={note.id}
          id={note.id}
          titulo={note.title}
          descricao={note.description}
        />
      ))}
    </div>
  );
};

export { NotesPage };
