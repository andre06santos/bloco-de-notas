import { httpClient } from "../services/api/api-client";

const getNotes = async () => {
  try {
    const response = await httpClient({
      endpoint: "/",
      config: {
        method: "GET",
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
export { getNotes };
