import "./styles.css";
import { Note } from "../../ui/note";
import { useEffect } from "react";
import { useNotes } from "../../modules/hooks/use-notes";

interface NoteType {
  id: string;
  title: string;
  content: string;
}

const NotesPage = () => {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        if (notes.length === 0) {
          await getNotes();
        }
      } catch (error) {
        console.error("Erro ao tentar buscar as notas:", error);
      }
    };

    fetchNotes();
  }, [getNotes]);

  if (notes.length === 0) {
    return <div className="container-notes-page">Nenhuma nota encontrada.</div>;
  }

  return (
    <div className="container-notes-page">
      {notes.map((note: NoteType) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export { NotesPage };
