import React, {
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { createNote as infraCreateNote } from "../infrastructure/create-note";
import { getNotes as infraGetNotes } from "../infrastructure/get-notes";
import { editNote as infraEditNote } from "../infrastructure/edit-note";
import { deleteNote as infraDeleteNote } from "../infrastructure/delete-note";

type NotesProps = {
  id: string;
  title: string;
  description: string;
};

type NotesContextType = {
  notes: NotesProps[];
  createNote: (note: Omit<NotesProps, "id">) => Promise<Omit<NotesProps, "id"> | undefined>;
  getNotes: () => Promise<NotesProps[] | undefined>;
  editNote: (note: NotesProps) => Promise<NotesProps | undefined>;
  deleteNote: (note: NotesProps) => Promise<void>;
};

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined
);

type NotesProviderProps = {
  children: React.ReactNode;
};

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const [notes, setNotes] = useState<NotesProps[]>([]);

  const createNote = useCallback(async (note: Omit<NotesProps, "id">) => {
    try {
      const response = await infraCreateNote(note);
      if (!response) {
        throw new Error("An error occurred while trying to create the note.");
      }
      setNotes((oldNotes) => [...oldNotes, response]);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Create note failed:", error.message);
        throw new Error(error.message);
      }
    }
  }, []);

  const getNotes = useCallback(async () => {
    try {
      const response = await infraGetNotes();
      if (!response) {
        throw new Error("An error occurred while trying to fetch the notes.");
      }
      setNotes(response);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Get notes failed:", error.message);
        throw new Error(error.message);
      }
    }
  }, []);

  const editNote = useCallback(async (note: NotesProps) => {
    try {
      const response = await infraEditNote(note);
      if (!response) {
        throw new Error("An error occurred while trying to edit the note.");
      }
      setNotes((oldNotes) =>
        oldNotes.map((actualNote) =>
          actualNote.id !== note.id ? actualNote : response
        )
      );
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.error("Edit note failed:", error.message);
        throw new Error(error.message);
      }
    }
  }, []);

  const deleteNote = useCallback(async (note: NotesProps) => {
    try {
      await infraDeleteNote(note);
      setNotes((oldNotes) =>
        oldNotes.filter((actualNote) => actualNote.id !== note.id)
      );
    } catch (error) {
      if (error instanceof Error) {
        console.error("Delete note failed:", error.message);
        throw new Error(error.message);
      }
    }
  }, []);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  const value = useMemo(
    () => ({ notes, createNote, getNotes, editNote, deleteNote }),
    [notes, createNote, getNotes, editNote, deleteNote]
  );

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
