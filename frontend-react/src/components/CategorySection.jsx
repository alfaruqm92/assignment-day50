const categories = [
  {
    id: 1,
    name: "Web Development",
    icon: "💻",
  },
  {
    id: 2,
    name: "UI / UX",
    icon: "🎨",
  },
  {
    id: 3,
    name: "Digital Marketing",
    icon: "📈",
  },
  {
    id: 4,
    name: "Data Science",
    icon: "📊",
  },
  {
    id: 5,
    name: "Business",
    icon: "💼",
  },
  {
    id: 6,
    name: "Artificial Intelligence",
    icon: "🤖",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Jelajahi Kategori
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 cursor-pointer p-6 text-center"
            >
              <div className="text-5xl mb-4">
                {category.icon}
              </div>

              <h3 className="font-semibold">
                {category.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}