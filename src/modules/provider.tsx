import { createContext, useState, useCallback, useMemo, useEffect } from "react";
import { createNote as infraCreateNote } from "../infrastructure/create-note";
import { getNotes as infraGetNotes } from "../infrastructure/get-notes";
import { editNote as infraEditNote } from "../infrastructure/edit-note";
import { deleteNote as infraDeleteNote } from "../infrastructure/delete-note";
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

  const getNotes = useCallback(async () => {
    try {
      const response = await infraGetNotes();

      if (!response) {
        throw new Error("An error occurred while trying to fetch the notes");
      }
      setNotes(response);

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

  const deleteNote = useCallback(async (note: any) => {
    try {
      const response = await infraDeleteNote(note);

      if (!response) {
        throw new Error("An error occurred when trying to delete the note");
      }

      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }, []);


  useEffect(() => {
    getNotes();
  }, [])

  const value = useMemo(
    () => ({ notes, createNote, getNotes, editNote, deleteNote }),
    [notes]
  );

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};