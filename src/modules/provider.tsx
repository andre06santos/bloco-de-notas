import { createContext, useState, useCallback, useMemo } from "react";
import { createNote as infraCreateNote } from "../infrastructure/create-note";
import { editNote as infraEditNote } from "../infrastructure/edit-note";

export const NotesContext = createContext<any>(undefined);

export const NotesProvider = ({ children }: any) => {
  const [notes, setNotes] = useState<any>([]);

  const createNote = useCallback(async (note: any) => {
    try {
      const response = await infraCreateNote(note);

      if (!response) {
        throw new Error("An error ocurred while trying to create the note");
      }
      setNotes((oldNotes: any) => [...oldNotes, response]);

      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }, []);

  const editNote = useCallback(async (note: any) => {
    try {
      const response = await infraEditNote(note);

      if (!response) {
        throw new Error("An error ocurred while trying to edit the note");
      }

      setNotes((oldNotes: any) => [
        oldNotes.map((actualNote: any) =>
          actualNote.id !== note.id ? actualNote : note
        ),
      ]);

      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }, []);

  const value = useMemo(() => ({ notes, createNote, editNote }), [notes]);

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
