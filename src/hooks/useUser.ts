import { useState, useEffect } from "react";
import { getWithAuth } from "@/lib/api";

interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  avatar: string;
}

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const email = localStorage.getItem("email");
      if (!email) {
        setIsLoading(false);
        return;
      }

      try {
        const result = await getWithAuth(`/profile/${email}`);
        setUser(result.user);
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

    fetchUser();
  }, []);

  return { user, isLoading, error };
};
