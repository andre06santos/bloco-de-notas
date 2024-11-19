import { httpClient } from "../services/api/api-client";

type EditNotesProps = {
  id: string;
  title: string;
  description: string;
};

const editNote = async (data: EditNotesProps) => {
  try {
    const response = await httpClient({
      endpoint: `/${data.id}/`,
      config: {
        method: "PUT",
        data,
      },
    });

    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export { editNote };
