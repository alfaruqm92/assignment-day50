import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../api/client";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await apiRequest("/register", {
      method: "POST",
      body: form,
    });

      alert("Registrasi berhasil");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registrasi gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">
          DibiEdu
        </h1>

        <p className="text-gray-500 mt-2">
          Buat Akun Baru
        </p>

        <p className="text-sm text-gray-400">
          Mulai perjalanan belajarmu sekarang
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Nama */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Nama Lengkap
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

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
            className="w-full rounded-xl border px-4 py-3 outline-none" 
          />
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
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Konfirmasi Password */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Konfirmasi Password
          </label>

          <input
            type="password"
            name="password_confirmation"
            value={form.password_confirmation}
            onChange={handleChange}
            placeholder="Ulangi password"
            className="w-full rounded-xl border px-4 py-3 outline-none"
          />
        </div>

        {/* Tombol */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Daftar"}
        </button>

      </form>

      <div className="mt-6 text-center text-gray-600">
        Sudah punya akun?{" "}
        <Link
          to="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Login
        </Link>
      </div>

    </div>
  </div>
);
}

export default Register;