import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Brain,
  User,
  GraduationCap,
  FileText,
  Shield,
  ArrowRight,
  ArrowLeft,
  Upload,
  Check,
  Star,
  Award,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Users,
  Heart,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import { postWithAuth } from "@/lib/api";

interface ExpertFormData {
  // Personal Information
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;

  // Professional Information
  specialty: string;
  subSpecialty: string;
  experience: string;
  education: string;
  currentPosition: string;
  workPlace: string;

  // Credentials & Certifications
  licenseNumber: string;
  certifications: string[];
  languages: string[];

  // Profile & Availability
  bio: string;
  approach: string;
  availability: string[];
  hourlyRate: string;

  // Account Security
  password: string;
  confirmPassword: string;

  // Terms & Conditions
  acceptTerms: boolean;
  acceptPrivacy: boolean;
}

const ExpertRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ExpertFormData>({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    specialty: "",
    subSpecialty: "",
    experience: "",
    education: "",
    currentPosition: "",
    workPlace: "",
    licenseNumber: "",
    certifications: [],
    languages: [],
    bio: "",
    approach: "",
    availability: [],
    hourlyRate: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptPrivacy: false,
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: File }>(
    {}
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { register, isLoading, error } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const specialties = [
    "Tâm lý học lâm sàng",
    "Tâm lý học tư vấn",
    "Tâm lý học trẻ em",
    "Tâm lý học gia đình",
    "Tâm lý học nghề nghiệp",
    "Tâm lý học giáo dục",
    "Tâm lý học phát triển",
    "Tâm lý học xã hội",
    "Tâm lý học y tế",
    "Tâm lý học thể thao",
  ];

  const cities = [
    "Hà Nội",
    "TP. Hồ Chí Minh",
    "Đà Nẵng",
    "Hải Phòng",
    "Cần Thơ",
    "An Giang",
    "Bà Rịa - Vũng Tàu",
    "Bắc Giang",
    "Bắc Kạn",
    "Bạc Liêu",
    "Bắc Ninh",
    "Bến Tre",
    "Bình Định",
    "Bình Dương",
    "Bình Phước",
    "Bình Thuận",
    "Cà Mau",
    "Cao Bằng",
    "Đắk Lắk",
    "Đắk Nông",
    "Điện Biên",
    "Đồng Nai",
    "Đồng Tháp",
    "Gia Lai",
    "Hà Giang",
    "Hà Nam",
    "Hà Tĩnh",
    "Hải Dương",
    "Hậu Giang",
    "Hòa Bình",
    "Hưng Yên",
    "Khánh Hòa",
    "Kiên Giang",
    "Kon Tum",
    "Lai Châu",
    "Lâm Đồng",
    "Lạng Sơn",
    "Lào Cai",
    "Long An",
    "Nam Định",
    "Nghệ An",
    "Ninh Bình",
    "Ninh Thuận",
    "Phú Thọ",
    "Phú Yên",
    "Quảng Bình",
    "Quảng Nam",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sóc Trăng",
    "Sơn La",
    "Tây Ninh",
    "Thái Bình",
    "Thái Nguyên",
    "Thanh Hóa",
    "Thừa Thiên Huế",
    "Tiền Giang",
    "Trà Vinh",
    "Tuyên Quang",
    "Vĩnh Long",
    "Vĩnh Phúc",
    "Yên Bái",
  ];

  const languages = [
    "Tiếng Việt",
    "English",
    "Français",
    "Deutsch",
    "Español",
    "中文",
    "日本語",
    "한국어",
    "Русский",
    "العربية",
  ];

  const availabilityOptions = [
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
    "Chủ nhật",
  ];

  const handleInputChange = (
    field: keyof ExpertFormData,
    value: string | boolean | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleFileUpload = (field: string, file: File) => {
    setUploadedFiles((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    switch (step) {
      case 1:
        if (!formData.fullName.trim())
          newErrors.fullName = "Vui lòng nhập họ tên";
        if (!formData.email.trim()) newErrors.email = "Vui lòng nhập email";
        if (!formData.phone.trim())
          newErrors.phone = "Vui lòng nhập số điện thoại";
        if (!formData.dateOfBirth)
          newErrors.dateOfBirth = "Vui lòng chọn ngày sinh";
        if (!formData.gender) newErrors.gender = "Vui lòng chọn giới tính";
        if (!formData.city) newErrors.city = "Vui lòng chọn thành phố";
        break;

      case 2:
        if (!formData.specialty)
          newErrors.specialty = "Vui lòng chọn chuyên khoa";
        if (!formData.experience)
          newErrors.experience = "Vui lòng nhập số năm kinh nghiệm";
        if (!formData.education.trim())
          newErrors.education = "Vui lòng nhập trình độ học vấn";
        if (!formData.licenseNumber.trim())
          newErrors.licenseNumber = "Vui lòng nhập số giấy phép hành nghề";
        break;

      case 3:
        if (!formData.bio.trim())
          newErrors.bio = "Vui lòng nhập giới thiệu bản thân";
        if (formData.bio.length < 100)
          newErrors.bio = "Giới thiệu phải có ít nhất 100 ký tự";
        if (!formData.approach.trim())
          newErrors.approach = "Vui lòng mô tả phương pháp tư vấn";
        if (formData.languages.length === 0)
          newErrors.languages = "Vui lòng chọn ít nhất một ngôn ngữ";
        if (formData.availability.length === 0)
          newErrors.availability = "Vui lòng chọn thời gian có thể tư vấn";
        break;

      case 4:
        if (!formData.password) newErrors.password = "Vui lòng nhập mật khẩu";
        if (formData.password.length < 8)
          newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";
        if (formData.password !== formData.confirmPassword)
          newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
        if (!formData.acceptTerms)
          newErrors.acceptTerms = "Vui lòng đồng ý với điều khoản sử dụng";
        if (!formData.acceptPrivacy)
          newErrors.acceptPrivacy = "Vui lòng đồng ý với chính sách bảo mật";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    try {
      const response = await postWithAuth("/expert/apply", formData);

      toast({
        title: "Đăng ký thành công!",
        description:
          "Chào mừng bạn đến với MindWell. Hồ sơ của bạn đang được xem xét.",
      });

      navigate("/expert-profile");
    } catch (err) {
      toast({
        title: "Đăng ký thất bại",
        description: error || "Đã xảy ra lỗi. Vui lòng thử lại.",
        variant: "destructive",
      });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thông tin cá nhân
              </h3>
              <p className="text-gray-600">
                Vui lòng cung cấp thông tin cá nhân của bạn
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Họ và tên *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  placeholder="Nguyễn Văn A"
                  className={errors.fullName ? "border-red-500" : ""}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="example@email.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="0123456789"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Ngày sinh *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    handleInputChange("dateOfBirth", e.target.value)
                  }
                  className={errors.dateOfBirth ? "border-red-500" : ""}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Giới tính *</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => handleInputChange("gender", value)}
                >
                  <SelectTrigger
                    className={errors.gender ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Chọn giới tính" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Nam</SelectItem>
                    <SelectItem value="female">Nữ</SelectItem>
                    <SelectItem value="other">Khác</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-red-500 text-sm">{errors.gender}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Thành phố *</Label>
                <Select
                  value={formData.city}
                  onValueChange={(value) => handleInputChange("city", value)}
                >
                  <SelectTrigger
                    className={errors.city ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Chọn thành phố" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Địa chỉ cụ thể</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Số nhà, tên đường, phường/xã..."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thông tin chuyên môn
              </h3>
              <p className="text-gray-600">
                Cung cấp thông tin về trình độ và kinh nghiệm nghề nghiệp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="specialty">Chuyên khoa *</Label>
                <Select
                  value={formData.specialty}
                  onValueChange={(value) =>
                    handleInputChange("specialty", value)
                  }
                >
                  <SelectTrigger
                    className={errors.specialty ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Chọn chuyên khoa" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.specialty && (
                  <p className="text-red-500 text-sm">{errors.specialty}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subSpecialty">Chuyên khoa phụ</Label>
                <Input
                  id="subSpecialty"
                  value={formData.subSpecialty}
                  onChange={(e) =>
                    handleInputChange("subSpecialty", e.target.value)
                  }
                  placeholder="Ví dụ: Rối loạn lo âu, Trầm cảm..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Số năm kinh nghiệm *</Label>
                <Input
                  id="experience"
                  type="number"
                  value={formData.experience}
                  onChange={(e) =>
                    handleInputChange("experience", e.target.value)
                  }
                  placeholder="5"
                  min="0"
                  max="50"
                  className={errors.experience ? "border-red-500" : ""}
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm">{errors.experience}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber">Số giấy phép hành nghề *</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) =>
                    handleInputChange("licenseNumber", e.target.value)
                  }
                  placeholder="GP-12345"
                  className={errors.licenseNumber ? "border-red-500" : ""}
                />
                {errors.licenseNumber && (
                  <p className="text-red-500 text-sm">{errors.licenseNumber}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">Trình độ học vấn *</Label>
              <Textarea
                id="education"
                value={formData.education}
                onChange={(e) => handleInputChange("education", e.target.value)}
                placeholder="Ví dụ: Thạc sĩ Tâm lý học - Đại học Quốc gia Hà Nội (2015-2017)..."
                rows={3}
                className={errors.education ? "border-red-500" : ""}
              />
              {errors.education && (
                <p className="text-red-500 text-sm">{errors.education}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentPosition">Vị trí hiện tại</Label>
                <Input
                  id="currentPosition"
                  value={formData.currentPosition}
                  onChange={(e) =>
                    handleInputChange("currentPosition", e.target.value)
                  }
                  placeholder="Ví dụ: Trưởng khoa Tâm lý"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="workPlace">Nơi làm việc</Label>
                <Input
                  id="workPlace"
                  value={formData.workPlace}
                  onChange={(e) =>
                    handleInputChange("workPlace", e.target.value)
                  }
                  placeholder="Ví dụ: Bệnh viện Tâm thần Trung ương"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Tải lên tài liệu chứng minh</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">
                    Bằng cấp/Chứng chỉ
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      e.target.files?.[0] &&
                      handleFileUpload("certificate", e.target.files[0])
                    }
                    className="hidden"
                    id="certificate-upload"
                  />
                  <label
                    htmlFor="certificate-upload"
                    className="cursor-pointer"
                  >
                    <Button variant="outline" size="sm" type="button">
                      Chọn file
                    </Button>
                  </label>
                  {uploadedFiles.certificate && (
                    <p className="text-xs text-green-600 mt-2">
                      ✓ {uploadedFiles.certificate.name}
                    </p>
                  )}
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">
                    Giấy phép hành nghề
                  </p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      e.target.files?.[0] &&
                      handleFileUpload("license", e.target.files[0])
                    }
                    className="hidden"
                    id="license-upload"
                  />
                  <label htmlFor="license-upload" className="cursor-pointer">
                    <Button variant="outline" size="sm" type="button">
                      Chọn file
                    </Button>
                  </label>
                  {uploadedFiles.license && (
                    <p className="text-xs text-green-600 mt-2">
                      ✓ {uploadedFiles.license.name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <FileText className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hồ sơ chuyên gia
              </h3>
              <p className="text-gray-600">
                Tạo hồ sơ để khách hàng có thể hiểu về bạn
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bio">
                  Giới thiệu bản thân * (tối thiểu 100 ký tự)
                </Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  placeholder="Hãy chia sẻ về bản thân, kinh nghiệm, và cam kết của bạn trong việc hỗ trợ khách hàng..."
                  rows={4}
                  className={errors.bio ? "border-red-500" : ""}
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{formData.bio.length}/100 ký tự</span>
                  {errors.bio && (
                    <span className="text-red-500">{errors.bio}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="approach">Phương pháp tư vấn *</Label>
                <Textarea
                  id="approach"
                  value={formData.approach}
                  onChange={(e) =>
                    handleInputChange("approach", e.target.value)
                  }
                  placeholder="Mô tả phương pháp, kỹ thuật tư vấn mà bạn sử dụng..."
                  rows={3}
                  className={errors.approach ? "border-red-500" : ""}
                />
                {errors.approach && (
                  <p className="text-red-500 text-sm">{errors.approach}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Ngôn ngữ sử dụng *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <div key={lang} className="flex items-center space-x-2">
                      <Checkbox
                        id={`lang-${lang}`}
                        checked={formData.languages.includes(lang)}
                        onCheckedChange={(checked) => {
                          const newLanguages = checked
                            ? [...formData.languages, lang]
                            : formData.languages.filter((l) => l !== lang);
                          handleInputChange("languages", newLanguages);
                        }}
                      />
                      <Label htmlFor={`lang-${lang}`} className="text-sm">
                        {lang}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.languages && (
                  <p className="text-red-500 text-sm">{errors.languages}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Thời gian có thể tư vấn *</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {availabilityOptions.map((day) => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox
                        id={`day-${day}`}
                        checked={formData.availability.includes(day)}
                        onCheckedChange={(checked) => {
                          const newAvailability = checked
                            ? [...formData.availability, day]
                            : formData.availability.filter((d) => d !== day);
                          handleInputChange("availability", newAvailability);
                        }}
                      />
                      <Label htmlFor={`day-${day}`} className="text-sm">
                        {day}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.availability && (
                  <p className="text-red-500 text-sm">{errors.availability}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourlyRate">Mức phí tư vấn (VNĐ/giờ)</Label>
                <Input
                  id="hourlyRate"
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) =>
                    handleInputChange("hourlyRate", e.target.value)
                  }
                  placeholder="500000"
                  min="0"
                />
                <p className="text-sm text-gray-500">
                  Để trống nếu chưa xác định
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bảo mật tài khoản
              </h3>
              <p className="text-gray-600">
                Tạo mật khẩu và xác nhận điều khoản
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Mật khẩu *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  placeholder="Tối thiểu 8 ký tự"
                  className={errors.password ? "border-red-500" : ""}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Xác nhận mật khẩu *</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  placeholder="Nhập lại mật khẩu"
                  className={errors.confirmPassword ? "border-red-500" : ""}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) =>
                      handleInputChange("acceptTerms", checked as boolean)
                    }
                  />
                  <div className="text-sm">
                    <Label htmlFor="acceptTerms" className="cursor-pointer">
                      Tôi đồng ý với{" "}
                      <Link
                        to="/terms"
                        className="text-blue-600 hover:underline"
                      >
                        Điều khoản sử dụng
                      </Link>{" "}
                      của MindWell *
                    </Label>
                    {errors.acceptTerms && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.acceptTerms}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="acceptPrivacy"
                    checked={formData.acceptPrivacy}
                    onCheckedChange={(checked) =>
                      handleInputChange("acceptPrivacy", checked as boolean)
                    }
                  />
                  <div className="text-sm">
                    <Label htmlFor="acceptPrivacy" className="cursor-pointer">
                      Tôi đồng ý với{" "}
                      <Link
                        to="/privacy"
                        className="text-blue-600 hover:underline"
                      >
                        Chính sách bảo mật
                      </Link>{" "}
                      của MindWell *
                    </Label>
                    {errors.acceptPrivacy && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.acceptPrivacy}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <p className="font-medium mb-1">Cam kết bảo mật</p>
                    <p>
                      Thông tin của bạn sẽ được bảo mật tuyệt đối và chỉ được sử
                      dụng để xác minh tư cách chuyên gia và cung cấp dịch vụ tư
                      vấn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 relative overflow-hidden">
      <Navbar />

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

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 pt-20">
        <Card className="w-full max-w-4xl shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              Đăng ký chuyên gia tư vấn
            </CardTitle>
            <CardDescription className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tham gia cùng chúng tôi để hỗ trợ cộng đồng trong việc chăm sóc
              sức khỏe tâm thần
            </CardDescription>

            {/* Progress Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex justify-between text-sm font-medium text-gray-600 mb-2">
                <span>
                  Bước {currentStep} / {totalSteps}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Thông tin cá nhân</span>
                <span>Chuyên môn</span>
                <span>Hồ sơ</span>
                <span>Hoàn thành</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <form onSubmit={(e) => e.preventDefault()}>
              {renderStep()}

              <div className="flex justify-between mt-8 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay lại</span>
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                  >
                    <span>Tiếp tục</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Đang xử lý...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Hoàn thành đăng ký</span>
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Đã có tài khoản?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Đăng nhập ngay
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExpertRegister;
