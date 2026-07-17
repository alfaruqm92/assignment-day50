import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate();
    const { logout, user } = useAuth();

     const handleLogout = async () => {
      try {
        await logout();
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-800">
              Dashboard
            </h1>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition"
            >
              Logout
            </button>
          </div>

          <h1 className="text-md font-bold">
            Halo, {user?.name} 
          </h1>

          <p className="text-gray-500">
            Role : {user?.role}
          </p>

          <p className="text-gray-500 mt-2">
            Selamat datang di Dashboard!  
          </p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-gray-500">Total Product</h3>

            <p className="text-4xl font-bold text-blue-600 mt-2">
              12
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-gray-500">Total User</h3>

            <p className="text-4xl font-bold text-green-600 mt-2">
              5
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-gray-500">Category</h3>

            <p className="text-4xl font-bold text-orange-500 mt-2">
              8
            </p>
          </div>

        </div>

        {/* Menu */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <h2 className="text-2xl font-semibold mb-5">
            Menu
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
            >
              Kelola Product
            </Link>

            <Link
              to="/categories"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
            >
              Category
            </Link>

            <Link
              to="/users"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition"
            >
              Users
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}