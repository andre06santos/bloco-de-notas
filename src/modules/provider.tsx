// export const NotesContext = createContext<any>(undefined);

// export const NotesProvider = ({ children }: any) => {
//   const [notes, setNotes] = useState<any>([]);

//   const createNote = useCallback(async (note: any) => {
//     try {
//       const response = await infraCreateNote(note);
//     } catch (e) {}
//   }, []);

//   const value = useMemo(() => ({ notes, createNote }), [notes]);

//   return (
//     <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
//   );
// };
