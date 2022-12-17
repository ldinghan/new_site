import NavBar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import GithubLogo from '../assets/github_logo.png';
import LinkedinLogo from '../assets/linkedin_logo.png';
import LinksTable from '../components/LinksTable';

export default function Links() {
    return (
      <>
        <NavBar></NavBar>  
        <div className="pt-[8vh] px-[1vw] w-screen h-screen flex items-center flex-col">
            <p className='text-center font-light text-6xl font-serif'>Feel free to check out these links:</p>
                <LinksTable></LinksTable>
        </div>
      </>
    )
  }