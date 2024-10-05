// services/authService.ts
import axios from 'axios';
import axiosInstance from '../axiosInstance';

export interface AuthResponse {
  authenticated: boolean;
}

interface LoginResponse {
  isAuthenticated: boolean;
}

export const loginUser = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      '/admin/login',
      {
        email,
        password,
      },
      { withCredentials: true },
    );
    if (response.data.isAuthenticated === false) {
      throw new Error('Login failed');
    }
    // Devuelve toda la respuesta, para manejar tanto el token como los demás datos
    return response.data;
  } catch (error) {
    throw new Error('Failed to log in');
  }
};

export const checkAuth = async (): Promise<LoginResponse> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/admin/authcheck`,
      {
        withCredentials: true,
      },
    );
    if (response.data.authenticated === false) {
      throw new Error('Login failed');
    }
    // Devuelve toda la respuesta, para manejar tanto el token como los demás datos
    return response.data;
  } catch (error) {
    throw new Error('Failed to log in');
  }
};

// CERRAR SESION DESDE EL BACKEND
export const logoutUser = async () => {
  try {
    await axiosInstance.post('/admin/logout', {}, { withCredentials: true });
  } catch (error) {
    throw new Error('Failed to log out');
  }
};
