import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Brain, Heart } from "lucide-react";

interface ChatResultProps {
  scores: number[];
  totalScore: number;
  level: string;
  assessment: string;
}

const ChatResult: React.FC<ChatResultProps> = ({
  scores,
  totalScore,
  level,
  assessment,
}) => {
  const getLevelDetails = (level: string) => {
    switch (level) {
      case "Bình thường":
        return {
          color: "text-emerald-600",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-200",
          icon: "🌟",
        };
      case "Mức độ nhẹ":
        return {
          color: "text-amber-600",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-200",
          icon: "⚠️",
        };
      case "Mức độ vừa":
        return {
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-200",
          icon: "🔶",
        };
      case "Mức độ nặng":
        return {
          color: "text-red-600",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          icon: "🔴",
        };
      default:
        return {
          color: "text-red-700",
          bgColor: "bg-red-50",
          borderColor: "border-red-300",
          icon: "🆘",
        };
    }
  };

  const levelDetails = getLevelDetails(level);

  return (
    <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm mt-4">
      <CardHeader className="text-center pb-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-t-lg">
        <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
          Kết quả đánh giá sơ bộ
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <div
            className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full ${levelDetails.bgColor} ${levelDetails.borderColor} border-2 mb-4 shadow-lg`}
          >
            <span className="text-2xl">{levelDetails.icon}</span>
            <span className={`text-lg font-bold ${levelDetails.color}`}>
              {level}
            </span>
          </div>
          <p className="text-gray-700 text-base leading-relaxed max-w-2xl mx-auto">
            {assessment}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
            <div className="text-blue-600 font-semibold text-sm mb-1">
              Trầm cảm
            </div>
            <div className="text-2xl font-bold text-blue-800">
              {scores[0] + scores[1]}
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-xl border border-cyan-200">
            <div className="text-cyan-600 font-semibold text-sm mb-1">
              Lo âu
            </div>
            <div className="text-2xl font-bold text-cyan-800">
              {scores[2] + scores[3]}
            </div>
          </div>
          <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-4 rounded-xl border border-sky-200">
            <div className="text-sky-600 font-semibold text-sm mb-1">
              Tổng điểm
            </div>
            <div className="text-2xl font-bold text-sky-800">{totalScore}</div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <Button
            onClick={() => (window.location.href = "/ai-assistant")}
            className="h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Brain className="w-4 h-4 mr-2" />
            Trò chuyện tiếp
          </Button>
          <Button
            onClick={() => (window.location.href = "/expert")}
            variant="outline"
            className="h-12 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Heart className="w-4 h-4 mr-2" />
            Chat cùng chuyên gia
          </Button>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 mt-6">
          <p className="text-xs text-gray-600 text-center">
            <strong>Lưu ý:</strong> Kết quả này chỉ mang tính chất tham khảo và
            không thay thế cho chẩn đoán y khoa chuyên nghiệp.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatResult;