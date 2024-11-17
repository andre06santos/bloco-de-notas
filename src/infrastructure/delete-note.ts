import { httpClient } from "../services/api/api-client";

type DeleteNoteProps = {
  id: string;
  title: string;
  description: string;
};

export const deleteNote = async (data: DeleteNoteProps) => {
  try {
    await httpClient({
      endpoint: `/notes/${data.id}`,
      config: {
        method: "DELETE",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
