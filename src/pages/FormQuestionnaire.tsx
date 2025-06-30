import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Heart,
  Brain,
  Users,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";

const questions = [
  {
    id: 1,
    question: "Tôi cảm thấy khó thư giãn",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 2,
    question: "Tôi nhận thấy miệng mình bị khô",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 3,
    question: "Tôi không thể cảm thấy bất kỳ cảm xúc tích cực nào",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 4,
    question:
      "Tôi cảm thấy khó thở (ví dụ: thở gấp hoặc hụt hơi dù không vận động)",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 5,
    question: "Tôi cảm thấy khó có động lực để làm việc gì đó",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 6,
    question: "Tôi có xu hướng phản ứng quá mức với tình huống",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 7,
    question: "Tôi cảm thấy run rẩy (ví dụ: run tay)",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 8,
    question: "Tôi cảm thấy mình đang tiêu tốn rất nhiều năng lượng vì lo lắng",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 9,
    question:
      "Tôi lo lắng về các tình huống có thể khiến tôi hoảng loạn và xấu hổ",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 10,
    question: "Tôi cảm thấy không còn điều gì đáng mong đợi trong cuộc sống",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 11,
    question: "Tôi thường xuyên cảm thấy bồn chồn, kích động",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 12,
    question: "Tôi cảm thấy khó thư giãn",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 13,
    question: "Tôi cảm thấy buồn bã và u sầu",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 14,
    question: "Tôi cảm thấy khó chịu khi bị ngăn cản làm điều mình đang làm",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 15,
    question: "Tôi cảm thấy gần như hoảng loạn",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 16,
    question: "Tôi không thể hứng thú với bất kỳ điều gì",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 17,
    question: "Tôi cảm thấy bản thân không có giá trị",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 18,
    question: "Tôi cảm thấy nhạy cảm và dễ bị kích động",
    category: "stress",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 19,
    question:
      "Tôi cảm nhận được tim mình đập nhanh hoặc bỏ nhịp dù không vận động",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 20,
    question: "Tôi cảm thấy sợ hãi mà không rõ lý do",
    category: "anxiety",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
  {
    id: 21,
    question: "Tôi cảm thấy cuộc sống vô nghĩa",
    category: "depression",
    options: [
      { value: "0", label: "Không đúng với tôi chút nào" },
      {
        value: "1",
        label: "Đúng với tôi ở một mức độ nào đó, hoặc thỉnh thoảng",
      },
      {
        value: "2",
        label: "Đúng với tôi ở mức độ khá nhiều hoặc thường xuyên",
      },
      { value: "3", label: "Rất đúng với tôi hoặc xảy ra hầu hết thời gian" },
    ],
  },
];

const FormQuestionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getScores = () => {
    // DASS-21 scoring categories
    const depressionQuestions = [3, 5, 10, 13, 16, 17, 21];
    const anxietyQuestions = [2, 4, 7, 9, 15, 19, 20];
    const stressQuestions = [1, 6, 8, 11, 12, 14, 18];

    const depressionScore =
      depressionQuestions.reduce((sum, questionId) => {
        return sum + (parseInt(answers[questionId]) || 0);
      }, 0) * 2; // Multiply by 2 as per DASS-21 scoring

    const anxietyScore =
      anxietyQuestions.reduce((sum, questionId) => {
        return sum + (parseInt(answers[questionId]) || 0);
      }, 0) * 2; // Multiply by 2 as per DASS-21 scoring

    const stressScore =
      stressQuestions.reduce((sum, questionId) => {
        return sum + (parseInt(answers[questionId]) || 0);
      }, 0) * 2; // Multiply by 2 as per DASS-21 scoring

    return {
      depression: depressionScore,
      anxiety: anxietyScore,
      stress: stressScore,
      total: depressionScore + anxietyScore + stressScore,
    };
  };

  const getRecommendation = (scores: {
    depression: number;
    anxiety: number;
    stress: number;
    total: number;
  }) => {
    const getDepressionLevel = (score: number) => {
      if (score <= 9) return { level: "Bình thường", severity: 0 };
      if (score <= 13) return { level: "Nhẹ", severity: 1 };
      if (score <= 20) return { level: "Trung bình", severity: 2 };
      if (score <= 27) return { level: "Nặng", severity: 3 };
      return { level: "Rất nặng", severity: 4 };
    };

    const getAnxietyLevel = (score: number) => {
      if (score <= 7) return { level: "Bình thường", severity: 0 };
      if (score <= 9) return { level: "Nhẹ", severity: 1 };
      if (score <= 14) return { level: "Trung bình", severity: 2 };
      if (score <= 19) return { level: "Nặng", severity: 3 };
      return { level: "Rất nặng", severity: 4 };
    };

    const getStressLevel = (score: number) => {
      if (score <= 14) return { level: "Bình thường", severity: 0 };
      if (score <= 18) return { level: "Nhẹ", severity: 1 };
      if (score <= 25) return { level: "Trung bình", severity: 2 };
      if (score <= 33) return { level: "Nặng", severity: 3 };
      return { level: "Rất nặng", severity: 4 };
    };

    const depression = getDepressionLevel(scores.depression);
    const anxiety = getAnxietyLevel(scores.anxiety);
    const stress = getStressLevel(scores.stress);

    const maxSeverity = Math.max(
      depression.severity,
      anxiety.severity,
      stress.severity
    );

    if (maxSeverity === 0) {
      return {
        level: "Bình thường",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
        borderColor: "border-emerald-200",
        icon: "🌟",
        message:
          "Tuyệt vời! Bạn không có dấu hiệu rõ ràng của các vấn đề tâm lý. Hãy tiếp tục duy trì lối sống lành mạnh và cân bằng cảm xúc.",
        details: { depression, anxiety, stress },
      };
    } else if (maxSeverity === 1) {
      return {
        level: "Mức độ nhẹ",
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        icon: "⚠️",
        message:
          "Bạn có thể đang trải qua một vài dấu hiệu nhẹ. Nên theo dõi thêm và thử áp dụng các phương pháp thư giãn, thể thao, nghỉ ngơi.",
        details: { depression, anxiety, stress },
      };
    } else if (maxSeverity === 2) {
      return {
        level: "Mức độ trung bình",
        color: "text-orange-600",
        bgColor: "bg-orange-50",
        borderColor: "border-orange-200",
        icon: "🔶",
        message:
          "Bạn có dấu hiệu ở mức độ trung bình. Khuyến nghị bạn nên trao đổi với chuyên gia tâm lý để được hỗ trợ và tư vấn cụ thể.",
        details: { depression, anxiety, stress },
      };
    } else if (maxSeverity === 3) {
      return {
        level: "Mức độ nặng",
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        icon: "🔴",
        message:
          "Các triệu chứng cho thấy bạn có thể đang chịu ảnh hưởng đáng kể. Việc gặp chuyên gia tâm lý là rất cần thiết.",
        details: { depression, anxiety, stress },
      };
    } else {
      return {
        level: "Mức độ rất nặng",
        color: "text-red-700",
        bgColor: "bg-red-50",
        borderColor: "border-red-300",
        icon: "🆘",
        message:
          "Bạn có nguy cơ nghiêm trọng. Cần tìm kiếm hỗ trợ y tế ngay lập tức từ bác sĩ chuyên khoa hoặc trung tâm tâm lý.",
        details: { depression, anxiety, stress },
      };
    }
  };

  if (isCompleted) {
    const scores = getScores();
    const recommendation = getRecommendation(scores);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-20"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-sky-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-6 relative z-10 h-[calc(100vh-64px)] overflow-y-auto">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-t-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                Đánh giá hoàn tất
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Cảm ơn bạn đã hoàn thành bài đánh giá sức khỏe tinh thần
              </p>
            </CardHeader>

            <CardContent className="p-6 space-y-6">
              {/* Score Display */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-4 shadow-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800">
                      {scores.total}
                    </div>
                    <div className="text-xs text-gray-600">Tổng điểm</div>
                  </div>
                </div>

                <div
                  className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${recommendation.bgColor} ${recommendation.borderColor} border mb-4`}
                >
                  <span className="text-lg">{recommendation.icon}</span>
                  <span
                    className={`text-base font-semibold ${recommendation.color}`}
                  >
                    {recommendation.level}
                  </span>
                </div>

                {/* Detailed DASS-21 Scores */}
                <div className="grid grid-cols-3 gap-4 mb-6 max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="text-blue-600 font-semibold text-sm mb-1">
                      Trầm cảm
                    </div>
                    <div className="text-2xl font-bold text-blue-800">
                      {scores.depression}
                    </div>
                    <div className="text-xs text-blue-600">
                      {recommendation.details.depression.level}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
                    <div className="text-amber-600 font-semibold text-sm mb-1">
                      Lo âu
                    </div>
                    <div className="text-2xl font-bold text-amber-800">
                      {scores.anxiety}
                    </div>
                    <div className="text-xs text-amber-600">
                      {recommendation.details.anxiety.level}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
                    <div className="text-purple-600 font-semibold text-sm mb-1">
                      Stress
                    </div>
                    <div className="text-2xl font-bold text-purple-800">
                      {scores.stress}
                    </div>
                    <div className="text-xs text-purple-600">
                      {recommendation.details.stress.level}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed max-w-2xl mx-auto">
                  {recommendation.message}
                </p>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                  <Heart className="w-5 h-5 text-blue-600 mr-2" />
                  Bước tiếp theo để chăm sóc bản thân
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        Tư vấn chuyên gia
                      </h4>
                      <p className="text-xs text-gray-600">
                        Nói chuyện với chuyên gia tâm lý
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-3 h-3 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        AI Assistant
                      </h4>
                      <p className="text-xs text-gray-600">
                        Hỗ trợ tức thì từ AI
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        Đặt lịch 1:1
                      </h4>
                      <p className="text-xs text-gray-600">
                        Buổi tư vấn riêng với chuyên gia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-3 h-3 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">
                        Cộng đồng hỗ trợ
                      </h4>
                      <p className="text-xs text-gray-600">
                        Kết nối với những người cùng hoàn cảnh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  onClick={() => (window.location.href = "/ai-assistant")}
                  className="h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  Trò chuyện với AI Assistant
                </Button>
                <Button
                  onClick={() => (window.location.href = "/expert")}
                  variant="outline"
                  className="h-12 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Đặt lịch với chuyên gia
                </Button>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  <strong>Lưu ý:</strong> Kết quả này chỉ mang tính chất tham
                  khảo và không thay thế cho chẩn đoán y khoa chuyên nghiệp.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-20"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-sky-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-4 relative z-10 h-[calc(100vh-64px)] flex flex-col">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Heart className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
            Đánh giá sức khỏe tinh thần
          </h1>
          <p className="text-gray-600 text-base">
            Hãy trả lời thành thật để chúng tôi có thể hỗ trợ bạn tốt nhất
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">
              Câu hỏi {currentQuestion + 1} / {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {Math.round(progress)}% hoàn thành
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 shadow-inner">
            <div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-3xl flex-1 flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 leading-relaxed">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <RadioGroup
              value={answers[questions[currentQuestion].id] || ""}
              onValueChange={handleAnswer}
              className="space-y-3 flex-1"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={option.value}
                  className={`group relative flex items-center space-x-3 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                    answers[questions[currentQuestion].id] === option.value
                      ? "border-blue-400 bg-blue-50 shadow-md"
                      : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-25"
                  }`}
                >
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="border-2 border-blue-300 text-blue-600"
                  />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer text-gray-700 font-medium group-hover:text-gray-800 transition-colors"
                  >
                    {option.label}
                  </Label>
                  {answers[questions[currentQuestion].id] === option.value && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </RadioGroup>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
              <Button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex items-center space-x-2 h-10 px-4 border-2 border-gray-200 hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại</span>
              </Button>

              <Button
                onClick={nextQuestion}
                disabled={!answers[questions[currentQuestion].id]}
                className="flex items-center space-x-2 h-10 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <span>
                  {currentQuestion === questions.length - 1
                    ? "Hoàn thành"
                    : "Tiếp theo"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormQuestionnaire;
