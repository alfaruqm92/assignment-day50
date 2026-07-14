import ListMenu from "../share/ListMenu";

export default function Navbar() {
  return (
    <nav className='top-0 left-0 w-full flex justify-between items-center z-10 gap-5 p-3 border-b border-gray-500'>
        <div className='flex gap-1 items-center'>
            <img src='./src/assets/icon/Logo.png' alt='logo' />
            <a href="#" className='text-md font-bold'>DebiEdu</a>
        </div>

        <div className='flex gap-6'>
            {ListMenu.map((menu) => (
                <a 
                    key={menu.title}
                    href={menu.href}
                    className='text-md hover:text-xl ease-in-out duration-100 pr-5'>
                    {menu.title} 
                </a>
            ))}
        </div>

        <div className='flex gap-4 pr-2'>
            <button className='bg-sky-500 text-white w-19 h-8 rounded-lg hover:bg-sky-700'>
                Log In           
            </button>

            <a className='text-sky-700 text-sm font-light self-center hover:text-sky-600'>Sign Up</a>
        </div>
    </nav>
  );
}