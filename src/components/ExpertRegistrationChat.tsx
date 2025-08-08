import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

interface ExpertRegistrationChatProps {
  onBack: () => void;
}

const ExpertRegistrationChat: React.FC<ExpertRegistrationChatProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Đăng ký với Trợ lý AI
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Tính năng này đang được phát triển. Vui lòng quay lại sau.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={onBack}>Quay lại</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpertRegistrationChat;