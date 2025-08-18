import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // TODO: connect to backend later

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
