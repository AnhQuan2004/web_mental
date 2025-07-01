import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, User, LogOut } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useUser } from "@/hooks/useUser";
import { useTestResults } from "@/hooks/useTestResults";
import { Skeleton } from "@/components/ui/skeleton";

const UserProfile = () => {
  const { user, isLoading: isUserLoading, error: userError } = useUser();
  const {
    results,
    isLoading: isResultsLoading,
    error: resultsError,
  } = useTestResults(user?.email || null);

  const handleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
  };

  if (isUserLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <Navbar />
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b">
              <div className="flex items-center space-x-6">
                <Skeleton className="h-24 w-24 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (userError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <Navbar />
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Error</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-500">{userError}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
        <Navbar />
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>No User Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Please log in to view your profile.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <Card className="overflow-hidden shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b">
            <div className="flex items-center space-x-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                <AvatarImage src={user.avatar} alt={user.fullName} />
                <AvatarFallback>{user.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {user.fullName}
                </h1>
                <p className="text-gray-600">Patient</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Thông tin cá nhân
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <User className="w-5 h-5 text-gray-500 mr-4" />
                  <span className="text-gray-800">{user.fullName}</span>
                </div>
                <Separator />
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-500 mr-4" />
                  <span className="text-gray-800">{user.email}</span>
                </div>
                <Separator />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Lịch sử làm bài test
              </h2>
              {isResultsLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-24 w-full" />
                </div>
              ) : resultsError ? (
                <p className="text-red-500">{resultsError}</p>
              ) : results.length > 0 ? (
                <div className="space-y-4">
                  {results.map((result) => (
                    <div
                      key={result._id}
                      className="p-4 border rounded-lg bg-gray-50"
                    >
                      <p className="font-semibold">{result.domainTitle}</p>
                      <p className="text-sm text-gray-500">
                        Ngày làm:{" "}
                        {new Date(result.completedAt).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-700">
                        Kết quả: {result.recommendation.level}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Không có lịch sử làm bài test.</p>
              )}
            </div>

            <div className="flex justify-end pt-4">
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Đăng xuất</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
