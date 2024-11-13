import { httpClient } from "../services/api/api-client";

export const editNote = async (data:any) => {
    try{
        const response = await httpClient({
            endpoint: `/${data.id}`,
            config: {
                method: "PUT",
                data
            }
        })

        return response.data;

    } catch (error:any){
        console.log(error.message);
        
    }

}