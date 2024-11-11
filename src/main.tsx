import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { NotesProvider } from "./modules/provider.tsx";
import { useNotes } from "./modules/hooks/use-notes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotesProvider value={useNotes}>
      <App />
    </NotesProvider>
  </StrictMode>
);
