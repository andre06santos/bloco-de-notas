import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NotesProvider } from "./modules/provider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </StrictMode>
);
