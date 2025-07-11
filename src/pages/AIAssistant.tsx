import React from "react";
import Navbar from "@/components/Navbar";
import { Brain } from "lucide-react";

const AIAssistant = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center">
        <div className="w-24 h-24 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
          <Brain className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Tính năng đang phát triển
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Trợ lý AI đang được hoàn thiện và sẽ sớm ra mắt. Cảm ơn sự kiên nhẫn của bạn!
        </p>
      </div>
    </div>
  );
};

export default AIAssistant;
