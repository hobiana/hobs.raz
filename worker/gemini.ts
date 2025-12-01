import { SYSTEM_INSTRUCTION } from "@/constants";
import { GoogleGenAI } from "@google/genai";

export default {
  async fetch(request: Request, env: any) {
    // Handle CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return new Response("Invalid JSON", { status: 400 });
    }

    const { message, sessionId } = body;
    if (!message || !sessionId) {
      return new Response("Missing 'message' or 'sessionId'", { status: 400 });
    }

    const apiKey = env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return new Response("Server Configuration Error: API Key missing", {
        status: 500,
      });
    }

    try {
      const client = new GoogleGenAI({ apiKey });

      let history: any[] = [];
      const storedHistory = await env.CHAT_HISTORY.get(sessionId);
      if (storedHistory) history = JSON.parse(storedHistory);

      const currentConversation = [
        ...history,
        { role: "user", parts: [{ text: message }] },
      ];

      const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
        contents: currentConversation,
      });

      const responseText = response.text;

      const updatedHistory = [
        ...currentConversation,
        { role: "model", parts: [{ text: responseText }] },
      ];

      await env.CHAT_HISTORY.put(sessionId, JSON.stringify(updatedHistory), {
        expirationTtl: 60 * 60 * 24,
      });

      return new Response(JSON.stringify({ response: responseText, history }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  },
};
