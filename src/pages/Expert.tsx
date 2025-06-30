import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ChatMessage from "@/components/ChatMessage";
import ExpertChatInput from "@/components/ExpertChatInput";
import ExpertSelector from "@/components/ExpertSelector";
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

const Expert = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Socket.IO integration
  const { isConnected, connectionError, sendMessage } = useExpertSocket({
    role: "user",
    onMessageReceived: (socketMessage) => {
      // Convert socket message to ChatMessage format
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
  }, [messages]);

  const handleSendMessage = async (content: string) => {
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
        <ExpertSelector
          experts={experts}
          selectedExpert={selectedExpert}
          onSelectExpert={handleSelectExpert}
        />

        <div className="flex-1 flex flex-col">
          {selectedExpert ? (
            <>
              {/* Expert Header */}
              <div className="bg-white/90 backdrop-blur-sm border-b border-blue-100 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                        {selectedExpert.avatar}
                      </div>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm ${
                          selectedExpert.isOnline
                            ? "bg-emerald-400"
                            : "bg-amber-400"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {selectedExpert.name}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {selectedExpert.specialty}
                      </p>
                      <div className="flex items-center space-x-3 mt-2">
                        <Badge
                          variant={
                            selectedExpert.isOnline ? "default" : "secondary"
                          }
                          className={`${
                            selectedExpert.isOnline
                              ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                              : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full mr-2 ${
                              selectedExpert.isOnline
                                ? "bg-emerald-500"
                                : "bg-amber-500"
                            }`}
                          ></div>
                          {selectedExpert.isOnline
                            ? "Đang trực tuyến"
                            : "Offline"}
                        </Badge>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>
                              Phản hồi trong {selectedExpert.responseTime}
                            </span>
                          </div>
                          <div className="flex items-center text-sm">
                            <div
                              className={`w-2 h-2 rounded-full mr-2 ${
                                isConnected ? "bg-green-500" : "bg-red-500"
                              }`}
                            ></div>
                            <span
                              className={
                                isConnected ? "text-green-600" : "text-red-600"
                              }
                            >
                              {isConnected
                                ? "Socket kết nối"
                                : "Socket ngắt kết nối"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expert Stats */}
                  <div className="hidden md:flex items-center space-x-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mb-1">
                        <Star className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-800">
                        4.9
                      </div>
                      <div className="text-xs text-gray-600">Đánh giá</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-full mb-1">
                        <Users className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-800">
                        500+
                      </div>
                      <div className="text-xs text-gray-600">Tư vấn</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mb-1">
                        <Shield className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="text-sm font-semibold text-gray-800">
                        5+
                      </div>
                      <div className="text-xs text-gray-600">Năm KN</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Area */}
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

              {/* Chat Input */}
              <div className="bg-white/80 backdrop-blur-sm border-t border-blue-100">
                <ExpertChatInput
                  onSendMessage={handleSendMessage}
                  isLoading={isLoading}
                  expertName={selectedExpert.name}
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
                  Chọn chuyên gia tư vấn
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Chọn một chuyên gia từ danh sách bên trái để bắt đầu cuộc trò
                  chuyện 1:1. Họ sẽ hỗ trợ bạn với những lời khuyên chuyên môn
                  và kinh nghiệm thực tế.
                </p>

                {/* Feature highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      An toàn & Bảo mật
                    </h4>
                    <p className="text-sm text-gray-600">
                      Cuộc trò chuyện được mã hóa và bảo mật tuyệt đối
                    </p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Chuyên gia giàu kinh nghiệm
                    </h4>
                    <p className="text-sm text-gray-600">
                      Đội ngũ chuyên gia có chứng chỉ hành nghề
                    </p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Phản hồi nhanh chóng
                    </h4>
                    <p className="text-sm text-gray-600">
                      Nhận được hỗ trợ trong vòng vài phút
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        💡 Mẹo để có buổi tư vấn hiệu quả:
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Mô tả rõ ràng vấn đề bạn đang gặp phải</li>
                        <li>
                          • Chia sẻ cảm xúc và suy nghĩ một cách thành thật
                        </li>
                        <li>
                          • Đặt câu hỏi cụ thể để nhận được lời khuyên phù hợp
                        </li>
                        <li>• Ghi chú lại những lời khuyên quan trọng</li>
                      </ul>
                    </div>
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

export default Expert;
