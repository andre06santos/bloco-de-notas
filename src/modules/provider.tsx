// HOOKS BÁSICO DO REACT;
import { createContext, useState, useCallback, useMemo } from "react";
import { createNote as infraCreateNote } from "../infrastructure/create-note";
import { getNotes as infraGetNotes } from "../infrastructure/get-notes";

// CRIANDO O CONTEXTO FOM VALOR INICIAL DE UNDEFINED ATÉ QUE O NOTESPROVIDER UTILIZE PARA ENVOLVER OS COMPONENTES
export const NotesContext = createContext<any>(undefined);

// NOTES VAI FORNECER O CONTEXTO PARA SEUS 'FILHOS'
export const NotesProvider = ({ children }: any) => {
  //USESTATE É INICIADO COM UM ARRAY VAZIO. E SERÁ USADO PARA ARMAZENAR A LISTA DE NOTAS. A FUNÇÃO SETNOTES É USADA PARA ATUALIZAR O ESTADO.
  const [notes, setNotes] = useState<any>([]);
  //USO DO CALLBACK PARA GARANTIR QUE A FUNÇÃO CREATENOTE SEJA MEMORIZADA E NÃO RECRIADA A CADA RENDERIZAÇÃO;

  //PRIMEIRA FUNÇÃO QE CRIA UMA NOVA NOTA E ADICIONA AO ESTADO.
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

  // SEGUNDA FUNÇÃO PARA BUSCAR AS NOTAS DA API E ATUALIZAR O ESTADO COM ELAS.
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

  const value = useMemo(() => ({ notes, createNote, getNotes }), [notes]);

  return (
    <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
  );
};
