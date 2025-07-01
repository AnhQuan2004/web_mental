import { useState, useEffect } from "react";
import { getWithAuth } from "@/lib/api";

interface TestResult {
  _id: string;
  completedAt: string;
  domainTitle: string;
  recommendation: {
    level: string;
    message: string;
  };
  scores: {
    anxiety: number;
    depression: number;
    stress: number;
    total: number;
  };
}

export const useTestResults = (email: string | null) => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!email) {
        setIsLoading(false);
        return;
      }

      try {
        const data = await getWithAuth(`/quiz/results/${email}`);
        setResults(data);
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

    fetchResults();
  }, [email]);

  return { results, isLoading, error };
};
