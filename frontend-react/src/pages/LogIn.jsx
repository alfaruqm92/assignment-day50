import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { GraduationCap } from "lucide-react";


function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email.trim()) {
      newErrors.email = "Email wajib diisi";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Format email tidak valid";
    }

    if (!form.password) newErrors.password = "Password wajib diisi";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      await login(form.email, form.password);
      console.log("Login berhasil");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      console.log(err.status);
      console.log(err.data);

  setServerError(err.message || "Login gagal");
    } finally {
      setSubmitting(false);
    }
  };


  return (
  <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

      {/* Logo */}
      <div className="flex justify-center mb-3">
        <GraduationCap size={50} className="text-blue-600" />
      </div>

      <h1 className="text-4xl font-bold text-center justify-center text-blue-600">
        AfilaAcademy
      </h1>
      <div className="text-center mb-8">
      

        <p className="text-gray-500 mt-2">
          Selamat Datang Kembali
        </p>

        <p className="text-sm text-gray-400">
          Login untuk melanjutkan belajar
        </p>
      </div>

      {serverError && (
        <div className="mb-4 rounded-xl bg-red-100 text-red-600 px-4 py-3">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            className={`w-full rounded-xl border px-4 py-3 outline-none transition
            ${
              errors.email
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            className={`w-full rounded-xl border px-4 py-3 outline-none transition
            ${
              errors.password
                ? "border-red-500"
                : "border-gray-300 focus:border-blue-500"
            }`}
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
        >
          {submitting ? "Memproses..." : "Login"}
        </button>

      </form>

      <div className="mt-6 text-center text-gray-600">
        Belum punya akun?{" "}
        <Link
          to="/register"
          className="text-blue-600 font-semibold hover:underline"
        >
          Daftar
        </Link>
      </div>

    </div>

  </div>
);
}

export default Login;