export const sendMessage = async (
  message: string,
  sessionId: string
): Promise<string> => {
  const response = await fetch("/gemini", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, sessionId }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.text();
};
