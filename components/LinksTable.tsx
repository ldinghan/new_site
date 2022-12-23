import Link from 'next/link';
import Image from 'next/image';
import GithubLogo from '../assets/github_logo.png';
import LinkedinLogo from '../assets/linkedin_logo.png';

interface Props {
    siteName : string,
    siteText : string,
    siteLogo : any,
    siteURL : string
  }

const LinksData = (props: Props) => {
    
    return (
    <>
        <Link className='hover:border-2 hover:border-white pl-5 h-full w-full flex justify-evenly items-center hover:bg-gradient-to-r hover:from-violet-200 hover:to-emerald-200' href={props.siteURL}>
            <Image src={props.siteLogo} alt={`${props.siteName} Logo`}/>
            <p className='ml-5 sm:text-2xl text-lg font-ChakraPetch font-bold'>{props.siteText}</p>
        </Link>
    </>
    )
};

const LinksTable = () => {

    const links = [
        {siteName: "GitHub", siteText: "Click Here To Visit My GitHub Profile!", siteLogo: GithubLogo, siteURL: "https://github.com/ldinghan"},
        {siteName: "LinkedIn", siteText: "Alternatively, Click Here To Visit My LinkedIn Profile!", siteLogo: LinkedinLogo, siteURL: "https://www.linkedin.com/in/dinghanlim/"},
      ];

    return (
      <>  
        <div className='mt-20 drop-shadow-xl border-8 border-l-fuchsia-400 border-t-fuchsia-300 border-b-sky-200 border-r-sky-300 bg-gradient-to-br from-pink-300 to-sky-300 via-teal-100 flex justify-around items-center flex-col w-[70vw] bg-green-100 h-[40vh]'>
            {links.map((link, key) => {
                return (
                    <LinksData key="link.siteName" siteName={link.siteName} siteText={link.siteText} siteLogo={link.siteLogo} siteURL={link.siteURL}/>
                )
            })}
        </div>
      </>
    )
  }

export default LinksTable;