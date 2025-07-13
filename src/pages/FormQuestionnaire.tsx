import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Heart,
  Brain,
  Users,
  Calendar,
  Clock,
  Target,
  FileText,
  Info,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { postWithAuth } from "@/lib/api";
import {
  questionDomains,
  getQuestionsForDomain,
  type Question,
  type QuestionDomain,
} from "@/data/questions";
import { useUser } from "@/hooks/useUser";
import ScaleDetails from "@/components/ScaleDetails";

const FormQuestionnaire = () => {
  const { user } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [showDomainSelection, setShowDomainSelection] = useState(true);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [selectedDomainInfo, setSelectedDomainInfo] = useState<string | null>(
    null
  );
  const navigate = useNavigate();

  // Thông tin chi tiết của từng thang đo
  const domainDetails = {
    bdi: {
      title: "Thang Đo Trầm Cảm Beck (BDI - Beck Depression Inventory)",
      content:
        "Thang Đo Trầm Cảm Beck là một trong những công cụ tự đánh giá phổ biến và được công nhận rộng rãi nhất để đo lường mức độ trầm cảm. Được phát triển bởi nhà tâm thần học Aaron T. Beck vào năm 1961, BDI dựa trên lý thuyết nhận thức về trầm cảm, cho rằng những suy nghĩ tiêu cực về bản thân, thế giới và tương lai là cốt lõi của rối loạn này.",
    },
    dass21: {
      title:
        "Thang Đo Trầm Cảm - Lo Âu - Stress (DASS-21 - Depression, Anxiety and Stress Scales)",
      content:
        "DASS-21 là phiên bản rút gọn của thang đo DASS-42, được phát triển bởi các nhà nghiên cứu tại Đại học New South Wales, Úc. Điểm đặc biệt của DASS-21 là khả năng phân biệt giữa ba trạng thái cảm xúc tiêu cực thường đi kèm với nhau: Trầm cảm, Lo âu và Stress.",
    },
    phq9: {
      title:
        "Bộ Câu Hỏi Sức Khỏe Bệnh Nhân (PHQ-9 - Patient Health Questionnaire-9)",
      content:
        "PHQ-9 là một công cụ sàng lọc trầm cảm ngắn gọn và hiệu quả, được phát triển dựa trên các tiêu chuẩn chẩn đoán rối loạn trầm cảm chủ yếu của Cẩm nang Chẩn đoán và Thống kê các Rối loạn Tâm thần (DSM-IV). Nó được sử dụng rộng rãi trong các cơ sở chăm sóc sức khỏe ban đầu.",
    },
    sds: {
      title:
        "Thang Tự Đánh Giá Trầm Cảm Zung (SDS - Zung Self-Rating Depression Scale)",
      content:
        "Được phát triển bởi William W.K. Zung vào năm 1965, SDS là một thang đo tự báo cáo ngắn gọn được thiết kế để định lượng mức độ trầm cảm của bệnh nhân đã được chẩn đoán.",
    },
    hamd: {
      title:
        "Thang Đánh Giá Trầm Cảm Hamilton (HAM-D hoặc HDRS - Hamilton Depression Rating Scale)",
      content:
        'Khác với bốn thang đo trên, HAM-D không phải là thang tự đánh giá. Đây là một công cụ được thực hiện bởi bác sĩ lâm sàng hoặc nhà nghiên cứu đã qua đào tạo để đánh giá mức độ trầm cảm của bệnh nhân thông qua một cuộc phỏng vấn có cấu trúc. Được Max Hamilton công bố vào năm 1960, đây được coi là "tiêu chuẩn vàng" trong các thử nghiệm lâm sàng về thuốc chống trầm cảm.',
    },
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleDomainSelect = (domainId: string) => {
    setSelectedDomain(domainId);
    setShowDomainSelection(false);
    // Reset questionnaire state when domain changes
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const backToDomainSelection = () => {
    setShowDomainSelection(true);
    setSelectedDomain(null);
    setCurrentQuestion(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const handleShowInfo = (domainId: string) => {
    setSelectedDomainInfo(domainId);
    setShowInfoModal(true);
  };

  const handleCloseModal = () => {
    setShowInfoModal(false);
    setSelectedDomainInfo(null);
  };

  // Domain Selection Screen
  if (showDomainSelection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200 rounded-full blur-2xl opacity-20"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-sky-200 rounded-full blur-3xl opacity-20"></div>
        </div>

        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              Chọn loại bài test phù hợp
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hãy chọn bài test phù hợp với tình trạng và nhu cầu của bạn để có
              được kết quả đánh giá chính xác nhất
            </p>
          </div>

          {/* Domain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {questionDomains.map((domain) => (
              <Card
                key={domain.id}
                className="shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
              >
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Header with badge */}
                  <div className="relative">
                    <div
                      className={`bg-gradient-to-r ${domain.bgGradient} p-6 rounded-t-lg`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {domain.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {domain.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6 flex-1">
                      <div className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gray-800 rounded-full mr-3"></div>
                        <span className="font-medium text-gray-700">
                          Câu hỏi:
                        </span>
                        <span className="text-gray-600 ml-1">
                          {domain.questionCount} câu hỏi.
                        </span>
                      </div>
                      <div className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-gray-700">
                            Đối tượng:
                          </span>
                          <span className="text-gray-600 ml-1">
                            {domain.targetAudience}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-gray-800 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-medium text-gray-700">
                            Mục đích:
                          </span>
                          <span className="text-gray-600 ml-1">
                            {domain.purpose}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Learn More Link */}
                    <div className="mb-4">
                      <button
                        onClick={() => handleShowInfo(domain.id)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1 transition-colors duration-200"
                      >
                        <Info className="w-4 h-4" />
                        <span>Tìm hiểu thêm</span>
                      </button>
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => handleDomainSelect(domain.id)}
                      className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
                    >
                      Làm bài test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-600 mr-2" />
                Lưu ý khi làm bài test
              </h3>
              <p className="text-gray-600 text-sm max-w-4xl mx-auto">
                Hãy trả lời thành thật và dựa trên cảm nhận của bạn trong{" "}
                <strong>2 tuần gần đây</strong>. Kết quả sẽ giúp chúng tôi đưa
                ra những gợi ý và hỗ trợ phù hợp nhất cho tình trạng của bạn.
              </p>
            </div>
          </div>

          {/* Info Modal */}
          {showInfoModal && selectedDomainInfo && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-800">
                      Giới thiệu
                    </h2>
                    <button
                      onClick={handleCloseModal}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-600 mb-4">
                    {
                      domainDetails[
                        selectedDomainInfo as keyof typeof domainDetails
                      ]?.title
                    }
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {
                      domainDetails[
                        selectedDomainInfo as keyof typeof domainDetails
                      ]?.content
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Get current domain questions based on selected domain
  const currentDomainQuestions = selectedDomain
    ? getQuestionsForDomain(selectedDomain)
    : [];

  const progress =
    ((currentQuestion + 1) / currentDomainQuestions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({
      ...answers,
      [currentDomainQuestions[currentQuestion].id]: value,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < currentDomainQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
      saveTestResult();
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

  const saveTestResult = async () => {
    if (!user) return;

    const scores = getScores();
    const recommendation = getRecommendation(scores);
    const selectedDomainInfo = questionDomains.find(
      (d) => d.id === selectedDomain
    );

    const testResult = {
      email: user.email,
      domainId: selectedDomain,
      domainTitle: selectedDomainInfo?.title,
      depression: scores.depression,
      anxiety: scores.anxiety,
      stress: scores.stress,
      total: scores.total,
      level: recommendation.level,
      message: recommendation.message,
    };

    try {
      await postWithAuth("/quiz/result", testResult);
      console.log("Test result saved successfully");
    } catch (error) {
      console.error("Failed to save test result:", error);
    }
  };

  if (isCompleted) {
    const scores = getScores();
    const recommendation = getRecommendation(scores);
    const selectedDomainInfo = questionDomains.find(
      (d) => d.id === selectedDomain
    );

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
                Cảm ơn bạn đã hoàn thành {selectedDomainInfo?.title}
              </p>
            </CardHeader>

            <CardContent className="p-6 grid md:grid-cols-2 gap-6">
              {/* Score Display */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white drop-shadow-lg">
                      {scores.total}
                    </div>
                    <div className="text-sm font-semibold text-blue-100">
                      Tổng điểm
                    </div>
                  </div>
                </div>

                <div
                  className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full ${recommendation.bgColor} ${recommendation.borderColor} border-2 mb-4 shadow-lg`}
                >
                  <span className="text-2xl">{recommendation.icon}</span>
                  <span className={`text-lg font-bold ${recommendation.color}`}>
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
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="text-blue-600 font-semibold text-sm mb-1">
                      Lo âu
                    </div>
                    <div className="text-2xl font-bold text-blue-800">
                      {scores.anxiety}
                    </div>
                    <div className="text-xs text-blue-600">
                      {recommendation.details.anxiety.level}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                    <div className="text-blue-600 font-semibold text-sm mb-1">
                      Stress
                    </div>
                    <div className="text-2xl font-bold text-blue-800">
                      {scores.stress}
                    </div>
                    <div className="text-xs text-blue-600">
                      {recommendation.details.stress.level}
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-base leading-relaxed max-w-2xl mx-auto">
                  {recommendation.message}
                </p>
              </div>

              <ScaleDetails domainId={selectedDomain} />

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:col-span-2">
                <Button
                  onClick={backToDomainSelection}
                  variant="outline"
                  className="h-12 border-2 border-gray-200 text-gray-600 hover:bg-gray-50 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Làm bài test khác
                </Button>
                <Button
                  onClick={() => (window.location.href = "/ai-assistant")}
                  className="h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  Trò chuyện với AI
                </Button>
                <Button
                  onClick={() => (window.location.href = "/expert")}
                  variant="outline"
                  className="h-12 border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Chat cùng chuyên gia
                </Button>
              </div>

              {/* Disclaimer */}
              <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 md:col-span-2">
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
          <div className="flex items-center justify-center mb-4">
            <Button
              onClick={backToDomainSelection}
              variant="ghost"
              className="mr-4 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Chọn bài test khác
            </Button>
            <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-1">
            {questionDomains.find((d) => d.id === selectedDomain)?.title ||
              "Đánh giá sức khỏe tinh thần"}
          </h1>
          <p className="text-gray-600 text-base">
            Hãy trả lời thành thật để chúng tôi có thể hỗ trợ bạn tốt nhất
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">
              Câu hỏi {currentQuestion + 1} / {currentDomainQuestions.length}
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
                {currentDomainQuestions[currentQuestion].question}
              </h2>
            </div>

            <RadioGroup
              value={answers[currentDomainQuestions[currentQuestion].id] || ""}
              onValueChange={handleAnswer}
              className="space-y-3 flex-1"
            >
              {currentDomainQuestions[currentQuestion].options.map(
                (option, index) => (
                  <div
                    key={option.value}
                    className={`group relative flex items-center space-x-3 p-3 rounded-xl border-2 transition-all duration-200 cursor-pointer hover:shadow-md ${
                      answers[currentDomainQuestions[currentQuestion].id] ===
                      option.value
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
                    {answers[currentDomainQuestions[currentQuestion].id] ===
                      option.value && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                )
              )}
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
                disabled={!answers[currentDomainQuestions[currentQuestion].id]}
                className="flex items-center space-x-2 h-10 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <span>
                  {currentQuestion === currentDomainQuestions.length - 1
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
