import "./styles.css";
import { Note } from "../../ui/note";
import { useEffect } from "react";
import { useNotes } from "../../modules/hooks/use-notes";

const NotesPage = () => {
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        if (notes.length === 0) {
          await getNotes();
        }
      } catch (error) {
        console.error("Erro ao buscar as notas:", error);
      }
    };

    fetchNotes();
  }, [getNotes, notes.length]);

  if (notes.length === 0) {
    return <div className="container-notes-page">Nenhuma nota encontrada.</div>;
  }

  console.log(notes);

  return (
    <div className="container-notes-page">
      {notes.map((note: any) => (
        <Note title={note.titulo} description={note.descricao} />
      ))}
    </div>
  );
};

export { NotesPage };
