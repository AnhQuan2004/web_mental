import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import ChatSidebar from "@/components/ChatSidebar";
import { useGeminiChat } from "@/hooks/useGeminiChat";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, MessageCircle, Sparkles, Brain } from "lucide-react";

const AIAssistant = () => {
  const {
    sessions,
    currentSession,
    isLoading,
    loadSessions,
    createNewSession,
    sendMessage,
    selectSession,
    deleteSession,
  } = useGeminiChat();
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      loadSessions();
    }
  }, [loadSessions, navigate]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentSession?.messages]);

  const handleSendMessage = (content: string) => {
    if (!currentSession) {
      const newSession = createNewSession();
      if (newSession) {
        sendMessage(content);
      }
    } else {
      sendMessage(content);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <Navbar />
      <div className="flex h-[calc(100vh-64px)]">
        <ChatSidebar
          sessions={sessions}
          currentSession={currentSession}
          onNewChat={createNewSession}
          onSelectSession={selectSession}
          onDeleteSession={deleteSession}
        />

        <div className="flex-1 flex flex-col relative">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-300 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-sky-300 rounded-full blur-3xl"></div>
          </div>

          {currentSession ? (
            <>
              {/* Header with session info */}
              <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 px-6 py-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      AI Mental Health Assistant
                    </h2>
                    <p className="text-sm text-blue-600">
                      Hỗ trợ sức khỏe tinh thần 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-hidden relative">
                <ScrollArea className="h-full">
                  <div className="p-6 space-y-6">
                    {currentSession.messages.length === 0 ? (
                      <div className="text-center py-16">
                        <div className="relative mb-8">
                          <div className="w-24 h-24 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                            <Heart className="w-10 h-10 text-white animate-pulse" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                          Chào mừng đến với AI Assistant
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                          Tôi ở đây để lắng nghe và hỗ trợ bạn. Hãy chia sẻ
                          những gì bạn đang cảm thấy.
                        </p>

                        {/* Helpful suggestions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <MessageCircle className="w-4 h-4 text-blue-600" />
                              </div>
                              <h4 className="font-semibold text-gray-800">
                                Chia sẻ cảm xúc
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600">
                              Hãy kể cho tôi về cảm xúc của bạn hôm nay
                            </p>
                          </div>

                          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="flex items-center space-x-3 mb-2">
                              <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                                <Heart className="w-4 h-4 text-cyan-600" />
                              </div>
                              <h4 className="font-semibold text-gray-800">
                                Tìm kiếm hỗ trợ
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600">
                              Tôi có thể giúp bạn tìm cách vượt qua khó khăn
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <>
                        {currentSession.messages.map((message) => (
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
                      </>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border-t border-blue-100">
                <ChatInput
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                />
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center relative">
              <div className="text-center z-10">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                  Chọn cuộc trò chuyện
                </h3>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
                  Chọn một cuộc trò chuyện từ sidebar hoặc tạo cuộc trò chuyện
                  mới để bắt đầu
                </p>

                {/* Welcome cards */}
                <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
                    <div className="flex items-center justify-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Hỗ trợ tâm lý
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      Tôi ở đây để lắng nghe và hỗ trợ bạn mọi lúc, mọi nơi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
