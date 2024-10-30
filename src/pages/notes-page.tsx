import { Note } from "../ui/note";

const NotesPage = () => {
  return (
    <main className="notes">
      {data.map((note) => (
        <Note key={note.id} title={note.title} text={note.text}/>
      ))}
    </main>
  );
};

const data = [
  {
    id: 1,
    title: "Text kdsfajk fh asjkfh shdafjk sdhf jkds",
    text: "Description asjfh jdsahf kjdsah fjkh sajfhSKLHFSJA FHJKDSA FHJKSHD FKJHashd ksajfk sdakf kasdh fljahe kdns khfdsjka fhjsda fhuweah fuiehafjksdn fjkshdfjlhsdak fjskdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa hgj h",
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

export { NotesPage };
