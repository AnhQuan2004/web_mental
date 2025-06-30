import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ChatMessage from "@/components/ChatMessage";
import ExpertChatInput from "@/components/ExpertChatInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain } from "lucide-react";
import { useExpertSocket } from "@/hooks/useExpertSocket";

interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  expertName?: string;
}

const UserChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('user_chat_messages');
    if (savedMessages) {
      const parsed = JSON.parse(savedMessages).map((msg: ChatMessage) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
      setMessages(parsed);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('user_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const { isConnected, connectionError, sendMessage } = useExpertSocket({
    onMessageReceived: (socketMessage) => {
      if (socketMessage.role === "expert") {
        const newMessage: ChatMessage = {
          id: Date.now().toString(),
          content: socketMessage.msg,
          role: "assistant",
          timestamp: socketMessage.timestamp || new Date(),
          expertName: "Expert",
        };
        setMessages((prev) => [...prev, newMessage]);
      }
    },
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    if (isConnected) {
      const success = sendMessage(content);
      if (!success) {
        console.error("Failed to send message via socket");
      }
    } else {
      console.warn("Socket not connected, cannot send message");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <Navbar />
      <div className="flex h-[calc(100vh-64px)]">
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-hidden bg-gradient-to-b from-blue-25 to-cyan-25">
            <ScrollArea className="h-full">
              <div className="p-6 space-y-6">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                {isLoading && (
                  <div className="flex justify-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl rounded-bl-md px-6 py-4 shadow-sm border border-blue-100">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-sky-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </div>
          <div className="bg-white/80 backdrop-blur-sm border-t border-blue-100">
            <ExpertChatInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              expertName="Expert"
              isSocketConnected={isConnected}
              connectionError={connectionError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
