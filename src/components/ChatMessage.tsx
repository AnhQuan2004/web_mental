import React from "react";
import { User, Brain } from "lucide-react";
import ChatResult from "./ChatResult";

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    role: "user" | "assistant";
    timestamp: Date;
  };
  isExpertView?: boolean;
}

const ChatMessage = ({ message, isExpertView = false }: ChatMessageProps) => {
  const isUser = isExpertView
    ? message.role === "assistant"
    : message.role === "user";

  // Function to parse the special result format
  const parseResult = (content: string) => {
    const lines = content.trim().split("\n");
    if (lines.length < 4) return null;

    try {
      const scoresMatch = lines[0].match(/\[(.*?)\]/);
      if (!scoresMatch) return null;

      const scores = JSON.parse(`[${scoresMatch[1]}]`);
      const totalScore = parseInt(lines[1].split(":")[1].trim());
      const level = lines[2].split(":")[1].trim();
      const assessment = lines[3].split(":")[1].trim();

      return { scores, totalScore, level, assessment };
    } catch (error) {
      console.error("Failed to parse chat result:", error);
      return null;
    }
  };

  const resultData = !isUser ? parseResult(message.content) : null;

  if (resultData) {
    return <ChatResult {...resultData} />;
  }

  return (
    <div
      className={`flex w-full ${isUser ? "justify-end" : "justify-start"} mb-6`}
    >
      <div
        className={`flex max-w-[85%] ${
          isUser ? "flex-row-reverse" : "flex-row"
        } items-start space-x-4`}
      >
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
            isUser
              ? "bg-gradient-to-r from-blue-500 to-blue-600 ml-4"
              : "bg-gradient-to-r from-blue-400 to-cyan-400 mr-4"
          }`}
        >
          {isUser ? (
            <User className="w-5 h-5 text-white" />
          ) : (
            <Brain className="w-5 h-5 text-white" />
          )}
        </div>
        <div className="flex flex-col">
          <div
            className={`rounded-2xl px-6 py-4 shadow-sm border ${
              isUser
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-br-md border-blue-200"
                : "bg-white/80 backdrop-blur-sm text-gray-800 rounded-bl-md border-blue-100"
            }`}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
              {message.content}
            </p>
          </div>
          <div
            className={`flex ${isUser ? "justify-end" : "justify-start"} mt-2`}
          >
            <p
              className={`text-xs px-2 ${
                isUser ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {message.timestamp.toLocaleTimeString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
