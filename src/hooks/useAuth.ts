import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = "http://13.229.93.67:3000/api";

interface LoginData {
  email?: string;
  password?: string;
}

interface RegisterData extends LoginData {
  fullName?: string;
  confirmPassword?: string;
}

export const useAuth = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (data: LoginData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      // Assuming the API returns a token
      localStorage.setItem('token', result.token);

      // Determine and store user role
      const role = data.email?.endsWith('@expert.com') ? 'expert' : 'user';
      localStorage.setItem('role', role);

      navigate('/'); // Redirect to home page after login
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
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

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
