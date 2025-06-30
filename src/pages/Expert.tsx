import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ChatMessage from "@/components/ChatMessage";
import ExpertChatInput from "@/components/ExpertChatInput";
import ExpertSelector from "@/components/ExpertSelector";
import SessionSidebar from "@/components/SessionSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Users, Brain, Heart, Shield, Clock, Star } from "lucide-react";
import { useExpertSocket } from "@/hooks/useExpertSocket";

interface Expert {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
  isOnline: boolean;
  responseTime: string;
}

interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  expertName?: string;
}

interface SocketMessage {
  role: "user" | "expert";
  msg: string;
  timestamp?: Date;
  sessionId: string;
}

interface Session {
  id: string;
  title: string;
  messages: ChatMessage[];
  lastMessage: string;
  updatedAt: Date;
}

const Expert = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const currentSessionRef = useRef(currentSession);

  useEffect(() => {
    currentSessionRef.current = currentSession;
  }, [currentSession]);

  // Load sessions from localStorage on mount
  useEffect(() => {
    if (role === 'expert') {
      const savedSessions = localStorage.getItem('expert_chat_sessions');
      if (savedSessions) {
        const parsed = JSON.parse(savedSessions).map((session: Session) => ({
          ...session,
          updatedAt: new Date(session.updatedAt),
          messages: session.messages.map((msg: ChatMessage) => ({
            ...msg,
            timestamp: new Date(msg.timestamp)
          }))
        }));
        setSessions(parsed);
      }
    }
  }, [role]);

  // Save sessions to localStorage whenever they change
  useEffect(() => {
    if (role === 'expert' && sessions.length > 0) {
      localStorage.setItem('expert_chat_sessions', JSON.stringify(sessions));
    }
  }, [sessions, role]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Socket.IO integration
  const { isConnected, connectionError, sendMessage } = useExpertSocket({
    onMessageReceived: (socketMessage: SocketMessage) => {
      if (role === "expert") {
        // Logic for expert receiving a message
        setSessions(prevSessions => {
          const sessionToUpdate = prevSessions.find(
            (s) => s.id === socketMessage.sessionId
          );
          if (sessionToUpdate) {
            const newMessage: ChatMessage = {
              id: Date.now().toString(),
              content: socketMessage.msg,
              role: "user",
              timestamp: socketMessage.timestamp || new Date(),
            };
            const updatedSession = {
              ...sessionToUpdate,
              messages: [...sessionToUpdate.messages, newMessage],
              lastMessage: socketMessage.msg,
              updatedAt: new Date(),
            };
            const newSessions = prevSessions.map((s) =>
                s.id === socketMessage.sessionId ? updatedSession : s
              );
            if (currentSessionRef.current?.id === socketMessage.sessionId) {
              setCurrentSession(updatedSession);
            }
            return newSessions;
          } else {
            // Create a new session if it doesn't exist
            const newSession: Session = {
              id: socketMessage.sessionId,
              title: `User ${socketMessage.sessionId.slice(0, 4)}`,
              messages: [
                {
                  id: Date.now().toString(),
                  content: socketMessage.msg,
                  role: "user",
                  timestamp: socketMessage.timestamp || new Date(),
                },
              ],
              lastMessage: socketMessage.msg,
              updatedAt: new Date(),
            };
            return [newSession, ...prevSessions];
          }
        });
      } else {
        // Logic for user receiving a message
        if (socketMessage.role === "expert") {
          const newMessage: ChatMessage = {
            id: Date.now().toString(),
            content: socketMessage.msg,
            role: "assistant",
            timestamp: socketMessage.timestamp || new Date(),
            expertName: selectedExpert?.name || "Chuyên gia",
          };
          setMessages((prev) => [...prev, newMessage]);
        }
      }
    },
  });

  const experts: Expert[] = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Tâm lý học lâm sàng",
      avatar: "👩‍⚕️",
      isOnline: true,
      responseTime: "~2 phút",
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      specialty: "Tư vấn nghề nghiệp",
      avatar: "👨‍💼",
      isOnline: true,
      responseTime: "~5 phút",
    },
    {
      id: "3",
      name: "Dr. Emily Davis",
      specialty: "Tư vấn gia đình",
      avatar: "👩‍🏫",
      isOnline: false,
      responseTime: "~30 phút",
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentSession]);

  const handleSendMessage = async (content: string) => {
    if (role === "expert") {
      if (!currentSession) return;
      const expertMessage: ChatMessage = {
        id: Date.now().toString(),
        content,
        role: "assistant",
        timestamp: new Date(),
        expertName: "Expert",
      };
      const updatedSession = {
        ...currentSession,
        messages: [...currentSession.messages, expertMessage],
        lastMessage: content,
        updatedAt: new Date(),
      };
      setSessions(prevSessions =>
        prevSessions.map((s) => (s.id === currentSession.id ? updatedSession : s))
      );
      setCurrentSession(updatedSession);
      sendMessage(content, currentSession.id);
    } else {
      if (!selectedExpert) return;

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        content,
        role: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);

      // Send message via Socket.IO
      if (isConnected) {
        const success = sendMessage(content);
        if (!success) {
          console.error("Failed to send message via socket");
        }
      } else {
        console.warn("Socket not connected, cannot send message");
      }
    }
  };

  const handleSelectExpert = (expert: Expert) => {
    setSelectedExpert(expert);
    setMessages([]);

    // Welcome message from selected expert
    const welcomeMessage: ChatMessage = {
      id: Date.now().toString(),
      content: `Xin chào! Tôi là ${expert.name}, chuyên gia về ${expert.specialty}. Tôi rất vui được hỗ trợ bạn hôm nay. Bạn có thể chia sẻ những gì đang băn khoăn với tôi không?`,
      role: "assistant",
      timestamp: new Date(),
      expertName: expert.name,
    };

    setMessages([welcomeMessage]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-sky-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <Navbar />

      {/* Connection Error Alert */}
      {connectionError && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 relative z-20">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <span className="text-sm">
              ⚠️ Không thể kết nối tới máy chủ Socket.IO: {connectionError}
            </span>
            <span className="text-xs">Đang thử kết nối lại...</span>
          </div>
        </div>
      )}

      <div className="flex h-[calc(100vh-64px)] relative z-10">
        {role === "expert" ? (
          <SessionSidebar
            sessions={sessions}
            currentSession={currentSession}
            onNewChat={() => {
              /* For experts, new chats are initiated by users */
            }}
            onSelectSession={(sessionId) => {
              const session = sessions.find((s) => s.id === sessionId);
              if (session) {
                setCurrentSession(session);
              }
            }}
          />
        ) : (
          <ExpertSelector
            experts={experts}
            selectedExpert={selectedExpert}
            onSelectExpert={handleSelectExpert}
          />
        )}

        <div className="flex-1 flex flex-col">
          {selectedExpert || currentSession ? (
            <>
              {/* Expert Header */}
              <div className="bg-white/90 backdrop-blur-sm border-b border-blue-100 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {role === "expert"
                          ? "U"
                          : selectedExpert?.avatar}
                      </div>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                          isConnected
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {role === "expert"
                          ? currentSession?.title
                          : selectedExpert?.name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {role === "expert"
                          ? "User"
                          : selectedExpert?.specialty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-hidden bg-gradient-to-b from-blue-25 to-cyan-25">
                <ScrollArea className="h-full">
                  <div className="p-6 space-y-6">
                    {(role === "expert"
                      ? currentSession?.messages
                      : messages
                    )?.map((message) => (
                      <ChatMessage
                        key={message.id}
                        message={message}
                        isExpertView={role === "expert"}
                      />
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

              {/* Chat Input */}
              <div className="bg-white/80 backdrop-blur-sm border-t border-blue-100">
                <ExpertChatInput
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                  expertName={
                    role === "expert"
                      ? "Expert"
                      : selectedExpert?.name
                  }
                  isSocketConnected={isConnected}
                  connectionError={connectionError}
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-white/50 backdrop-blur-sm">
              <div className="text-center max-w-2xl mx-auto px-6">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  {role === "expert"
                    ? "Select a session"
                    : "Chọn chuyên gia tư vấn"}
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {role === "expert"
                    ? "Select a session from the left to start chatting."
                    : "Chọn một chuyên gia từ danh sách bên trái để bắt đầu cuộc trò chuyện 1:1. Họ sẽ hỗ trợ bạn với những lời khuyên chuyên môn và kinh nghiệm thực tế."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Expert;
