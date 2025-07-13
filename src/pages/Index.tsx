import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Heart,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

const Index = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t("home.features.aiSupport.title"),
      description: t("home.features.aiSupport.description"),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Heart,
      title: t("home.features.assessment.title"),
      description: t("home.features.assessment.description"),
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: Users,
      title: t("home.features.expert.title"),
      description: t("home.features.expert.description"),
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Shield,
      title: t("home.features.safe.title"),
      description: t("home.features.safe.description"),
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The AI assistant helped me through my anxiety in real-time. It's like having a therapist available whenever I need support.",
      rating: 5,
      role: "Student",
    },
    {
      name: "James L.",
      text: "The assessment questionnaire gave me insights I never had before. It helped me understand my mental health better.",
      rating: 5,
      role: "Professional",
    },
    {
      name: "Maria R.",
      text: "Connecting with an expert through this platform was seamless. The 1:1 sessions have been life-changing.",
      rating: 5,
      role: "Parent",
    },
  ];

  // const stats = [
  //   { number: "10,000+", label: "Người dùng tin tưởng", icon: Users },
  //   { number: "50+", label: "Chuyên gia tâm lý", icon: Brain },
  //   { number: "24/7", label: "Hỗ trợ liên tục", icon: Heart },
  //   { number: "98%", label: "Đánh giá tích cực", icon: Star },
  // ];

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

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                <Sparkles
                  className="w-4 h-4 text-white animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>

            <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              {t("home.hero.title")}
              <span className="block bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                {/* {t("home.hero.subtitle")} */}
              </span>
            </h1>
            <p className="text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {t("home.hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/questionnaire">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {t("home.hero.startAssessment")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/expert">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {t("home.hero.startExpert")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/ai-assistant">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8 py-4 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  {t("home.hero.tryAI")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              {t("home.features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("home.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm group overflow-hidden"
                >
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* New Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Báo Cáo Toàn Diện về Các Thang Đo Trầm Cảm tại Việt Nam: Nội Dung,
              Ứng Dụng và Phân Tích Chuyên Sâu
            </h2>
          </div>
          <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed text-justify">
            <p className="text-justify">
              Trong bối cảnh y tế hiện đại tại Việt Nam, các rối loạn sức khỏe
              tâm thần, đặc biệt là trầm cảm, đang ngày càng nhận được sự quan
              tâm đúng mức từ cả cộng đồng và giới chuyên môn. Trầm cảm không
              chỉ ảnh hưởng sâu sắc đến chất lượng cuộc sống, khả năng làm việc,
              học tập của cá nhân mà còn tạo ra gánh nặng đáng kể cho gia đình
              và xã hội. Việc chẩn đoán sớm, đánh giá chính xác mức độ và theo
              dõi hiệu quả điều trị là những yếu tố then chốt trong quản lý rối
              loạn này. Để đạt được mục tiêu đó, việc sử dụng các công cụ lượng
              giá tâm lý chuẩn hóa, có độ tin cậy và độ giá trị cao là yêu cầu
              bắt buộc.
            </p>
            <p className="text-justify">
              Báo cáo này được biên soạn với mục đích cung cấp một tài liệu tham
              khảo chuyên sâu, tổng hợp và phân tích một cách có hệ thống các
              thang đo trầm cảm đang được ứng dụng rộng rãi tại các cơ sở y tế
              và trong các công trình nghiên cứu tại Việt Nam. Báo cáo sẽ đi sâu
              vào phân tích chi tiết các thang đo phổ biến cho người trưởng
              thành và các thang đo chuyên biệt cho các nhóm đối tượng đặc thù
              như người cao tuổi và thanh thiếu niên. Nội dung phân tích bao gồm
              lịch sử phát triển, mục đích sử dụng, nội dung chi tiết của từng
              thang đo, hướng dẫn chấm điểm và diễn giải kết quả, cũng như đánh
              giá các đặc tính tâm lý học (psychometric properties) dựa trên các
              nghiên cứu thẩm định trong và ngoài nước. Quan trọng hơn, báo cáo
              đặt các công cụ này trong bối cảnh thực tiễn của hệ thống y tế
              Việt Nam, đối chiếu với các hướng dẫn chẩn đoán và điều trị hiện
              hành của Bộ Y tế, nhằm mang lại một cái nhìn toàn diện và hữu ích
              cho các nhà lâm sàng, nhà nghiên cứu và sinh viên các khối ngành
              khoa học sức khỏe.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/*
      <section className="py-20 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 text-white overflow-hidden relative">
            <CardContent className="p-12 relative z-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  {t("home.cta.title")}
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {t("home.cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/questionnaire">
                    <Button className="bg-white text-blue-600 hover:bg-gray-50 text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {t("home.cta.takeAssessment")}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/expert">
                    <Button className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                      <Calendar className="mr-2 w-5 h-5" />
                      {t("home.cta.bookExpert")}
                    </Button>
                  </Link>
                </div>
              </div>
*/}
      {/* Background decoration */}
      {/*
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16"></div>
            </CardContent>
          </Card>
        </div>
      </section>*/}

      {/* Testimonials Section */}
      {/* <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              {t("home.testimonials.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("home.testimonials.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-4 right-4 text-6xl text-blue-100 group-hover:text-blue-200 transition-colors duration-300">
                    "
                  </div>
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Trở thành chuyên gia tư vấn
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Tham gia cùng chúng tôi để mang lại sự hỗ trợ chuyên nghiệp cho
              cộng đồng. Chia sẻ kiến thức và kinh nghiệm của bạn để giúp đỡ
              những người cần được quan tâm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  Tạo tác động tích cực
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Hỗ trợ trực tiếp những người đang gặp khó khăn về sức khỏe tâm
                  thần và tạo ra sự thay đổi tích cực trong cuộc sống của họ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Phát triển chuyên môn
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Mở rộng kỹ năng tư vấn trực tuyến và tiếp cận với nhiều khách
                  hàng đa dạng để nâng cao kinh nghiệm nghề nghiệp.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-sm group overflow-hidden">
              <CardContent className="p-8 text-center relative">
                <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Môi trường an toàn
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Làm việc trong một nền tảng được bảo mật cao với các công cụ
                  hỗ trợ chuyên nghiệp và quy trình rõ ràng.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-8 shadow-2xl text-white mb-8">
              <h3 className="text-2xl font-bold mb-4">Yêu cầu tham gia</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Trình độ chuyên môn
                      </h4>
                      <p className="text-emerald-100">
                        Bằng cấp tâm lý học từ cử nhân trở lên
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Giấy phép hành nghề
                      </h4>
                      <p className="text-emerald-100">
                        Có giấy phép hành nghề hợp lệ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1"></div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">
                        Kinh nghiệm thực tế
                      </h4>
                      <p className="text-emerald-100">
                        Tối thiểu 2 năm kinh nghiệm tư vấn
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-200 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Cam kết chất lượng</h4>
                      <p className="text-emerald-100">
                        Tuân thủ quy tắc đạo đức nghề nghiệp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/expert-register">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg px-12 py-6 h-auto shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 rounded-xl">
                <Users className="mr-3 w-6 h-6" />
                Đăng ký trở thành chuyên gia
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>

            <p className="text-sm text-gray-500 mt-4">
              Quy trình xét duyệt từ 2-3 ngày làm việc
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MindWell
              </span>
            </div>
            <div className="text-gray-300 space-y-4">
              <p className="text-lg mb-6">{t("footer.tagline")}</p>
              <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <p className="text-sm leading-relaxed">
                  {t("footer.disclaimer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
