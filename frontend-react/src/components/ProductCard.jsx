import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-300">

      {/* Thumbnail */}
      <img
        src={product.image || "https://placehold.co/600x400"}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-5">

        <span className="text-sm text-blue-600 font-semibold">
          {product.category?.name}
        </span>

        <h3 className="text-xl font-bold mt-2 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-gray-500 mt-2">
          👨‍🏫 {product.instructor}
        </p>

        <div className="flex justify-between mt-4 text-sm">

          <span>
            ⭐ {product.rating ?? 5}
          </span>

          <span>
            👨‍🎓 {product.students ?? 0}
          </span>

        </div>

        <div className="mt-5 flex justify-between items-center">

          <h3 className="text-2xl font-bold text-blue-600">
            Rp {Number(product.price).toLocaleString("id-ID")}
          </h3>

          <Link
            to={`/products/${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Detail
          </Link>

        </div>

      </div>

    </div>
  );
}