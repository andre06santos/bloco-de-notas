import { httpClient } from "../services/api/api-client";

export const createNote = async (data: any) => {
  try {
    const response = await httpClient({
      endpoint: "/",
      config: {
        method: "POST",
        data: data,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("An error ocurred while trying to create the note");
    
  }
};
