import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./ui/layout";
import { NotesPage } from "./pages/notes-page";
import { CreatePage } from "./pages/create-page";
import { EditPage } from "./pages/edit-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NotesPage />} />
          <Route path="/criar" element={<CreatePage />} />
          <Route path="/editar" element={<EditPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
