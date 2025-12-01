import { GoogleGenAI } from "@google/genai";

// Standard instruction for the model
const SYSTEM_INSTRUCTION = "You are a helpful AI assistant.";

export const onRequest = async (context) => {
  const { request, env } = context;

  // 1. Handle CORS (Optional but recommended for frontend apps)
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  // 2. Validate Request
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

  const apiKey = env.VITE_GEMINI_API_KEY; // Ensure this is set in Cloudflare secrets
  if (!apiKey) {
    return new Response("Server Configuration Error: API Key missing", {
      status: 500,
    });
  }

  try {
    // 3. Initialize the New SDK Client
    // The new SDK entry point is often 'GoogleGenAI' (or 'Client' in some versions),
    // but works differently than the old one.
    const client = new GoogleGenAI({ apiKey });

    // 4. Retrieve History from Cloudflare KV
    // We bind the KV namespace 'CHAT_HISTORY' in wrangler.toml
    let history = [];
    const storedHistory = await env.CHAT_HISTORY.get(sessionId);

    if (storedHistory) {
      history = JSON.parse(storedHistory);
    }

    // 5. Construct the Conversation for the Model
    // The new SDK expects a 'contents' array with role/parts.
    // We append the new user message to the history we just loaded.
    const currentConversation = [
      ...history,
      { role: "user", parts: [{ text: message }] },
    ];

    // 6. Call the Gemini API (Stateless Approach)
    // We pass the entire conversation history to provide context.
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
        // Safety settings can be simple defaults or configured specifically
      },
      contents: currentConversation,
    });

    // 7. Extract the Response Text
    const responseText = response.text;

    // 8. Update History and Save to KV
    // We append the model's response to our history list.
    const updatedHistory = [
      ...currentConversation,
      { role: "model", parts: [{ text: responseText }] },
    ];

    // Save back to KV (set a TTL of 24 hours to clean up old chats automatically)
    await env.CHAT_HISTORY.put(sessionId, JSON.stringify(updatedHistory), {
      expirationTtl: 60 * 60 * 24,
    });

    // 9. Return Response
    return new Response(JSON.stringify({ response: responseText }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
