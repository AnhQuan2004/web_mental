import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Calendar,
  MessageCircle,
  Award,
  BookOpen,
  Users,
  Clock,
  Heart,
  Brain,
  Shield,
  Sparkles,
} from "lucide-react";

const ExpertProfile = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Clinical Psychology",
      rating: 4.9,
      experience: "15 years",
      sessions: 1200,
      languages: ["English", "Spanish"],
      image: "/placeholder.svg",
      isOnline: true,
      responseTime: "~2 hours",
      specialty: "Anxiety & Depression",
      education: "PhD Psychology, Harvard",
      approach: "Cognitive Behavioral Therapy",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialization: "Cognitive Behavioral Therapy",
      rating: 4.8,
      experience: "12 years",
      sessions: 950,
      languages: ["English", "Mandarin"],
      image: "/placeholder.svg",
      isOnline: true,
      responseTime: "~1 hour",
      specialty: "Career & Stress Management",
      education: "PhD Clinical Psychology, Stanford",
      approach: "Solution-Focused Therapy",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialization: "Family Therapy",
      rating: 4.9,
      experience: "18 years",
      sessions: 1500,
      languages: ["English", "Spanish", "Portuguese"],
      image: "/placeholder.svg",
      isOnline: false,
      responseTime: "~4 hours",
      specialty: "Relationship & Family Issues",
      education: "PhD Family Therapy, UCLA",
      approach: "Systemic Family Therapy",
    },
  ];

  const stats = [
    {
      icon: Users,
      label: "50+ Chuyên gia",
      value: "50+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      label: "Đánh giá trung bình",
      value: "4.9",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: MessageCircle,
      label: "Phiên tư vấn",
      value: "10,000+",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      label: "Bảo mật tuyệt đối",
      value: "100%",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-48 h-48 bg-cyan-200 rounded-full blur-2xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-sky-200 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
              <Sparkles
                className="w-4 h-4 text-white animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            {language === "vi" ? "Hồ Sơ Chuyên Gia" : "Expert Profiles"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "vi"
              ? "Gặp gỡ các chuyên gia tâm lý có kinh nghiệm của chúng tôi, sẵn sàng hỗ trợ bạn trên hành trình sức khỏe tinh thần."
              : "Meet our experienced mental health professionals, ready to support you on your wellness journey."}
          </p>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert) => (
            <Card
              key={expert.id}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm group overflow-hidden"
            >
              <CardHeader className="text-center pb-4 bg-gradient-to-r from-blue-50 to-cyan-50 relative">
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={expert.isOnline ? "default" : "secondary"}
                    className={`${
                      expert.isOnline
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                        : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-1 ${
                        expert.isOnline ? "bg-emerald-500" : "bg-amber-500"
                      }`}
                    ></div>
                    {expert.isOnline ? "Online" : "Offline"}
                  </Badge>
                </div>

                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {expert.name}
                </CardTitle>
                <CardDescription className="text-blue-600 font-semibold text-base">
                  {expert.specialization}
                </CardDescription>
                <p className="text-sm text-gray-600 mt-1">{expert.specialty}</p>
              </CardHeader>

              <CardContent className="p-6 space-y-4">
                {/* Rating and Experience */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    <span className="font-bold text-lg">{expert.rating}</span>
                    <span className="text-sm text-gray-600">
                      (500+ reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {expert.experience}
                    </span>
                  </div>
                </div>

                {/* Sessions and Response Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3 text-center">
                    <MessageCircle className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm font-bold text-gray-800">
                      {expert.sessions}
                    </div>
                    <div className="text-xs text-gray-600">Sessions</div>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-3 text-center">
                    <Clock className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                    <div className="text-sm font-bold text-gray-800">
                      {expert.responseTime}
                    </div>
                    <div className="text-xs text-gray-600">Response</div>
                  </div>
                </div>

                {/* Education & Approach */}
                <div className="space-y-3">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-gray-700">
                        Education
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{expert.education}</p>
                  </div>

                  <div className="bg-cyan-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <Heart className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm font-semibold text-gray-700">
                        Approach
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">{expert.approach}</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-semibold text-gray-700">
                      Languages:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {expert.languages.map((lang) => (
                      <Badge
                        key={lang}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Book Appointment Button */}
                <Button className="w-full mt-6 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  {language === "vi" ? "Đặt Lịch Hẹn" : "Book Appointment"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white overflow-hidden relative">
            <CardContent className="p-12 text-center relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white animate-pulse" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {language === "vi"
                  ? "Không tìm thấy chuyên gia phù hợp?"
                  : "Can't find the right expert?"}
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {language === "vi"
                  ? "Hãy để chúng tôi giúp bạn kết nối với chuyên gia phù hợp nhất cho nhu cầu của bạn."
                  : "Let us help you connect with the most suitable expert for your specific needs."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  {language === "vi" ? "Tư vấn miễn phí" : "Free Consultation"}
                </Button>
                <Button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  {language === "vi" ? "Liên hệ hỗ trợ" : "Contact Support"}
                </Button>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;
