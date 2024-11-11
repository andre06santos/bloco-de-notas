import "./styles.css";
import { Note } from "../../ui/note";

const NotesPage = () => {
  // const { notes } = useNotes();

  // return notes.map((note, index) => {});
  return (
    <div className="container-notes-page">
      <Note />
    </div>
  );
};

export { NotesPage };
