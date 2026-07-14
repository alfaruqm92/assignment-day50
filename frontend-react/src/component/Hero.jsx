const TextBanner = [
    {
        title: 'Unlock Your Potential with EduLearn',
        desc: 'Embark on a journey and skill development with our comprehensive online courses. Learn at you own pace, anytime, anywhere'}
]
export function Hero() {
    return (
        <section className='flex flex-col items-center justify-center gap-2 w-full relative'>
            <img src='./src/assets/image/Banner.png' alt='Hero' className='w-250 h-170 rounded-2xl ' />
            <div className='item-center text-center'>
                {TextBanner.map((text) => (
                    <div key={text.title} className='absolute flex flex-col gap-2 z-10 translate-x-75 translate-y-0 inset-0 justify-center items-center bg-black/15 w-250 h-170 rounded-2xl'>
                        <h1 className='font-bold text-4xl text-white'>{text.title}</h1>
                        <p className='text-white w-150'>{text.desc}</p>
                        <button className='bg-sky-500 text-white w-32 h-10 rounded-lg hover:bg-sky-700 mt-5'>
                        Learn More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}