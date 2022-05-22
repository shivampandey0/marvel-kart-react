import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context';

export const RedirectAuth = () => {
  const {
    userState: { token },
  } = useAuth();

  const location = useLocation();

  return token ? (
    <Navigate to={'/'} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
