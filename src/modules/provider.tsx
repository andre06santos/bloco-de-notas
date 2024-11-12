import { createContext, useState, useCallback, useMemo } from "react";
import { createNote as infraCreateNote } from "../infrastructure/create-note";

export const NotesContext = createContext<any>(undefined);

export const NotesProvider = ({ children }: any) => {
  const [notes, setNotes] = useState<any>([]);

  const createNote = useCallback(async (note: any) => {
    try {
      const response = await infraCreateNote(note);

      if (!response){
        throw new Error("An error ocurred while trying to create the note")
      }
      setNotes((oldNotes:any) => [...oldNotes, response])

      return response;
      
    } catch (e:any) {
      console.log(e.message);
      
    }
  }, []);
  

  const value = useMemo(() => ({ notes, createNote }), [notes]);

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
