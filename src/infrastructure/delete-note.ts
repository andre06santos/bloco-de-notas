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

        return response.data;
    }catch(error: any){
        throw new Error(error.message);
    }
}