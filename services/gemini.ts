export const sendMessage = async (
  message: string,
  sessionId: string
): Promise<string> => {
  const response = await fetch(import.meta.env.VITE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, sessionId }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }
  const data = await response.json();

  return data.response;
};
