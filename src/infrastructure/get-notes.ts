import { httpClient } from "../services/api/api-client";

export const getNotes = async () => {
  try {
    //SOLITAÇÃO GET PARA UM ENDPOINT USANDO O HTTPCLIENT.
    const response = await httpClient({
      endpoint: "/",
      config: {
        method: "GET",
      },
    });
    // RETORNA OS DADOS DA REPOSTA
    return response.data;
  } catch (e: any) {
    throw new Error(e.error);
  }
};
