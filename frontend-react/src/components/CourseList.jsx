import Courses from "../share/Courses";

export function CourseList() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-5xl font-bold mb-12">
        Featured Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {Courses.map((course) => {
            return ( 
            <div key={course.id} className="flex flex-col gap-2">
                <img src={course.image} alt={course.title} className="w-80 h-48 object-cover rounded-2xl hover:scale-120 ease-in-out duration-200" />
                <h4 className="text-xl font-bold mt-4">{course.title}</h4>
                <p className="text-gray-600 w-70 mt-2">{course.description}</p>
            </div>
            )    
        })}

      </div>

      <div className="flex justify-center mt-16">

        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View All Courses
        </button>

      </div>

    </section>
  );
}