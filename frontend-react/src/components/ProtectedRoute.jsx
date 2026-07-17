import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, requireAdmin = false }) {
  const { isLoggedIn, isAdmin, loading } = useAuth();

  if (loading) return <p style={{ padding: 24 }}>Memuat...</p>;

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  if (requireAdmin && !isAdmin) return <Navigate to="/dashboard" replace />;

  return children;

}

export default ProtectedRoute;