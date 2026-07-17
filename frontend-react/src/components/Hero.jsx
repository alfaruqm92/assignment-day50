import { Link } from "react-router-dom";
import HeroImage from "../assets/image/Hero.jpg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-fuchsia-400">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 items-center gap-2">

          {/* Left */}
          <div>

            <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
              🚀 Belajar Tanpa Batas
            </span>

            <h1 className="text-5xl font-bold text-white leading-tight mt-6">
              Tingkatkan Skill Digitalmu
              <br />
              Bersama <span className="text-yellow-300">AfilaAcademy</span>
            </h1>

            <p className="text-white/90 text-lg mt-6 leading-8">
              Belajar React, Laravel, UI/UX, Digital Marketing,
              Data Science, dan berbagai skill digital
              dari mentor berpengalaman.
            </p>

            <div className="flex gap-4 mt-8">

              <Link
                to="/products"
                className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Jelajahi Course
              </Link>

              <Link
                to="/register"
                className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition"
              >
                Daftar Gratis
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={HeroImage}
              alt="Hero"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}