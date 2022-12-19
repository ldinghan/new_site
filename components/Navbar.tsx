import {useState} from 'react';
import Link from 'next/link';


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);



    return (
        <>
            <nav className="font-ChakraPetch drop-shadow-md flex h-16 bg-gradient-to-l from-pink-400 to-emerald-500 via-indigo-400 px-2 py-[1vh] sm:px-4 fixed w-full z-20 top-0 left-0">
                <div className="container flex items-center justify-around mx-auto">
                <Link href="/" className="flex items-center justify-center">
                    <span className="hover:text-2xl self-center text-xl font-semibold whitespace-nowrap dark:text-white">Home</span>
                </Link>
                <Link href="/about" className="flex items-center justify-center">
                    <span className="hover:text-2xl text-center self-center text-xl font-semibold whitespace-nowrap dark:text-white">About</span>
                </Link>
                </div>
                <div className="px-10 flex">
                    
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <svg viewBox="0 0 100 75" width="4vw" height="5vh" className={` hover:scale-105 ${showMenu ? 'animate-bounce' : 'animate-none'}`}>
                        
                            <rect width="90" height="10" fill='whitesmoke'></rect>
                            <rect y="20" x="10" width="70" height="10" fill='whitesmoke'></rect>
                            <rect y="40" x="10" width="70" height="10" fill='whitesmoke'></rect>
                            <rect y="60" x="0" width="90" height="10" fill='whitesmoke'></rect>
                        
                        </svg>
                    </button>
                </div>
            </nav>
            <div className={`sm:text-md text-sm h-auto drop-shadow-md bg-gradient-to-t from-teal-400 via-indigo-300 to-pink-400 top-0 right-0 w-[20vw] text-white fixed  z-0 ease-in-out duration-500 ${showMenu ? 'translate-y-16' : 'translate-y-[-100%] invisible'}`}>
                <ul className="font-ChakraPetch w-full text-center">
                    <Link href="/links"><li className='hover:border hover:border-white p-3 hover:bg-gradient-to-r hover:from-violet-300 hover:to-emerald-200'>Links</li></Link>
                    <Link href="/contact"><li className='hover:border hover:border-white p-3 hover:bg-gradient-to-r hover:from-violet-300 hover:to-emerald-200'>Contact</li></Link>
                </ul>
            </div>



        </>
    )
}


export default NavBar;