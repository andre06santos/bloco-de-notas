import { httpClient } from "../services/api/api-client"

export const deleteNote = async (data:any) =>{
    try{
        const response = await httpClient({
            endpoint: `/${data.id}`,
            config: {
                method: "DELETE",
                data,
            },
        });
} catch (error) {
    if (error instanceof Error) {
        throw new Error(error.message);
    }
}