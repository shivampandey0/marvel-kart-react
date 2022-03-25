import { Navigate } from "react-router-dom";
import { useAuth } from "../context";

export const PrivateRoute = ({ children }) => {
  const { userState } = useAuth();
  return userState.token ? children : <Navigate to="/login" replace />;
};
