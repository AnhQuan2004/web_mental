import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postWithAuth } from "@/lib/api";

interface LoginData {
  email?: string;
  password?: string;
}

interface RegisterData extends LoginData {
  fullName?: string;
  confirmPassword?: string;
  role?: string;
}

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data: LoginData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await postWithAuth("/login", data);

      // Assuming the API returns a token
      localStorage.setItem("token", result.token);
      if (data.email) {
        localStorage.setItem("email", data.email);
      }

      // Determine and store user role
      const role = data.email?.endsWith("@expert.com") ? "expert" : "user";
      localStorage.setItem("role", role);

      navigate("/"); // Redirect to home page after login
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    setError(null);
    try {
      await postWithAuth("/register", data);

      // Automatically log in after successful registration
      await login({ email: data.email, password: data.password });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, register, isLoading, error };
};
