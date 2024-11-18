import { httpClient } from "../services/api/api-client";

type NotesProps = {
  id: string;
  title: string;
  description: string;
};

const createNote = async (data: Omit<NotesProps, "id">) => {
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
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export { createNote };
