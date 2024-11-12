import { useContext } from "react";
import { NotesContext } from "../provider";

export const useNotes = () => {
  const value = useContext(NotesContext);

  if (!value) {
    throw new Error("You must wrap your component with NotesProvider");
  }

  return value;
};
