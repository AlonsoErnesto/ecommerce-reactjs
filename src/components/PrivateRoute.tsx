import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from '../services/auth/signIn.service';

const PrivateRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga

  useEffect(() => {
    checkAuth()
      .then((data) => {
        setIsAuthenticated(data.isAuthenticated as boolean);
      })
      .catch((error) => {
        console.error('Error durante la verificación de autenticación:', error);
        setIsAuthenticated(false); // Asegúrate de que isAuthenticated se establezca en false si hay un error
      })
      .finally(() => {
        setLoading(false); // Cambiar a falso cuando se complete la verificación
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga o un spinner
  }

  // Si el usuario está autenticado y accede a login, redirigir al dashboard
  if (isAuthenticated) {
    return <Outlet />; // Permitir acceso a otras rutas
  }

  console.log('NO ESTA AUTENTICADO', isAuthenticated);

  // Si no está autenticado, redirigir a login
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
