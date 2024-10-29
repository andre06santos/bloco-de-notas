import { Note } from "../ui/note";

const NotesPage = () => {
  const data = [
    {
      id: 1,
      title: "Text 1",
      text: "Description 1",
    },
    {
      id: 2,
      title: "Text 2",
      text: "Description 2",
    },
    {
        id: 1,
        title: "Text 1",
        text: "Description 1",
      },
      {
        id: 2,
        title: "Text 2",
        text: "Description 2",
      },
  ];

  return (
    <div className="notes">
      {data.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export { NotesPage };
