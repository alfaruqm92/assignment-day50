import { Link, NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >

            <h1 className="text-2xl font-bold text-blue-800">
              DibiEdu
            </h1>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              className="hover:text-blue-600 font-medium"
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className="hover:text-blue-600 font-medium"
            >
              Courses
            </NavLink>

            <NavLink
              to="/categories"
              className="hover:text-blue-600 font-medium"
            >
              Categories
            </NavLink>

            <NavLink
              to="/about"
              className="hover:text-blue-600 font-medium"
            >
              About
            </NavLink>

          </div>

          {/* Button */}
          <div className="flex items-center gap-3">

            <Link
              to="/login"
              className="px-5 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Register
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}