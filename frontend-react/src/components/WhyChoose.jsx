import { BookOpen, Award, Laptop, Users } from "lucide-react";

const features = [
  {
    icon: <BookOpen size={36} />,
    title: "100+ Online Course",
    description:
      "Belajar berbagai teknologi terbaru mulai dari React, Laravel hingga AI.",
  },
  {
    icon: <Users size={36} />,
    title: "Mentor Berpengalaman",
    description:
      "Materi disusun oleh mentor yang telah bekerja di industri teknologi.",
  },
  {
    icon: <Award size={36} />,
    title: "Sertifikat",
    description:
      "Dapatkan sertifikat setelah menyelesaikan course sebagai portofolio.",
  },
  {
    icon: <Laptop size={36} />,
    title: "Belajar Fleksibel",
    description:
      "Belajar kapan saja dan di mana saja menggunakan laptop maupun smartphone.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Kenapa Memilih AfilaAcademy?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Kami membantu kamu mengembangkan skill digital melalui
            pembelajaran yang mudah dipahami dan sesuai kebutuhan industri.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}