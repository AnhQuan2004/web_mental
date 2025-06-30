import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Square, Mic } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onStop?: () => void;
}

const ChatInput = ({ onSendMessage, isLoading, onStop }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="px-6 py-4">
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Chia sẻ suy nghĩ của bạn với AI Assistant..."
            className="min-h-[60px] max-h-[140px] resize-none bg-white/80 backdrop-blur-sm border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 rounded-2xl px-4 py-3 text-gray-800 placeholder:text-gray-500 shadow-sm transition-all duration-200"
            disabled={isLoading}
          />

          {/* Character count indicator */}
          {message.length > 0 && (
            <div className="absolute bottom-2 right-3 text-xs text-gray-400">
              {message.length}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex space-x-2">
          {/* Voice input button (placeholder for future feature) */}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="w-12 h-12 rounded-full border-blue-200 bg-white/80 backdrop-blur-sm hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
            disabled={isLoading}
          >
            <Mic className="w-4 h-4 text-blue-600" />
          </Button>

          {/* Send/Stop button */}
          {isLoading ? (
            <Button
              type="button"
              onClick={onStop}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg transition-all duration-200"
              size="sm"
            >
              <Square className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={!message.trim() || isLoading}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-300 disabled:to-gray-400 shadow-lg transition-all duration-200 disabled:shadow-sm"
              size="sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          )}
        </div>
      </form>

      {/* Helpful tips */}
      <div className="mt-3 flex items-center justify-center space-x-4 text-xs text-gray-500">
        <span className="flex items-center space-x-1">
          <span>💡</span>
          <span>Nhấn Enter để gửi, Shift+Enter để xuống dòng</span>
        </span>
      </div>
    </div>
  );
};

export default ChatInput;
