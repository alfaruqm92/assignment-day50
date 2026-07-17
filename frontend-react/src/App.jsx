import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import Users from "./pages/User";
import UserDetail from "./pages/UserDetail";
import Register from "./pages/Register";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
        <Dashboard />
        </ProtectedRoute>} />
      <Route
        path="/products"
        element={
          <ProtectedRoute requireAdmin>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/create"
        element={
          <ProtectedRoute requireAdmin>
            <CreateProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/edit/:id"
        element={
          <ProtectedRoute requireAdmin>
            <EditProduct />
          </ProtectedRoute>
        }
      />

      <Route
        path="/users"
          element={
              <ProtectedRoute requireAdmin>
                  <Users />
              </ProtectedRoute>
          }
      />

      <Route
        path="/users/:id"
        element={
            <ProtectedRoute requireAdmin>
                <UserDetail />
            </ProtectedRoute>
        }
      />

      <Route path="/register" element={<Register />} />
    </Routes>

    
  );
}