import {useState} from 'react';
import Link from 'next/link';


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);



    return (
        <>
            <nav className="flex h-[7vh] bg-gradient-to-r from-teal-400 to-pink-500 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="container flex items-center justify-around mx-auto">
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Home</span>
                </a>
                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">About</span>
                </a>
                </div>
                <div className="px-10 flex">
                    
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <svg viewBox="0 0 100 70" width="40" height="50" className="hover:scale-105 hover:animate-pulse">
                        
                            <rect width="90" height="10" fill='whitesmoke'></rect>
                            <rect y="20" x="10" width="70" height="10" fill='whitesmoke'></rect>
                            <rect y="40" x="10" width="70" height="10" fill='whitesmoke'></rect>
                            <rect y="60" x="0" width="90" height="10" fill='whitesmoke'></rect>
                        
                        </svg>
                    </button>
                </div>
            </nav>
            <div className={`bg-gradient-to-t from-teal-300 to-pink-400 py-5 top-[-7vh] right-0 w-[20vw] text-white fixed  z-0 ease-in-out duration-300 ${showMenu ? 'translate-y-0' : 'translate-y-full'}`}>
                <ul className="w-full text-center">
                    <Link href="/links"><li className='p-3 hover:bg-gradient-to-r hover:from-violet-300 hover:to-emerald-200'>Links</li></Link>
                    <Link href="/contact"><li className='p-3 hover:bg-gradient-to-r hover:from-violet-300 hover:to-emerald-200'>Contact</li></Link>
                </ul>
            </div>



        </>
    )
}


export default NavBar;