import Features from '../share/Features'

export function WhyChoose() {
  return (
    <section className="max-w-220 mx-auto py-20 px-6">

      <h2 className="text-5xl font-bold mb-4">
        Why Choose EduLearn?
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mb-12">
        Our platform is designed to provide a seamless and
        effective learning experience, ensuring you gain the
        skills you need to succeed.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {Features.map((feature) => {
          return (
            <div className='flex flex-col gap-2 items-start w-60 border-1 rounded-lg mb-2 p-3'>
                <img src={feature.icon} alt={feature.title} className='w-5 h-5' />
                <p className='font-bold'>{feature.title}</p>
                <p className='text-blue-900 text-sm'>{feature.description}</p>
            </div>
          )
        }
        )}
      </div>

    </section>
  );
}