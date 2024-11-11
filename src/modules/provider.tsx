// export const NotesContext = createContext<any>(undefined);

// export const NotesProvider = ({ children }: any) => {
//   const [notes, setNotes] = useState<any>([]);

//   const getNotes = useCallback(async () => {
//     try {
//       const data = await infraGetNotes();

//       if (!data)
//         throw new Error("An error occurred while trying to fetch the notes");

//       setNotes(data);
//     } catch (e) {}
//   }, []);

//   const value = useMemo(() => ({ notes, getNotes }), [notes]);

//   return (
//     <NotesContext.Provider value={value}>{children}</NotesContext.Provider>
//   );
// };
