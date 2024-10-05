// hooks/useLogin.ts
import { useState } from 'react';
import { loginUser } from '../../../services/auth/signIn.service';

interface UseLoginReturn {
  login: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean | null;
}

export const useLogin = (): UseLoginReturn => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser(email, password);
      if (response.authenticated) {
        setIsAuthenticated(true);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, isAuthenticated };
};
