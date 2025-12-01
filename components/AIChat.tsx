import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
} from "lucide-react";
import { sendMessage } from "../services/gemini";
import { ChatMessage } from "../types";

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "0",
      role: "model",
      text: "Hello! I'm Hobiana's AI Assistant. Ask me anything about his experience, stack, or projects.",
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const sessionId = useRef(Date.now().toString());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      text: input,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const responseText = await sendMessage(userMsg.text, sessionId.current);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: responseText,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "model",
          text: "Error: Connection interrupted. Please check your API key.",
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "scale-0" : "scale-100"
        } transition-transform duration-300 absolute bottom-0 right-0 w-16 h-16 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-cyan-400/50 glow-effect`}
        aria-label="Open AI Chat"
      >
        <Sparkles className="animate-pulse" />
      </button>

      {/* Chat Interface */}
      <div
        className={`${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none"
        } transition-all duration-300 origin-bottom-right absolute bottom-0 right-0 w-[350px] sm:w-[400px] h-[500px] bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="p-4 bg-slate-800/50 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <h3 className="text-cyan-400 font-mono text-sm font-bold tracking-wider">
              AI ASSISTANT
            </h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-cyan-600 text-white rounded-tr-none"
                    : "bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none"
                }`}
              >
                <div className="flex items-center gap-2 mb-1 opacity-50 text-xs uppercase tracking-wider font-bold">
                  {msg.role === "user" ? <User size={10} /> : <Bot size={10} />}
                  {msg.role === "user" ? "You" : "System"}
                </div>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 text-slate-200 p-3 rounded-lg rounded-tl-none border border-slate-700">
                <Loader2 className="animate-spin w-4 h-4 text-cyan-400" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-800/30 border-t border-white/10">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about my projects..."
              className="w-full bg-slate-950/50 border border-slate-700 rounded-lg pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors font-mono"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-cyan-500 hover:text-cyan-300 disabled:opacity-50 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
